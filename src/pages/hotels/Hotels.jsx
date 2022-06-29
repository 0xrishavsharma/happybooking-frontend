import { faCircleQuestion, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDay, format } from "date-fns";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotels.scss";

const Hotels = () => {

  const location = useLocation();
  console.log(location);

  const[destination, setDestination] = useState(location.state.destination);
  const[date, setDate] = useState(location.state.date);
  const[options, setOptions] = useState(location.state.options);

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
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Place/Property Name"  />
              </div>
            </div>
            <div className="searchItem">
              <p>Check-in Date</p>
              <div className="input">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Place/Property Name" 
                   value={`${format(date[0].startDate, "MM/dd/yyyy")}`}
                 />
              </div>
            </div>
            <div className="searchItem">
              <p>Check-out Date</p>
              <div className="input">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Place/Property Name" 
                   value={`${format( date[0].endDate, "MM/dd/yyyy")}`}
                 />
              </div>
            </div>
            <div className="searchItem options">
              <div className="input">
                <input type="text" placeholder="Place/Property Name" />
              </div>
            </div>
            <div className="checkbox">
              <div className="checkboxWrapper">
                <input type="checkbox" name="" id=""/>
                <span>I'm travelling for work</span>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels;