import React from 'react'
import './CSS/BottumImage.css'
import logo from './Images/logo.png'

function BottumImage() {
  return (
    <> <div className="bfooter">
      <div className="bottum-container">
        <div className="div1">
            <img src={logo} alt="" /> <br />
            <span>Lorem ipsum dolor sit, amet consecteture </span>
            <span> Nostrum necessitatibus voluptas illo atque</span>
            <span> minima quas eligendi hic libero!</span>
        </div>
        <div id="div2-b">
            <h5>Keep in Touch</h5> <br />
            <span>Subscribe to receive new product updates be the </span><span> first to know about sales and more</span> <br />
            <div className="subscribe">
                <span>Enter your email address</span>
                <span>Subscribe</span>
            </div> 
        </div> 
        <div className="div3">
            <h5>More Info</h5> <br />
                <li>Shiping & Delivery</li>
                <li>Refund Policy</li>
                <li>Parener Program</li>
                <li>You buy we donate</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
        </div>
      </div> <br />
      <hr />
      <div className='footer'>
        <span>&copy; CopyRight 2023 This is footer  </span>
      </div>
      </div>

    </>
  )
}

export default BottumImage
