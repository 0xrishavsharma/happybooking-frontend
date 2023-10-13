import {
	faCircleQuestion,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDay, format, set } from "date-fns";
import { useContext, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchResultItem from "../../components/searchResultItem/SearchResultItem";
import useFetch from "../../hooks/useFetch";
import "./hotels.scss";
import { SearchContext } from "../../context/SearchContext";

const Hotels = () => {
	const location = useLocation();
	const {
		destination: contextDestination,
		dates: contextDates,
		options: contextOptions,
		travelingForWork: contextTravelingForWork,
		dispatch,
	} = useContext(SearchContext);

	const [destination, setDestination] = useState(contextDestination);
	const [dates, setDates] = useState(contextDates);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(contextOptions);
	const [travelingForWork, setTravelingForWork] = useState(
		contextTravelingForWork
	);
	const [minPrice, setMinPrice] = useState();
	const [maxPrice, setMaxPrice] = useState();

	const formattedDestination =
		destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase();
	const { data, error, loading, reFetch } = useFetch(
		`https://happybooking-backend.onrender.com/api/hotels?city=${formattedDestination}&min=${minPrice || 0}&max=${maxPrice || 9999
		}`
	);

	// Closing the date popup when clicking outside of the popup
	const datePopUpRef = useRef();
	// useEffect(() => {
	//   document.addEventListener('mousedown', (event) => {
	//     if (!datePopUpRef.current.contains(event.target)) {
	//       setOpenDate(false);
	//     }
	//   })
	// }, [])

	// const handleOption = (name, logic) => {
	// 	setOptions((prev) => {
	// 		return {
	// 			...prev,
	// 			[name]: logic === "d" ? prev[name] + 1 : prev[name] - 1,
	// 		};
	// 	}
	// }

	const searchButtonHandler = (e) => {
		e.preventDefault();
		dispatch({
			type: "NEW_SEARCH",
			payload: { destination, dates, options, travelingForWork },
		});

		reFetch();
	};

	return (
		<div className="hotels">
			<Navbar />
			<Header type="hotels" />
			<div className="flex justify-center hotelsContainer">
				<div className="hotelsWrapper max-w-[1084px] flex flex-col md:flex-row">
					<div className="hotelSearch lg:sticky">
						<h1 className="title">Search</h1>
						<div className="mt-2 searchItem">
							<p className="text-[0.8rem]">Destination/Property Name:</p>
							<div className="input">
								<FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
								<input
									type="text"
									placeholder="Place/Property Name"
									value={formattedDestination}
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
						</div>
						<div className="mt-2 searchItem">
							<p className="text-[0.8rem]">Check-in to Check-out Date</p>
							<div
								className="input"
								ref={datePopUpRef}
								onClick={(e) => setOpenDate(!openDate)}>
								<FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
								<span>
									{`${format(
										new Date((dates[0]?.startDate).toString()),
										"dd/MM/yyyy"
									)}`}{" "}
									to{" "}
									{`${format(
										new Date((dates[0]?.endDate).toString()),
										"dd/MM/yyyy"
									)}`}
								</span>
								{openDate && (
									<DateRange
										onChange={(item) => setDates([item.selection])}
										minDate={new Date()}
										ranges={dates}
										className="date"
										fixedHeight="240"
									/>
								)}
							</div>
						</div>
						<div className="searchItem options">
							<p>Options</p>
							<div className="optionsContainer">
								<div className="option">
									<span>
										Min price <small>(per night)</small>{" "}
									</span>
									<input
										type="number"
										onChange={(e) => setMinPrice(e.target.value)}
									/>
								</div>
								<div className="option">
									<span>
										Max price <small>(per night)</small>{" "}
									</span>
									<input
										type="number"
										onChange={(e) => setMaxPrice(e.target.value)}
									/>
								</div>
								<div className="option">
									<span>Adult</span>
									<input
										type="number"
										min={1}
										value={options.adult}
										onChange={(e) =>
											setOptions((prev) => {
												return { ...prev, adult: e.target.value };
											})
										}
									/>
								</div>
								<div className="option">
									<span>Children</span>
									<input
										type="number"
										min={0}
										value={options.children}
										onChange={(e) =>
											setOptions((prev) => {
												return { ...prev, children: e.target.value };
											})
										}
									/>
								</div>
								<div className="option">
									<span>Room</span>
									<input
										type="number"
										min={1}
										value={options.room}
										onChange={(e) =>
											setOptions((prev) => {
												return { ...prev, room: e.target.value };
											})
										}
									/>
								</div>
							</div>
						</div>
						<div className="checkbox">
							<div className="flex gap-2 checkboxWrapper">
								<input
									type="checkbox"
									name=""
									id=""
									// checked={options.travelingForWork}
									checked={travelingForWork}
									onChange={(e) => setTravelingForWork(!travelingForWork)}
								/>
								<span>I'm traveling for work</span>
							</div>
							<FontAwesomeIcon icon={faCircleQuestion} className="icon" />
						</div>
						<button
							type="submit"
							className="searchBtn"
							onClick={searchButtonHandler}>
							Search
						</button>
					</div>
					<div className="hotelResultContainer">
						<div className="hrHeading">
							<h2>
								{formattedDestination &&
									`${formattedDestination} : ${data.length} ${data.length > 1 || data.length === 0
										? "properties"
										: "property"
									} found`}
							</h2>
							<div className="mapBtn">
								<button>Show on map</button>
							</div>
						</div>
						<div className="optionsBar">
							<span className="active">Top picks for long stays</span>
							<span>Homes & apartments first</span>
							<span>Price (lowest first)</span>
							<span>Best reviewed & lowest price</span>
							<span>
								<FontAwesomeIcon icon={faCircleQuestion} />
							</span>
						</div>
						<div className="mb-6 hotelResults">
							{loading ? (
								data.map((item, i) => {
									return (
										<div
											key={i + 1}
											className="w-full p-4 bg-gray-200 rounded-md shadow-sm h-52 animate-pulse"></div>
									);
								})
							) : (
								<div className="flex flex-col gap-4">
									{data.map((item, i) => (
										<SearchResultItem item={item} key={i} />
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotels;
