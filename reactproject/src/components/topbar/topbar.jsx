import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarleft">
                    <span className="logo">Admin</span>
                </div>
                <div className="navbarright">
                    <div className="topbariconcontainer">
                        <NotificationsNone />
                        <div className="topiconbag">2</div>
                    </div>
                    <div className="topbariconcontainer">
                        <Language />
                        <div className="topiconbag">2</div>
                    </div>
                    <div className="topbariconcontainer">
                        <Settings /> 
                    </div>
                    <img src="https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png" alt="" className="avatar" />
                </div>
            </div>
        </div>
    )
}