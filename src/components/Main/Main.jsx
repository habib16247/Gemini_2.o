import React from "react";
import { assets } from "../../assets/assets";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip. </p>
            <img src={assets.compass_icon} alt="compass_icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this content: urban planning. </p>
            <img src={assets.bulb_icon} alt="bulb_icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat. </p>
            <img src={assets.message_icon} alt="message_icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code. </p>
            <img src={assets.code_icon} alt="code_icon" />
          </div>
        </div>

        <div className="main_bottom">
          <div className="search_box">
            <input type="text" placeholder="Enter a promt here" />
            <div className="icons_search">
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img src={assets.send_icon} alt="send_icon" />
            </div>
          </div>
            <p className="bottom_info">
              Gemini may display inaccurate info, including about people, so double its responses. Your privacy and Gemmini Apps
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
