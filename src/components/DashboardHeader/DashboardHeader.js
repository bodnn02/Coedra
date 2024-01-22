import React from 'react';

import {styles} from './DashboardHeader.css';

export const DashboardHeader = () => {
    return (
        <header className="dashboard-header">
            <h1 className="text-h1">{document.title}</h1>
            <div className="dashboard-buttons">
                <div className="circle-btn">
                    <img src="images/language-square.svg" alt=""/>
                </div>
                <div className="circle-btn">
                    <img src="images/off_solid.svg" alt=""/>
                </div>
                <div className="circle-btn">
                    <img src="images/login.svg" alt=""/>
                </div>
            </div>
        </header>
    )
}
