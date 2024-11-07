import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    sidebarShow,
    setSidebarShow,
    setExtended,
    extended,
  } = useContext(Context);

  const formEnt = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSent();
    }
  };

  const inputCloseSidebar = () => {
    if (window.innerWidth <= 600) {
      setSidebarShow(true);
    }
  };

  console.log(recentPrompt, resultData);

  return (
    <div
      className="main"
      style={{ positon: extended ? "absolute" : "relative" }}
    >
      <div className="nav">
        {sidebarShow && (
          <img
            id="smallScreenMenu"
            onClick={() => {
              setSidebarShow((prev) => !prev), setExtended(true);
            }}
            src={assets.menu_icon}
            alt="menu_icon"
          />
        )}
        <div className="logoResize">
          <img className="geminiLogo" src={assets.gemini_logo_icon} alt="gemini_logo_icon" />
        </div>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
      <div className="main_container">
        {showResult ? (
          <div className="result">
            <div className="result_title">
              <img src={assets.user_icon} alt="user_icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result_data">
              <img
                className="gemini_icon"
                src={assets.gemini_icon}
                alt="gemini_icon"
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="result_text"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        ) : (
          <div className="middle">
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest beautiful places to see on an upcoming road trip.{" "}
                </p>
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
          </div>
        )}

        <div className="main_bottom">
          <form action="" onSubmit={formEnt}>
            <div className="search_box">
              <input
                onChange={(e) => setInput(e.target.value)}
                onClick={inputCloseSidebar}
                value={input}
                type="text"
                placeholder="Enter a promt here"
              />
              <div className="icons_search">
                <img src={assets.gallery_icon} alt="gallery_icon" />
                <img src={assets.mic_icon} alt="mic_icon" />
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send_icon"
                  disabled={!input.trim()} // disable if input is empty
                  style={{
                    opacity: input.trim() ? 1 : 0.5, // visually indicate disabled state
                    cursor: input.trim() ? "pointer" : "not-allowed",
                  }}
                />
              </div>
            </div>
          </form>
          <p className="bottom_info">
            Gemini may display inaccurate info, including about people, so
            double its responses. Your privacy and Gemmini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
