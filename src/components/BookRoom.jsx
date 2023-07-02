import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { SearchContext } from "../context/SearchContext";

const BookRoom = ({ setOpenModal, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = React.useState([]);
	const { data, loading, error, reFetch } = useFetch(
		`/api/hotels/room/${hotelId}`
	);
	const { dates } = useContext(SearchContext);

	const handleRoomInput = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((room) => room !== value)
		);
	};

	// As the dates that we are getting is only start and end date but we need all the dates in between.
	// So we are creating a function that will return all the dates in between the start and end date.
	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);
		const date = new Date(start.getTime());
		let list = [];

		while (date <= end) {
			list.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}
		return list;
	};
	const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

	// We are creating a function that will return the available rooms for the selected dates.
	// We are getting the available rooms from the backend.
	const getAvailableRooms = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.some((date) =>
			allDates.includes(new Date(date).getTime())
		);
		return !isFound;
	};

	const handleBookNow = async () => {
		try {
			await Promise.all(
				selectedRooms.map(async (room) => {
					await axios.post(`/api/rooms/availability/${room}`);
				})
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto  bg-[#0d0d0d96] outline-none focus:outline-none">
			<div className="relative w-full max-w-3xl mx-auto my-6">
				{/*content*/}
				<div className="relative flex mt-10 flex-col w-full bg-[#f2f2f2] border-0 rounded-lg shadow-lg outline-none focus:outline-none">
					{/*header*/}
					<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
						<h3 className="text-3xl font-black">Select rooms</h3>
						<button
							className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
							onClick={() => setOpenModal(false)}>
							<span className="block w-6 h-6 text-3xl text-black bg-transparent outline-none focus:outline-none">
								×
							</span>
						</button>
					</div>
					{/*body*/}
					<div className="relative flex-auto w-full p-6">
						{/* <p className="my-4 text-lg leading-relaxed text-blueGray-500">
							I always felt like I could do anything. That’s the main thing
							people are controlled by! Thoughts- their perception of
							themselves! They're slowed down by their perception of themselves.
							If you're taught you can’t do anything, you won’t do anything. I
							was taught I could do everything.
						</p> */}
						<div className="flex flex-col gap-4 min-w-[80%]">
							{data.map((room, i) => {
								return (
									<div
										key={i + 1}
										className="flex flex-col gap-2 p-6 border-2 border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none">
										<div className="flex justify-between gap-6">
											<div className="flex flex-col flex-1 ">
												<span className="text-lg font-semibold">
													{room.title}
												</span>
												<span className="text-xs text-gray-500">
													{room.description}
												</span>
												<span className="flex-1 text-sm">
													Max people:{" "}
													<span className="font-semibold">
														{room.maxPeople}
													</span>{" "}
												</span>
											</div>

											<span className="flex-1 font-semibold text-center">
												₹{room.price}
											</span>
										</div>
										<div className="flex flex-wrap gap-6 ">
											{room.roomNumbers.map((roomNumber) => {
												return (
													<div
														className="flex items-center gap-2"
														key={roomNumber._id}>
														<input
															className="text-lg"
															type="checkbox"
															disabled={!getAvailableRooms(roomNumber)}
															value={roomNumber._id}
															onChange={handleRoomInput}
														/>
														<span className="text-lg font-semibold">
															{roomNumber.number}
														</span>
													</div>
												);
											})}
										</div>
									</div>
								);
							})}
							<div className="flex items-center">
								<button
									onClick={handleBookNow}
									className="px-8 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase outline-none focus:outline-none bg-secondary ">
									Book Now
								</button>
							</div>
						</div>
					</div>
					{/*footer*/}
					<div className="flex items-center justify-end p-2 border-t border-solid rounded-b border-blueGray-200">
						<button
							className="px-6 py-2 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
							type="button"
							style={{ transition: "all .15s ease" }}
							onClick={() => setOpenModal(false)}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookRoom;
