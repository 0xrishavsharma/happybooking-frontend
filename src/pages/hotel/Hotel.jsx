import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.scss";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import BookRoom from "../../components/BookRoom";
import { AuthContext } from "../../context/AuthContext";

const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();

	const hotelId = useLocation().pathname.split("/")[2];
	const { data, loading, error, reFetch } = useFetch(
		`/api/hotels/find/${hotelId}`
	);

	const { user } = useContext(AuthContext);
	const { dates, options } = useContext(SearchContext);

	const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
	function dayDifference(date1, date2) {
		const timeDiff = Math.abs(
			new Date(date2.toString())?.getTime() -
				new Date(date1.toString())?.getTime()
		);
		const diffDays = Math.ceil(timeDiff / MILLISECONDS_IN_DAY);
		return diffDays;
	}
	const days =
		("Day difference: ", dayDifference(dates[0]?.endDate, dates[0]?.startDate));

	const photos = [
		{
			id: "0",
			img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		},
		{
			id: "1",
			img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
		},
		{
			id: "2",
			img: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		},
		{
			id: "3",
			img: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		},
		{
			id: "4",
			img: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
		},
		{
			id: "5",
			img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
		},
	];

	const arrowHandler = (direction) => {
		let newSlideNumber;
		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else if (direction === "r")
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		setSlideNumber(newSlideNumber);
	};

	const modalHandler = () => {
		if (user) {
			setOpenModal(true);
		} else {
			navigate("/login");
		}
	};

	return (
		<div className="">
			<Navbar />
			<Header type="hotels" />
			<div
				className={`flex flex-col items-center select-none ${
					open ? "mt-0" : "mt-12"
				}`}>
				{open && (
					<div className="sticky top-0 left-0 w-screen h-screen z-[999] py-12  max-w-full bg-[rgba(0,0,0,0.42)]">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="absolute text-4xl text-gray-200 cursor-pointer right-9 top-9"
							onClick={() => setOpen(false)}
						/>
						<div className="flex items-center justify-center w-full h-full">
							<FontAwesomeIcon
								icon={faCircleArrowLeft}
								className="pl-8 text-2xl text-gray-200 cursor-pointer"
								onClick={() => arrowHandler("l")}
							/>
							<div className="flex justify-center w-full h-[90vh]">
								<img
									src={
										data?.photos?.length > 0
											? data?.photos[slideNumber]?.img
											: photos[slideNumber].img
									}
									className="w-[80%]"
									alt=""
								/>
							</div>
							<FontAwesomeIcon
								icon={faCircleArrowRight}
								className={`pr-8 text-2xl text-gray-200 cursor-pointer`}
								onClick={() => arrowHandler("r")}
							/>
						</div>
					</div>
				)}
				<div className="flex flex-col gap-8 relative w-full max-w-[1084px]">
					{loading ? (
						<div className="h-32 bg-gray-200 rounded-md shadow-sm animate-pulse">
							{/* Loading... */}
						</div>
					) : (
						<div className="">
							<h1 className="text-3xl font-black">{data?.name}</h1>
							<div className="flex items-center gap-3 my-2 text-xs">
								<FontAwesomeIcon icon={faLocationDot} className="" />
								<span className="">{data?.address}</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="font-medium text-[color:var(--secondary-color)]">
									{data?.distance} meters from city center
								</span>
								<span className="font-medium text-green-600">
									Book a stay over ₹{data?.cheapestPrice + 1000} at this
									property and get a free site seeing taxi
								</span>
							</div>
							<button
								type="button"
								onClick={modalHandler}
								className="absolute top-0 right-0 py-3 px-6 text-white font-bold rounded-md bg-[var(--secondary-color)] cursor-pointer">
								Reserve or Book Now!
							</button>
						</div>
					)}
					<div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-2">
						{loading
							? photos.map((city, i) => {
									return (
										<div
											key={i + 1}
											className="flex justify-center items-center w-auto min-h-[280px] bg-gray-200 animate-pulse rounded-md shadow-sm">
											{/* Loading... */}
										</div>
									);
							  })
							: (data?.photos?.length > 0 ? data?.photos : photos).map(
									(photo, i) => {
										return (
											<div
												key={i + 1}
												className="max-h-[280px] min-h-[280px] cursor-pointer"
												onClick={() => {
													setSlideNumber(i), setOpen(true);
												}}>
												<img
													src={photo.img}
													className="object-cover w-full h-full"
													alt=""
													srcSet=""
												/>
											</div>
										);
									}
							  )}
					</div>
					<div className="flex justify-center gap-8 p-3">
						<div className="flex-[3] flex flex-col gap-5">
							<h2 className="text-2xl font-black">{data?.title}</h2>
							<p className="text-sm">{data?.description}</p>
						</div>
						<div className="flex flex-col flex-1 p-6 bg-blue-50">
							<h2 className="text-xl font-black">
								Perfect for a {days}-night stay!
							</h2>
							<p className="text-sm">
								Located in the queen of Mountains.Lorem ipsum dolor sit amet
								consectetur adipisicing elit.{" "}
							</p>
							<h3 className="my-5 text-2xl font-extrabold">
								<b>
									{(days * data?.cheapestPrice * options?.room).toLocaleString(
										"en-IN",
										{
											style: "currency",
											currency: "INR",
											minimumFractionDigits: 0,
											maximumFractionDigits: 0,
										}
									)}
								</b>
								({days} nights)
							</h3>
							<button
								onClick={modalHandler}
								className="font-bold rounded-md bg-[var(--secondary-color)] px-6 py-3 text-white">
								Reserve or Book now
							</button>
						</div>
					</div>
					<MailList />
					<Footer />
				</div>
			</div>
			{openModal && (
				<BookRoom
					openModal={openModal}
					setOpenModal={setOpenModal}
					hotelId={hotelId}
				/>
			)}
		</div>
	);
};

export default Hotel;
