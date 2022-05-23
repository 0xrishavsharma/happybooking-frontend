import "./header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCar, faEarthAsia, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
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
            <div className="headerContent">
                <h2>Travel with burning less cash!</h2>
                <p>Want to get rewarded for traveling? Get an instant discount of 10% when you create your account on HappyBooking.com</p>
                <button className="headerBtn">Register / Sign in</button>
            </div>
            <div className="headerSearch">
                <div className="headerSearchContainer">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header