import {
	faCircleQuestion,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDay, format } from "date-fns";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchResultItem from "../../components/searchResultItem/SearchResultItem";
import useFetch from "../../hooks/useFetch";
import "./hotels.scss";

const Hotels = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination);
	const [dates, setDates] = useState(location.state.dates);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	const [minPrice, setMinPrice] = useState();
	const [maxPrice, setMaxPrice] = useState();

	const formattedDestination =
		destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase();
	const { data, error, loading, reFetch } = useFetch(
		`/api/hotels?city=${formattedDestination}&min=${minPrice || 0}&max=${maxPrice || 9999
		}`
	);
	console.log("Data: ", data);

	// Closing the date popup when clicking outside of the popup
	const datePopUpRef = useRef();
	// useEffect(() => {
	//   document.addEventListener('mousedown', (event) => {
	//     if (!datePopUpRef.current.contains(event.target)) {
	//       setOpenDate(false);
	//     }
	//   })
	// }, [])

	const searchButtonHandler = (e) => {
		e.preventDefault();
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
									{`${format(dates[0].startDate, "dd/MM/yyyy")}`} to{" "}
									{`${format(dates[0].endDate, "dd/MM/yyyy")}`}
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
									<input type="number" min={1} placeholder={options.adult} />
								</div>
								<div className="option">
									<span>Children</span>
									<input type="number" min={0} placeholder={options.children} />
								</div>
								<div className="option">
									<span>Room</span>
									<input type="number" min={1} placeholder={options.room} />
								</div>
							</div>
						</div>
						<div className="checkbox">
							<div className="flex gap-2 checkboxWrapper">
								<input type="checkbox" name="" id="" />
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
						<div className="hotelResults">
							{/* {loading ? (
								data.map((item, i) => {
									return (
										<div
											key={i + 1}
											className="flex flex-1 justify-center items-center h-[180px] bg-gray-200 animate-pulse rounded-md shadow-sm"></div>
									);
								})
							) : ( */}
							<div className="flex flex-col gap-4">
								{data.map((item, i) => (
									<SearchResultItem item={item} key={i} />
								))}
							</div>
							{/* )} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotels;
