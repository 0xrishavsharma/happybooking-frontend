import "./featuredProperties.scss"
import { featuredPropertiesData } from "./../../utils/featuredProperties"

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <h1 className="px-4 title sm:px-8 lg:px-0">Trending properties</h1>
            <div className="px-4 card fpWrapper sm:px-8 lg:px-0">
                {
                    featuredPropertiesData.slice(0, 4).map((property) => {
                        const { id, img, hotelName, location, price, rating, review } = property
                        return (
                            <div className="fpItem" key={id + 1}>
                                <img
                                    src={img}
                                    alt=""
                                    className="fpImg w-full h-[200px] object-cover min-w-[184px] "
                                />
                                <h3 className="my-0 fpName">{hotelName}</h3>
                                <h4 className="my-0 fpCity">{location}</h4>
                                <span className="fpPrice">{price}</span>
                                <div className="flex gap-2 rating">
                                    <button className={`bg-[color:var(--primary-color)] font-bold px-2 py-[1.5px] text-white border-none rounded-sm`}>{rating}</button>
                                    <span>{review}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FeaturedProperties