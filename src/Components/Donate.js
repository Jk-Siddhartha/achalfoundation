import React from "react";
import Navbar from "./Navbar";
import donatebg from "../Images/donatebg.png";
import qr from "../Images/qr.png";

const Donate = () => {
  return (
    <>
      <div className="donate-page">
        <div className="donate-page-hero-section">
          <Navbar />
          <img src={donatebg} alt="" srcset="" />
        </div>
        <div className="contribute">
          <h1>Contribute</h1>
          <div className="donation-amount">
            <p>Donation Amount</p>
            <div className="selected-amounts">
              <div>100</div>
              <div>200</div>
              <div>500</div>
              <div>2000</div>
            </div>
            <input type="number" name="" id="" placeholder="Enter Amount" />
          </div>
          <div className="payment-gateway">
            <h2>Choose Payment Gateway</h2>
            <div>
              <input type="radio" name="" id="" />
              <span>Net Banking</span>
              <input type="radio" name="" id="" />
              <span>HDFC Bank</span>
              <input type="radio" name="" id="" />
              <span>SBI Bank</span>
              <input type="radio" name="" id="" />
              <span>ICICI Bank</span>
              <input type="radio" name="" id="" />
              <span>Paytm</span>
            </div>
          </div>
          <div className="proceed-btn-container">
            <button className="proceed">Proceed</button>
          </div>
        </div>
        <h1>If you wish to pay through UPI</h1>
        <div className="qr-img-container">
          <img src={qr} alt="" className="qr-img" />
          <p>VPA : </p>
          <p>Name : Achal Foundation</p>
        </div>

        <div className="copyright-text">
          <p>Copyright 2022 - Achal Welfare Foundation, All Rights Reserved</p>
          <div className="back-to-top"></div>
        </div>
      </div>
    </>
  );
};

export default Donate;
