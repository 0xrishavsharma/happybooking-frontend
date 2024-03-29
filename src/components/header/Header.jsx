import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faCalendarDays,
	faCar,
	faEarthAsia,
	faPerson,
	faPlane,
	faTaxi,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useContext, useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns/esm";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
	const menuRef = useRef();
	const { user } = useContext(AuthContext);

	// Destination selection
	const [destination, setDestination] = useState("");

	// Booking dates selection
	const [openPopCalendar, setOpenPopCalendar] = useState(false);
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	// Room and number of people selection
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	// Setting travelingForWork
	const [travelingForWork, setTravelingForWork] = useState(false);

	//Input refs
	const locationInputRef = useRef();
	const dateInputRef = useRef();
	const adultInputRef = useRef();
	const childrenInputRef = useRef();
	const roomInputRef = useRef();

	// Navigating to hotels page
	const navigate = useNavigate();
	const inputRef = useRef();

	const { dispatch } = useContext(SearchContext);

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch({
			type: "NEW_SEARCH",
			payload: { destination, dates, options, travelingForWork },
		});
		try {
			if (
				locationInputRef.current.value === "" &&
				locationInputRef.current.value === null &&
				dateInputRef.current.value === ""
			) {
				alert("Please fill all inputs to search the hotels!");
			} else {
				navigate("/hotels", {
					state: { destination, dates, options, travelingForWork },
				});
				// console.log("Location input ref: " + locationInputRef.current.value);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleOption = (name, logic) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: logic === "d" ? options[name] - 1 : options[name] + 1,
			};
		});
	};

	const handleOptionsEnter = (e) => {
		if (e.key === "Enter") {
			setOpenOptions(!openOptions);
		}
	};

	return (
		<>
			<div className="header">
				<div className="headerContainer">
					<div
						className={
							type === "hotels" ? "headerList hotelsMode" : "headerList"
						}>
						<div className="headerListItem active">
							<FontAwesomeIcon icon={faBed} />
							<span>Stays</span>
						</div>
						<div className="headerListItem">
							<FontAwesomeIcon icon={faPlane} />
							<span>Flights</span>
						</div>
						<div className="headerListItem">
							<FontAwesomeIcon icon={faCar} />
							<span>Car Rentals</span>
						</div>
						<div className="headerListItem">
							<FontAwesomeIcon icon={faEarthAsia} />
							<span>Attractions</span>
						</div>
						<div className="headerListItem">
							<FontAwesomeIcon icon={faTaxi} />
							<span>Airport Taxis</span>
						</div>
					</div>

					{type != "hotels" && (
						<>
							<div className="headerContent">
								{user ? (
									<h2>{user.username}, travel with burning less cash!</h2>
								) : (
									<h2>Travel with burning less cash!</h2>
								)}
								{user ? (
									<p>
										Get rewarded for your first booking with us. Get an instant
										discount of 10% when you apply
										<i className="mx-1">
											{" "}
											<b>{user.username}10 </b>
										</i>
										code on your first booking.
									</p>
								) : (
									<p>
										Want to get rewarded for traveling? Get an instant discount
										of 10% when you create your account on HappyBooking.com
									</p>
								)}
								{!user && <Link to="/login">
									<button className="headerBtn">Register</button>
								</Link>
								}
							</div>
							<div className="headerSearch">
								<div className="headerSearchContainer">
									<div className="headerSearchItem">
										<FontAwesomeIcon icon={faBed} className="icon" />
										<input
											className="cursor-text headerSearchInput"
											ref={locationInputRef}
											onChange={(e) => setDestination(e.target.value)}
											type="text"
											placeholder="Where are you going?"
										/>
									</div>
									<div
										className="headerSearchItem"
										tabIndex="0"
										onKeyDown={(e) =>
											e.key === "Enter" && setOpenPopCalendar(!openPopCalendar)
										}>
										<FontAwesomeIcon icon={faCalendarDays} className="icon" />
										<div ref={menuRef}>
											<span
												tabIndex="auto"
												className="cursor-pointer select-none headerSearchText calendarPopInput "
												ref={dateInputRef}
												onClick={() => setOpenPopCalendar(!openPopCalendar)}>
												{`${format(
													dates[0].startDate,
													"dd/MM/yyyy"
												)} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
											</span>
											{openPopCalendar && (
												<DateRange
													editableDateInputs={true}
													onChange={(item) => setDates([item.selection])}
													moveRangeOnFirstSelection={false}
													ranges={dates}
													minDate={new Date()}
													ref={inputRef}
													className="datePopCalendar"
												/>
											)}
										</div>
									</div>
									<div
										className="headerSearchItem"
										tabIndex="0"
										onKeyDown={(e) =>
											e.key === "Enter" && setOpenOptions(!openOptions)
										}>
										<FontAwesomeIcon icon={faPerson} className="icon" />
										<div ref={menuRef}>
											<span
												className="cursor-pointer select-none headerSearchText optionsPopInput"
												onClick={() => setOpenOptions(!openOptions)}>
												{` ${options.adult} adult · ${options.children} children · ${options.room} room`}
											</span>
											{openOptions && (
												<div className="headerOptions">
													<div className="optionItem">
														<span className="adult">Adult</span>
														<div className="numbers">
															<button
																disabled={options.adult <= 1}
																onClick={() => handleOption("adult", "d")}
																className="decreaseNumber">
																{" "}
																-{" "}
															</button>
															<span className="number" ref={adultInputRef}>
																{" "}
																{`${options.adult}`}{" "}
															</span>
															<button
																onClick={() => handleOption("adult", "i")}
																className="increaseNumber">
																+
															</button>
														</div>
													</div>
													<div className="optionItem">
														<span className="children">Children</span>
														<div className="numbers">
															<button
																disabled={options.children <= 0}
																onClick={() => handleOption("children", "d")}
																className="decreaseNumber">
																{" "}
																-{" "}
															</button>
															<span className="number" ref={childrenInputRef}>
																{" "}
																{`${options.children}`}
															</span>
															<button
																onClick={() => handleOption("children", "i")}
																className="increaseNumber">
																+
															</button>
														</div>
													</div>
													<div className="optionItem">
														<span className="room">Room</span>
														<div className="numbers">
															<button
																disabled={options.room <= 1}
																onClick={() => handleOption("room", "d")}
																className="decreaseNumber">
																{" "}
																-{" "}
															</button>
															<span className="number" ref={roomInputRef}>
																{" "}
																{`${options.room}`}
															</span>
															<button
																onClick={() => handleOption("room", "i")}
																className="increaseNumber">
																+
															</button>
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
									<div className="headerBtnContainer">
										<button className="headerBtn" onClick={handleSearch}>
											Search
										</button>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
			{type !== "hotels" && (
				<div className="flex items-center justify-center gap-2 mt-10 ">
					<div className="w-full max-w-[1084px] flex items-center gap-2 max-[1124px]:px-8 ">
						<input
							type="checkbox"
							// checked={travelingForWork}
							onChange={(e) => setTravelingForWork(!travelingForWork)}
							className="w-5 h-5 rounded-none cursor-pointer"
						/>
						<span className="text-sm">I am traveling for work</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
