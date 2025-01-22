import React from "react";
import "./Reason.css";
import Img1 from "../../assects/image1.png";
import Img2 from "../../assects/image2.png";
import Img3 from "../../assects/image3.png";
import Img4 from "../../assects/image4.png";
import tick from "../../assects/tick.png";
import adidas from "../../assects/adidas.png";
import nike from "../../assects/nike.png";
import nb from "../../assects/nb.png";

const Reason = () => {
  return (
    <div className="reason" id="reason">
      <div className="left-r">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose Us?</span>
        </div>

        {/* details  */}
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="partners-title">OUR PARTNERS</span>

        <div className="partners">
          <img src={nb} alt="Nike" />
          <img src={adidas} alt="Adidas" />
          <img src={nike} alt="Nike" />
        </div>
        {/* end details */}
      </div>
    </div>
  );
};

export default Reason;
