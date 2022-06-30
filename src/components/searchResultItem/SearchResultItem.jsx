import React from 'react';
import "./searchResultItem.scss";

const SearchItem = () => {
  return (
    <div className='searchResultItem'>
        <div className='first'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/338187202.webp?k=ac24232b812e6ce84fb3bf46dbf613bcc75a7beb1ae46d2238ea1f515d54a2f7&amp;o=&amp;s=1"
                alt="FabHotel Misty Hills Nehru Kund" 
                width="200" height="200" 
                data-testid="image" class="b8b0793b0e"
            />
        </div>
        <div className='second'>
            <h2>Tower Street Apartments</h2>
            <span>500m from center</span>
            <span className="taxiOp">Free airport taxi</span>
            <div className="details">
                <span> 
                    <b>Studio apartment with Air Conditioning</b> 
                    <p>Entire Studio · 1 Bathroom · 21m&#xb2; 1 Full bed</p>
                </span>
                <p className="cancelOp">Free cancellation</p>
                <p className='cancelLaterOp'>You can cancel later, so lock in this great price today!</p>
            </div>
        </div>
        <div className='third'>
            <div className="rating">
                <div className="left">
                    <h4>Good</h4>
                    <span>12 reviews</span>
                </div>
                <div className="right">
                    7.7
                </div>
            </div>
            <span className='hotelComfort'>Comfort 8.2</span>
            <div className="bottom">
                <span className="daysPerson">7 nights, 2 adults </span>
                <h3>₹ 12,506</h3>
                <span className="hotelTaxes">+ ₹1,501 taxes and charges</span>
                <button>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem