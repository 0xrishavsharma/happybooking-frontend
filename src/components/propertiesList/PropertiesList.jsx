import "./propertiesList.scss";
import { properties } from "./../../utils/propertiesList";

const PropertiesList = () => {
    return (
        <div className="propertiesList flex flex-col gap-6 w-full justify-between] ">
            <h1 className="px-4 mb-0 text-2xl font-extrabold title sm:px-8 lg:px-0">Browse by property type</h1>
            <div className="flex w-full gap-8 px-4 overflow-x-scroll sm:px-8 lg:px-0 card lg:overflow-hidden">
                {
                    properties.map((property, i) => {
                        const { id, img, propertyName, total } = property;
                        return (
                            <div className="flex-1 px-4 cursor-pointer sm:px-8 lg:px-0" key={id + 1}>
                                <img
                                    src={img}
                                    alt=""
                                    className="min-w-[160px] h-[140px] w-full object-cover flex-1 rounded-sm "
                                />
                                <h3 className="mt-3 mb-1 text-xl font-extrabold">{propertyName}</h3>
                                <p className="text-sm">{total}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PropertiesList