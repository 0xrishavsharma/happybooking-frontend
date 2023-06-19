import "./mailList.scss"

const MailList = () => {
  return (
    <div className="mailList">
      <h1 className="mailTitle">Save Time, Save Money!</h1>
      <p className="mailSubtitle">Sign up today and we'll keep you updated with the best deals</p>
      <div className="submitEmail">
        <div className="flex items-center justify-center my-4 h-12 gap-1">
          <input data-testid="emailInput" type="text" className="text-black h-full w-72 px-2 rounded-sm" placeholder="Your email" />
          <button type="button" className="h-full px-8 bg-[color:var(--secondary-color)] rounded-sm">Subscribe</button>
        </div>
        <div className="checkbox">
          <input type="checkbox" className="" name="" id="" defaultChecked />
          <span>Send me a link to get the FREE HappyBooking.com app!</span>
        </div>
      </div>
    </div>
  )
}

export default MailList