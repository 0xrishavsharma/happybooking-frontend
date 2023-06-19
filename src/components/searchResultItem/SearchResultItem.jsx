import React from "react";
import "./searchResultItem.scss";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
	return (
		<div className="searchResultItem" data-testid='SearchResultItem'>
			<div className="first">
				<img
					src={
						item?.photos?.length > 0
							? item.photos[0]
							: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
					}
					// src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
					alt={item ? item.name : "Hotel/Resort/Apartment photo"}
					data-testid="image"
					// class="b8b0793b0e"
					className="rounded-sm h-[200px] w-[200px] object-cover"
				/>
			</div>
			<div className="second">
				<h2 data-testid={'name'}>{item?.name}</h2>
				<span data-testid={'distance'}>{item.distance}</span>
				<span className="taxiOp">Free airport taxi</span>
				<div className="details">
					<span>
						{/* <b>Studio apartment with Air Conditioning</b>
						<p>Entire Studio · 1 Bathroom · 21m&#xb2; 1 Full bed</p> */}
						{item?.description}
					</span>
					<p className="cancelOp">Free cancellation</p>
					<p className="cancelLaterOp">
						Cancel anytime, so lock in this great deal today!
					</p>
				</div>
			</div>
			<div className="third">
				<div className="rating">
					{item.rating && (
						<>
							<div className="left">
								<h4>Good</h4>
								<span>12 reviews</span>
							</div>
							<div data-testid={'rating'} className="right">{item.rating}</div>
						</>
					)}
				</div>
				<span className="hotelComfort">Comfort 8.2</span>
				<div className="bottom">
					<span className="daysPerson">7 nights, 2 adults </span>
					<h3 data-testid={'cheapestPrice'}>₹ {item?.cheapestPrice}</h3>
					{/* <span className="hotelTaxes">+ ₹1,501 taxes and charges</span> */}
					<span className="hotelTaxes">Includes taxes and fees</span>
					<Link data-testid={'link-to-hotels'} to={`/hotels/${item._id}`}>
						<button>See availability</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
