import React from 'react';

import styles  from './DashboardSidebar.css'

const DashboardSidebar = () => {
    return (
        <div>
            <aside className="dashboard-sidebar">
                <div className="dashboard-sidebar__header">
                    <a className={styles.logo} href="/">
                        <img src="/logo.svg" alt="Logo" />
                    </a>
                </div>
                <div className="dashboard-sidebar__content">
                    <nav className="dashboard-nav">
                        <a className="dashboard-nav__item" href="index.html">
                            <img className="dashboard-nav__icon" src="/home.svg" alt="" />
                            <span className="dashboard-nav__title">Dashboard</span>
                        </a>
                        <a className="dashboard-nav__item" href="log.html">
                            <img className="dashboard-nav__icon" src="/log.svg" alt="" />
                            <span className="dashboard-nav__title">Log</span>
                        </a>
                        <a className="dashboard-nav__item" href="wallet.html">
                            <img className="dashboard-nav__icon" src="/wallet.svg" alt="" />
                            <span className="dashboard-nav__title">Wallet ID</span>
                        </a>
                        <a className="dashboard-nav__item" href="settings.html">
                            <img className="dashboard-nav__icon" src="/settings.svg" alt="" />
                            <span className="dashboard-nav__title">Settings</span>
                        </a>
                        <a className="dashboard-nav__item selected" href="info.html">
                            <img className="dashboard-nav__icon" src="/info.svg" alt="" />
                            <span className="dashboard-nav__title">Info</span>
                        </a>
                        <a className="dashboard-nav__item disabled" href="game.html">
                            <img className="dashboard-nav__icon" src="game.svg" alt="" />
                            <span className="dashboard-nav__title">EPIC</span>
                        </a>
                    </nav>
                </div>
                <div className="dashboard-sidebar__footer">
                    <div className="status">
                        <div className="status__title">Status</div>
                        <div className="status__value green">ON</div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default DashboardSidebar;
