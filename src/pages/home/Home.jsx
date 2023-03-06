import React from 'react';
import FeaturedLocations from '../../components/featuredLocations/FeaturedLocations';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss";
import { cityList } from "../../utils/featuredHotelList"
import PropertiesList from '../../components/propertiesList/PropertiesList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {

  return (
    <div className='home'>
      <Navbar />
      <Header />
      <div className="flex justify-center">
        <div className='flex flex-col items-center gap-8 mt-20 mb-8 max-w-[1084px]'>
          <FeaturedLocations cityList={cityList} />
          <PropertiesList className="propertiesList" />
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home