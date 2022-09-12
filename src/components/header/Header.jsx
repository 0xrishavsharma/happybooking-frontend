import "./header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faEarthAsia, faPerson, faPlane, faTaxi, faUser } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from "react-date-range";
import { useEffect, useRef, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns/esm";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {

    // Clicking on other parts of document will close the calendar and options popup.
    let menuRef = useRef();
    useEffect(() => {
<<<<<<< HEAD
        document.addEventListener('mousedown', (event) => {
            if (!menuRef.current.contains(event.target)) {
                setOpenPopCalendar(false);
                setOpenOptions(false);
            }
=======
        document.addEventListener('mousedown', (event) =>{
          if(!menuRef.current.contains(event.target)){
            setOpenPopCalendar(true);
            setOpenOptions(false);
          }
>>>>>>> 7756b6e1e2b3099aa72bd7ed1c8accfd52f98b1e
        })
    })

    // Destination selection
    const [destination, setDestination] = useState("");

    // Booking dates selection
    const [openPopCalendar, setOpenPopCalendar] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    // Room and number of people selection
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1,
        },
    );

    // No. of people and room number, increase and decrease
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation == "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    // Navigating to hotels page
    const navigate = useNavigate();
    const inputRef = useRef();
    const handleSearch = (e) => {
        navigate("/hotels", { state: { destination, date, options } })
        // try{
        //     if(!inputRef.current.contains()){
        //         navigate("/hotels", { state: { destination, date, options } })
        //     }
        //     else{
        //         alert("Please fill all inputs to search the hotels!")
        //     }
        // }catch(error){
        //     console.log(error)
        // }
    }

    return (
        <div className="header">
            <div className="headerContainer">
                <div className={type === "hotels" ? "headerList hotelsMode" : "headerList"}>
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

<<<<<<< HEAD
                {type != "hotels" &&
                    <>
                        <div className="headerContent">
                            <h2>Travel with burning less cash!</h2>
                            <p>Want to get rewarded for traveling? Get an instant discount of 10% when you create your account on HappyBooking.com</p>
                            <button className="headerBtn">Register / Sign in</button>
=======
                {type != "hotels" && 
                <>
                    <div className="headerContent">
                        <h2>Travel with burning less cash!</h2>
                        <p>Want to get rewarded for traveling? Get an instant discount of 10% when you create your account on HappyBooking.com</p>
                        <button className="headerBtn">Register / Sign in</button>
                    </div>
                    <div className="headerSearch">
                        <div className="headerSearchContainer">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="icon" />
                                <input className="headerSearchInput"
                                    ref={inputRef}
                                    onChange={(e) => setDestination(e.target.value)}
                                    type="text"
                                    placeholder="Where are you going?" />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                                <div ref={menuRef}>
                                    <span className="headerSearchText calendarPopInput" ref={inputRef} onClick={() => setOpenPopCalendar(false)}> 
                                        {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                    </span>
                                    {!openPopCalendar &&
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            minDate={new Date()}
                                            ref={inputRef}
                                            className="datePopCalendar"
                                        />
                                    }
                                </div>
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="icon" />
                                <div ref={menuRef}>
                                    <span className="headerSearchText optionsPopInput" onClick={() => setOpenOptions(true)} >
                                        {` ${options.adult} adult · ${options.children} children · ${options.room} room`}
                                    </span>
                                    {openOptions &&
                                        <div className="headerOptions" >
                                            <div className="optionItem">
                                                <span className="adult">Adult</span>
                                                <div className="numbers">
                                                    <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} className="decreaseNumber"> - </button>
                                                    <span className="number"> {`${options.adult}`} </span>
                                                    <button onClick={() => handleOption("adult", "i")} className="increaseNumber">+</button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="children">Children</span>
                                                <div className="numbers">
                                                    <button disabled={options.children <= 0} onClick={() => handleOption("children", "d")} className="decreaseNumber"> - </button>
                                                    <span className="number"> {`${options.children}`}</span>
                                                    <button onClick={() => handleOption("children", "i")} className="increaseNumber">+</button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="room">Room</span>
                                                <div className="numbers">
                                                    <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")} className="decreaseNumber"> - </button>
                                                    <span className="number">  {`${options.room}`}</span>
                                                    <button onClick={() => handleOption("room", "i")} className="increaseNumber">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <button className="headerBtn" onClick={handleSearch}>Search</button>
>>>>>>> 7756b6e1e2b3099aa72bd7ed1c8accfd52f98b1e
                        </div>
                        <div className="headerSearch">
                            <div className="headerSearchContainer">
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faBed} className="icon" />
                                    <input className="headerSearchInput"
                                        ref={inputRef}
                                        onChange={(e) => setDestination(e.target.value)}
                                        type="text"
                                        placeholder="Where are you going?" />
                                </div>
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                                    <div ref={menuRef}>
                                        <span className="headerSearchText calendarPopInput" ref={inputRef} onClick={() => setOpenPopCalendar(true)}>
                                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                        </span>
                                        {openPopCalendar &&
                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={item => setDate([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                                minDate={new Date()}
                                                ref={inputRef}
                                                className="datePopCalendar"
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faPerson} className="icon" />
                                    <div ref={menuRef}>
                                        <span className="headerSearchText optionsPopInput" onClick={() => setOpenOptions(true)} >{` ${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                                        {openOptions && <div className="headerOptions" >
                                            <div className="optionItem">
                                                <span className="adult">Adult</span>
                                                <div className="numbers">
                                                    <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} className="decreaseNumber"> - </button>
                                                    <span className="number"> {`${options.adult}`} </span>
                                                    <button onClick={() => handleOption("adult", "i")} className="increaseNumber">+</button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="children">Children</span>
                                                <div className="numbers">
                                                    <button disabled={options.children <= 0} onClick={() => handleOption("children", "d")} className="decreaseNumber"> - </button>
                                                    <span className="number"> {`${options.children}`}</span>
                                                    <button onClick={() => handleOption("children", "i")} className="increaseNumber">+</button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="room">Room</span>
                                                <div className="numbers">
                                                    <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")} className="decreaseNumber"> - </button>
                                                    <span className="number">  {`${options.room}`}</span>
                                                    <button onClick={() => handleOption("room", "i")} className="increaseNumber">+</button>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                                <div className="headerBtnContainer">
                                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Header