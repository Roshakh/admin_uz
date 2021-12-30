import React from 'react'
import "./topbar.css"
import {NotificationsNone ,Language,Settings} from "@mui/icons-material";

export default function Topbar() {
    return (
        <div className='topbar'>
           <div className="topbarWrapper">
               <div className="topLeft">
                   <span className="logo">UzInkass_Admin</span>
               </div>
               <div className="topRight">
               <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                       
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbhkqoFA9Rxi5_jQ-2AI3IMzXfVnUvwC7Qg&usqp=CAU" alt="avatar" className="topAvatar" />
               </div>
           </div> 
        </div>
    )
}
