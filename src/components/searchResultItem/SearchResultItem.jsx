import React from "react";
import "./searchResultItem.scss";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
	console.log("item", item?.photos?.length > 0);
	return (
		<div className="searchResultItem">
			<div className="first">
				<img
					// src={
					// 	item?.photos?.length > 0
					// 		? item.photos[0]
					// 		: "https://cf.bstatic.com/xdata/images/hotel/square200/338187202.webp?k=ac24232b812e6ce84fb3bf46dbf613bcc75a7beb1ae46d2238ea1f515d54a2f7&amp;o=&amp;s=1"
					// }
					src="https://cf.bstatic.com/xdata/images/hotel/square200/338187202.webp?k=ac24232b812e6ce84fb3bf46dbf613bcc75a7beb1ae46d2238ea1f515d54a2f7&amp;o=&amp;s=1"
					alt={item ? item.name : "Hotel/Resort/Apartment photo"}
					width="200"
					height="200"
					data-testid="image"
					class="b8b0793b0e"
					className="rounded-sm"
				/>
			</div>
			<div className="second">
				<h2>{item?.name}</h2>
				<span>{item.distance}</span>
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
							<div className="right">{item.rating}</div>
						</>
					)}
				</div>
				<span className="hotelComfort">Comfort 8.2</span>
				<div className="bottom">
					<span className="daysPerson">7 nights, 2 adults </span>
					<h3>₹ {item?.cheapestPrice}</h3>
					{/* <span className="hotelTaxes">+ ₹1,501 taxes and charges</span> */}
					<span className="hotelTaxes">Includes taxes and fees</span>
					<Link to={`/hotels/${item._id}`}>
						<button>See availability</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
