import { faCircleQuestion, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotels.scss";

const Hotels = () => {
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
                <input type="text" placeholder="Place/Property Name" />
              </div>
            </div>
            <div className="searchItem">
              <p>Check-in Date</p>
              <div className="input">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Place/Property Name" />
              </div>
            </div>
            <div className="searchItem">
              <p>Check-out Date</p>
              <div className="input">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Place/Property Name" />
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
          <div className="hotelResult">result</div>
        </div>
      </div>
    </div>
  )
}

export default Hotels;