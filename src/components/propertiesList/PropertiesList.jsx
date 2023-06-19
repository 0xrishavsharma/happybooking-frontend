import "./propertiesList.scss";
import { properties } from "./../../utils/propertiesList";
import useFetch from "../../hooks/useFetch";

const PropertiesList = () => {
	const { data, loading, error } = useFetch("/api/hotels/countByType");
	return (
		<div className="propertiesList flex flex-col gap-6 w-full justify-between] ">
			<h1 className="px-4 mb-0 text-2xl font-extrabold title sm:px-8 lg:px-0">
				Browse by property type
			</h1>
			<div className="flex w-full gap-8 px-4 overflow-x-scroll sm:px-8 lg:px-0 card lg:overflow-hidden">
				{loading
					? properties.map((city, i) => {
							return (
								<div
							  	data-testid="loading-element"
									key={i + 1}
									className="flex flex-1 justify-center items-center h-[180px] bg-gray-200 animate-pulse rounded-md shadow-sm">
									Loading...
								</div>
							);
					  })
					: properties.map((property, i) => {
							const { id, img, propertyName, total } = property;
							return (
								<div
									data-testid="propertiesList"
									className="flex-1 px-4 cursor-pointer sm:px-8 lg:px-0"
									key={id + 1}>
									<img
										data-testid="property-image"
										src={img}
										alt=""
										className="min-w-[160px] h-[140px] w-full object-cover flex-1 rounded-sm "
									/>
									<h3 data-testid={'property-name'} className="mt-3 mb-1 text-xl font-extrabold capitalize">
										{data[i]?.name}
									</h3>
									<p className="flex gap-1 text-sm">
										<span>{data[i]?.value} </span>
										<span>{data[i]?.name}s </span>
									</p>
								</div>
							);
					  })}
			</div>
		</div>
	);
};

export default PropertiesList;
