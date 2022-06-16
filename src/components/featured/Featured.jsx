import './featured.scss';

const Featured = ({cityList}) => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src={cityList[0].img} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>{cityList[0].name}</h1>
          <h2>{cityList[0].properties}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={cityList[1].img} alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>{cityList[1].name}</h1>
          <h2>{cityList[1].properties}</h2>
        </div>
      </div>
      <div className="featuredItem">
      <img src={cityList[2].img} className="featuredImg" />
        <div className="featuredTitles">
          <h1>{cityList[2].name}</h1>
          <h2>{cityList[2].properties}</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured