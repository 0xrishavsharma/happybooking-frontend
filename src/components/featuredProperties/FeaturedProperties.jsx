import "./featuredProperties.scss";
import { featuredPropertiesData } from "./../../utils/featuredProperties";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/api/hotels?featured=true&limit=4");
  let sortedData = data?.sort((a, b) => b.rating - a.rating);

  const loadingElement = loading && <div data-testid="loading-element">Loading...</div>;
  const noPropertiesElement = !loading && data.length !== 0 &&
    <div data-testid="no-properties-element">No Properties</div>;

		return (
    <div className="fp">
      {loadingElement}
      {noPropertiesElement}
      {!loading && data && data.length !== 0 && (
        <>
          <h1 className="px-4 title sm:px-8 lg:px-0">Trending properties</h1>
          <div className="px-4 card fpWrapper sm:px-8 lg:px-0">
            {featuredPropertiesData?.slice(0, 4).map((property, i) => {
              const { id, img, hotelName, location, price, rating, review } = property;
              return (
                <div className="fpItem" key={id + 1} data-testid="property-element">
                  <img
                    src={
                      sortedData[i] && sortedData[i].photos.length >= 1
                        ? sortedData[i].photos[0]
                        : img
                    }
                    alt=""
                    className="fpImg w-full h-[200px] object-cover min-w-[184px] "
                  />
                  <h3 className="my-0">
                    <span className="text-xl font-bold">
                      {sortedData ? sortedData[i]?.name : hotelName}
                    </span>
                    <span className="text-sm opacity-80">
                      ({sortedData ? sortedData[i]?.type : type})
                    </span>
                  </h3>
                  <h4 className="my-0 fpCity">{sortedData[i]?.city}</h4>
                  <span className="fpPrice">
                    Starting from ₹{sortedData ? sortedData[i]?.cheapestPrice : price}
                  </span>
                  <div className="flex gap-2 rating">
                    <button className={`bg-[color:var(--primary-color)] font-bold px-2 py-[1.5px] text-white border-none rounded-sm`}>
                      {sortedData ? sortedData[i]?.rating : rating}
                    </button>
                    <span>{review}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
