import React, { useContext, useState } from 'react'
import {assets} from "../../assets/assets"
import "./Sidebar.css"
import { Context } from '../../context/Context'

const Sidebar = () => {

    const {onSent, prevPrompt, setPrevPrompt, setShowResult, setRecentPrompt} = useContext(Context)

    const [extended, setExtended] = useState(false)

    const loadPrompt = async(prompt) => {
        try {
            setRecentPrompt(prompt)
            return onSent(prompt)
        } catch (error) {
            console.error("API Error: ", error)
        }
    }

  return (
    <div className="sidebar">
        <div className="top">
            <img src={assets.menu_icon} alt="menu_icon" className="menu" onClick={() => setExtended(prev => !prev)} />
            <div onClick={() => setShowResult(false)} className="new_chat" style={{borderRadius: extended ? "50px" : "50%" }}>
                <img src={assets.plus_icon} alt="plus_icon" />
                {extended ? <p style={{paddingRight: "50px", textWrap: "nowrap"}}>New Chat</p> : null}
            </div>
            {extended ? <div className="recent">
                <p className="recent_title">Recent</p>
                <div className="all_recent">
                {prevPrompt.map((item, index) => {
                    return (
                        <div onClick={() => loadPrompt(item)} className="recent_entry">
                            <img src={assets.message_icon} alt="message_icon" />
                            <p>{item.slice(0,18)}...</p>
                        </div>
                    )
                })}
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
