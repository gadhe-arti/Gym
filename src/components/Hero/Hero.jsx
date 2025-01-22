import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from "../../assects/heart.png";
import Hero_img from "../../assects/hero_image.png";
import Hero_img2 from "./../../assects/hero_image_back.png";
import calorise from "../../assects/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span> the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        {/* end the hero text */}

        {/* figures */}

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>{" "}
          <div>
            <span>+50</span>
            <span>fitness programs </span>
          </div>
        </div>

        {/* hero btn  */}

        <div className="hero-buttons">
          <button className="btn">Get Strted </button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/*  right side */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate "
        >
          <img src={Heart} alt="" />
          <span>Heart Rate </span>
          <span> 116 bpm</span>
        </motion.div>

        {/*  hero image  section*/}
        <img src={Hero_img} alt="" className="Hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={Hero_img2}
          alt=""
          className="Hero-image-back"
        />

        {/*  calorise*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calorise"
        >
          <img src={calorise} alt="" />
          <div>
            <span>Calorise Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
