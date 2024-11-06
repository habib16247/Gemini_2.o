import React, { useState } from 'react'
import {assets} from "../../assets/assets"
import "./Sidebar.css"

const Sidebar = () => {

    const [extended, setExtended] = useState(false)

  return (
    <div className="sidebar">
        <div className="top">
            <img src={assets.menu_icon} alt="menu_icon" className="menu" onClick={() => setExtended(prev => !prev)} />
            <div className="new_chat" style={{borderRadius: extended ? "50px" : "50%" }}>
                <img src={assets.plus_icon} alt="plus_icon" />
                {extended ? <p style={{paddingRight: "50px"}}>New Chat</p> : null}
            </div>
            {extended ? <div className="recent">
                <p className="recent_title">Recent</p>
                <div className="recent_entry">
                    <img src={assets.message_icon} alt="message_icon" />
                    <p>What is react...</p>
                </div>
            </div> : null}
        </div>

        <div className="bottom">
            <div className="bottm_item recent_entry">
                <img src={assets.question_icon} alt="question_icon" />
                {extended ? <p style={{paddingRight: "50px"}}>Help</p> : null}
            </div>
            <div className="bottm_item recent_entry">
                <img src={assets.history_icon} alt="history_icon" />
                {extended ? <p style={{paddingRight: "50px"}}>Activity</p> : null}
            </div>
            <div className="bottm_item recent_entry">
                <img src={assets.setting_icon} alt="setting_icon" />
                {extended ? <p style={{paddingRight: "50px"}}>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
