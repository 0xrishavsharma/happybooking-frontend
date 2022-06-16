import "./propertiesList.scss";

const PropertiesList = () => {
  return (
    <div className="propertiesList">
        <h1 className="title">Browse by property type</h1>
        <div className="propertiesListWrapper">
            <div className="propertiesListItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                    alt=""
                    className="pListImg"
                />
                <h3 className="propertyTitle">Hotels</h3>
                <p className="number">235 Hotels</p>
            </div>
            <div className="propertiesListItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt=""
                    className="pListImg"
                />
                <h3 className="propertyTitle">Apartments</h3>
                <p className="number">2235 Hotels</p>
            </div>
            <div className="propertiesListItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                    alt=""
                    className="pListImg"
                />
                <h3 className="propertyTitle">Resorts</h3>
                <p className="number">1345 resorts</p>
            </div>
            <div className="propertiesListItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                    alt=""
                    className="pListImg"
                />
                <h3 className="propertyTitle">Villas</h3>
                <p className="number">2235 villas</p>
            </div>
            <div className="propertiesListItem">
                <img
                    src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                    alt=""
                    className="pListImg"
                />
                <h3 className="propertyTitle">Cabins</h3>
                <p className="number">1967 cabins</p>
            </div>
        </div>
    </div>
  )
}

export default PropertiesList