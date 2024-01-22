import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {styles} from './DashboardSidebar.css'

export const DashboardSidebar = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const isLinkSelected = (path) => {
        return location.pathname === path;
    };

    return (
        <aside className="dashboard-sidebar">
            <div className="dashboard-sidebar__header">
                <Link className="logo" to="/">
                    <img src="images/logo.svg" alt="" />
                </Link>
            </div>
            <div className="dashboard-sidebar__content">
                <nav className="dashboard-nav">
                    <Link className={`dashboard-nav__item ${isLinkSelected('/') ? 'selected' : ''}`} to="/">
                        <img className="dashboard-nav__icon" src="images/home.svg" alt="" />
                        <span className="dashboard-nav__title">{t('page-dashboard')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item ${isLinkSelected('/log') ? 'selected' : ''}`} to="/log">
                        <img className="dashboard-nav__icon" src="images/log.svg" alt="" />
                        <span className="dashboard-nav__title">{t('nav-item-log')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item ${isLinkSelected('/wallet') ? 'selected' : ''}`} to="/wallet">
                        <img className="dashboard-nav__icon" src="images/wallet.svg" alt="" />
                        <span className="dashboard-nav__title">{t('nav-item-wallet')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item ${isLinkSelected('/settings') ? 'selected' : ''}`} to="/settings">
                        <img className="dashboard-nav__icon" src="images/settings.svg" alt="" />
                        <span className="dashboard-nav__title">{t('nav-item-settings')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item ${isLinkSelected('/info') ? 'selected' : ''}`} to="/info">
                        <img className="dashboard-nav__icon" src="images/info.svg" alt="" />
                        <span className="dashboard-nav__title">{t('nav-item-info')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item disabled ${isLinkSelected('/game') ? 'selected' : ''}`} to="/">
                        <img className="dashboard-nav__icon" src="images/game.svg" alt="" />
                        <span className="dashboard-nav__title">{t('nav-item-epic')}</span>
                    </Link>
                </nav>
            </div>
            <div className="dashboard-sidebar__footer">
                <div className="status">
                    <div className="status__title">{t('status-title')}</div>
                    <div className="status__value green">{t('status-on')}</div>
                </div>
            </div>
        </aside>
    );
};
