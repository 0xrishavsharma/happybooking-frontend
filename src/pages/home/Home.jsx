import React from 'react';
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss";
import {cityList} from "./../../featuredHotelList"
import PropertiesList from '../../components/propertiesList/PropertiesList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {

  return (
    <div className='home'>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured cityList={[cityList[0],cityList[1], cityList[2]]}/>
        <Featured cityList={[cityList[3],cityList[4], cityList[5]]}/>
        <PropertiesList className="propertiesList"/>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home