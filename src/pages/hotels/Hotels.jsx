import { faCircleQuestion, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
import "./hotels.scss";

const Hotels = () => {

  const location = useLocation();

  const[destination, setDestination] = useState(location.state.destination);
  const[date, setDate] = useState(location.state.date);
  const[openDate, setOpenDate] = useState(false);
  const[options, setOptions] = useState(location.state.options);

  // Closing the date popup when clicking outside of the popup
  const datePopUpRef = useRef();
  useEffect(() => {
    document.addEventListener('mousedown', (event)=>{
      if(!datePopUpRef.current.contains(event.target)){
        setOpenDate(false);
      }
    })
  },[])

  return (
    <div className="hotels">
      <Navbar />
      <Header type="hotels"/>
      <div className="hotelsContainer">
        <div className="hotelsWrapper">
          <div className="hotelSearch">
            <h1 className="title">Search</h1>
            <div className="searchItem">
              <p>Destination/Property Name:</p>
              <div className="input">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
                <input type="text" placeholder="Place/Property Name"  />
              </div>
            </div>
            <div className="searchItem">
              <p>Check-in to Check-out Date</p>
              <div className="input" ref={datePopUpRef} onClick={ (e) => setOpenDate(true)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                <span>
                  {`${format(date[0].startDate, "MM/dd/yyyy")}`} to {`${format( date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                { openDate && (<DateRange
                    onChange={(item) => setDate([item.selection])}  
                    minDate={new Date()}
                    ranges={date}
                    className="date"
                    fixedHeight="240"
                  />)
                }
              </div>
            </div>
            <div className="searchItem options">
              <p>Options</p>
              <div className="optionsContainer">
                <div className="option">
                  <span>Min price <small>(per night)</small> </span>
                  <input type="number" />
                </div>
                <div className="option">
                  <span>Max price <small>(per night)</small> </span>
                  <input type="number" />
                </div>
                <div className="option">
                  <span>Adult</span>
                  <input type="number" min={1} placeholder={options.adult}/>
                </div>
                <div className="option">
                  <span>Children</span>
                  <input type="number" min={0} placeholder={options.children}/>
                </div>
                <div className="option">
                  <span>Room</span>
                  <input type="number" min={1} placeholder={options.room}/>
                </div>
              </div>
            </div>
            <div className="checkbox">
              <div className="checkboxWrapper">
                <input type="checkbox" name="" id=""/>
                <span>I'm traveling for work</span>
              </div>
              <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
            </div>
            <button type="submit" className="searchBtn">Search</button>
          </div>
          <div className="hotelResultContainer">
            <div className="hrHeading">
              <h2>Manali: 372 properties found</h2>
              <div className="mapBtn">
                <button>Show on map</button>
              </div>
            </div>
            <div className="optionsBar">
                <span>Top picks for long stays</span>
                <span>Homes & apartments first</span>
                <span>Price (lowest first)</span>
                <span>Best reviewed & lowest price</span>
                <span>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </span>
            </div>
            <div className="hotelResults">
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels;