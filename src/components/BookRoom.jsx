import React from "react";
import useFetch from "../hooks/useFetch";

const BookRoom = ({ setOpenModal, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = React.useState([]);
	const { data, loading, error, reFetch } = useFetch(
		`/api/hotels/room/${hotelId}`
	);
	console.log("Hotel Data:", data);

	const handleRoomInput = (e) => {
		const selected = e.target.checked;
	};
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto  bg-[#0d0d0d96] outline-none focus:outline-none">
			<div className="relative w-auto max-w-3xl mx-auto my-6">
				{/*content*/}
				<div className="relative flex flex-col w-full bg-[#f2f2f2] border-0 rounded-lg shadow-lg outline-none focus:outline-none">
					{/*header*/}
					<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
						<h3 className="text-3xl font-semibold">Select rooms</h3>
						<button
							className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
							onClick={() => setOpenModal(false)}>
							<span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
								×
							</span>
						</button>
					</div>
					{/*body*/}
					<div className="relative flex-auto p-6">
						<p className="my-4 text-lg leading-relaxed text-blueGray-500">
							I always felt like I could do anything. That’s the main thing
							people are controlled by! Thoughts- their perception of
							themselves! They're slowed down by their perception of themselves.
							If you're taught you can’t do anything, you won’t do anything. I
							was taught I could do everything.
						</p>
						{data.map((room) => {
							return (
								<div className="flex flex-col gap-2">
									<div className="flex items-center gap-6 ">
										<span className="text-lg font-semibold">{room.title}</span>
										<span className="text-sm">{room.description}</span>
										<span className="text-lg">Max people: <span className="font-semibold">{room.maxPeople}</span> </span>
										<span className="text-lg font-semibold">{room.price}</span>
									</div>
									<div className="">
										{
											room.roomNumbers.map((roomNumber) => {
												return (
													<div className="flex items-center gap-6">
														<span className="text-lg font-semibold">{roomNumber.number}</span>
														<input className="text-sm" type="check" value={roomNumber._id} onChange={handleRoomInput} />
													</div>
												);
											})
										}
									</div>
									<div className="flex items-center">
										<button className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none">
											Book
										</button>
									</div>
								</div>
							);
						})}
					</div>
					{/*footer*/}
					<div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
						<button
							className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
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
