import "./mailList.scss"

const MailList = () => {
  return (
    <div className="mailList">
        <h1 className="mailTitle">Save Time, Save Money!</h1>
        <p className="mailSubtitle">Sign up today and we'll keep you updated with the best deals</p>
        <div className="submitEmail">
          <div className="input">
              <input type="text" placeholder="Your email"/>
              <button className="mailBtn">Subscribe</button>
          </div>
          <div className="checkbox">
              <input type="checkbox" name="" id=""  defaultChecked/>
              <span>Send me a link to get the FREE HappyBooking.com app!</span>
          </div>
        </div>
    </div>
  )
}

export default MailList