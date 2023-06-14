import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredLocations.scss";

const Featured = ({ cityList }) => {
	const { data, loading, error } = useFetch(
		"/api/hotels/countByCity?cities=Chamba,Dalhousie,Dharamshala,Kaza,Kasol,Malana,Manali,Pangi,Shimla,Lahaul-Spiti"
	);
	return (
		<div className="flex justify-center w-full max-w-[1084px]">
			<div className="grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] grid gap-8 px-4 sm:px-8 lg:px-0 w-full">
				{loading
					? cityList.map((city, i) => {
						return (
							<div
								key={i + 1}
								className="flex w-auto h-[180px] bg-gray-200 animate-pulse rounded-md shadow-sm">
								{/* Loading... */}
							</div>
						);
					})
					: cityList.map((city, i) => {
						return (
							<div
								className="relative grid object-cover overflow-hidden rounded-md shadow-sm"
								key={i + 1}>
								<img
									src={city.img}
									alt=""
									className="object-cover w-full h-[180px] col-start-1 col-end-2 row-start-1 row-end-2 aspect-square"
								/>
								<div className="mx-2 mt-1 text-white drop-shadow-[-1px_1px_1px_rgba(0,0,0,2)] col-start-1 col-end-2 row-start-1 row-end-2 ">
									<h1 className="m-0 text-2xl font-bold">{city.name}</h1>
									<h2 className="m-0 text-xl">{data[i]} properties</h2>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default Featured;