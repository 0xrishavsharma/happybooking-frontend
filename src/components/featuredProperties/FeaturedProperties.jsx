import "./featuredProperties.scss"


const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <h1 className="title">Trending properties</h1>
        <div className="fpWrapper">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Star Shine Resort</span>
                <span className="fpCity">Shimla</span>
                <span className="fpPrice">Starting from ₹5,499</span>
                <div className="rating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Trefine Hotel</span>
                <span className="fpCity">Manali</span>
                <span className="fpPrice">Starting from ₹7,499</span>
                <div className="rating">
                    <button>8.6</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName"> Six Star cottage</span>
                <span className="fpCity">Shimla</span>
                <span className="fpPrice">Starting from ₹15,499</span>
                <div className="rating">
                    <button>8.6</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Mountain Star Hotel</span>
                <span className="fpCity">Dalhousie</span>
                <span className="fpPrice">Starting from ₹9,499</span>
                <div className="rating">
                    <button>8.55</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties