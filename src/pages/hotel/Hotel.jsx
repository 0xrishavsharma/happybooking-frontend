import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.scss";

const Hotel = () => {
  return (
    <div className="hotel">
      <Navbar/>
      <Header type="hotels"/>
    </div>
  )
}

export default Hotel