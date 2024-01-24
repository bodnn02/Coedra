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
                        <div className="dashboard-nav__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 21V14.1528C9 13.5226 9.53726 13.0116 10.2 13.0116H13.8C14.4627 13.0116 15 13.5226 15 14.1528V21M11.3046 3.21117L3.50457 8.48603C3.18802 8.7001 3 9.04665 3 9.41605V19.2882C3 20.2336 3.80589 21 4.8 21H19.2C20.1941 21 21 20.2336 21 19.2882V9.41605C21 9.04665 20.812 8.70011 20.4954 8.48603L12.6954 3.21117C12.2791 2.92961 11.7209 2.92961 11.3046 3.21117Z" stroke="#D2D4D7" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <span className="dashboard-nav__title">{t('page-dashboard')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item ${isLinkSelected('/log') ? 'selected' : ''}`} to="/log">
                        <div className="dashboard-nav__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 18H4M14.5 12H4M20 6H4" stroke="#D2D4D7" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <span className="dashboard-nav__title">{t('nav-item-log')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item ${isLinkSelected('/wallet') ? 'selected' : ''}`} to="/wallet">
                        <div className="dashboard-nav__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.76 3.04001H3.89336C3.06861 3.04001 2.4018 3.92665 2.40103 4.84001C2.40002 6.04001 3.06861 7.22667 3.89336 7.22667H19.4667C20.6449 7.22667 21.6 6.9818 21.6 8.16001V18.4C21.6 19.8139 20.4539 20.96 19.04 20.96H4.96002C3.54617 20.96 2.40002 19.8139 2.40002 18.4V5.44001M16.4967 13.2633L16.48 13.28" stroke="#D2D4D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </div>
                        <span className="dashboard-nav__title">{t('nav-item-wallet')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item disabled ${isLinkSelected('/settings') ? 'selected' : ''}`} to="/settings">
                            <div className="dashboard-nav__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.6763 4.31627C13.2488 2.56124 10.7512 2.56124 10.3237 4.31627C10.2599 4.57999 10.1347 4.82492 9.95831 5.03112C9.78194 5.23732 9.55938 5.39897 9.30874 5.50291C9.0581 5.60684 8.78646 5.65014 8.51592 5.62927C8.24538 5.60839 7.9836 5.52394 7.75187 5.38279C6.20832 4.44227 4.44201 6.20855 5.38254 7.75207C5.99006 8.74884 5.45117 10.0494 4.31713 10.325C2.56096 10.7514 2.56096 13.25 4.31713 13.6753C4.58093 13.7392 4.8259 13.8645 5.03211 14.041C5.23831 14.2175 5.39991 14.4402 5.50375 14.691C5.6076 14.9418 5.65074 15.2135 5.62968 15.4841C5.60862 15.7547 5.52394 16.0165 5.38254 16.2482C4.44201 17.7917 6.20832 19.558 7.75187 18.6175C7.98356 18.4761 8.24536 18.3914 8.51597 18.3704C8.78658 18.3493 9.05834 18.3924 9.30912 18.4963C9.5599 18.6001 9.7826 18.7617 9.95911 18.9679C10.1356 19.1741 10.2609 19.4191 10.3248 19.6829C10.7512 21.439 13.2499 21.439 13.6752 19.6829C13.7393 19.4192 13.8647 19.1744 14.0413 18.9684C14.2178 18.7623 14.4405 18.6008 14.6912 18.497C14.9419 18.3932 15.2135 18.35 15.4841 18.3709C15.7546 18.3919 16.0164 18.4764 16.2481 18.6175C17.7917 19.558 19.558 17.7917 18.6175 16.2482C18.4763 16.0165 18.3918 15.7547 18.3709 15.4842C18.35 15.2136 18.3932 14.942 18.497 14.6913C18.6008 14.4406 18.7623 14.2179 18.9683 14.0414C19.1744 13.8648 19.4192 13.7394 19.6829 13.6753C21.439 13.2489 21.439 10.7502 19.6829 10.325C19.4191 10.2611 19.1741 10.1358 18.9679 9.95928C18.7617 9.78278 18.6001 9.56007 18.4962 9.3093C18.3924 9.05853 18.3493 8.78677 18.3703 8.51617C18.3914 8.24556 18.4761 7.98376 18.6175 7.75207C19.558 6.20855 17.7917 4.44227 16.2481 5.38279C16.0164 5.52418 15.7546 5.60886 15.484 5.62992C15.2134 5.65098 14.9417 5.60784 14.6909 5.504C14.4401 5.40016 14.2174 5.23856 14.0409 5.03236C13.8644 4.82616 13.7391 4.58119 13.6752 4.3174L13.6763 4.31627Z" stroke="#D2D4D7" strokeWidth="2"/>
                                    <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#D2D4D7" strokeWidth="2"/>
                                </svg>
                            </div>
                        <span className="dashboard-nav__title">{t('nav-item-settings')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item ${isLinkSelected('/info') ? 'selected' : ''}`} to="/info">
                            <div className="dashboard-nav__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12.0001L12 16.5M12 8.66462V8.62507M3 17.625L3 6.37498C3 4.51103 4.51104 3 6.375 3L17.625 3C19.489 3 21 4.51103 21 6.37498L21 17.625C21 19.489 19.489 21 17.625 21H6.375C4.51104 21 3 19.489 3 17.625Z" stroke="#D2D4D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        <span className="dashboard-nav__title">{t('nav-item-info')}</span>
                    </Link>
                    <Link className={`dashboard-nav__item disabled ${isLinkSelected('/game') ? 'selected' : ''}`} to="/">
                            <div className="dashboard-nav__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.52002 16.26C6.33002 16.26 6.14002 16.19 5.99002 16.04C5.70002 15.75 5.70002 15.27 5.99002 14.98L9.04002 11.93C9.33002 11.64 9.81002 11.64 10.1 11.93C10.39 12.22 10.39 12.7 10.1 12.99L7.05002 16.04C6.90002 16.18 6.71002 16.26 6.52002 16.26Z" fill="#D2D4D7"/>
                                    <path d="M9.59999 16.29C9.40999 16.29 9.21999 16.22 9.06999 16.07L6.01999 13.02C5.72999 12.73 5.72999 12.25 6.01999 11.96C6.30999 11.67 6.78999 11.67 7.07999 11.96L10.13 15.01C10.42 15.3 10.42 15.78 10.13 16.07C9.97999 16.22 9.78999 16.29 9.59999 16.29Z" fill="#D2D4D7"/>
                                    <path d="M13.54 15C12.99 15 12.53 14.55 12.53 14C12.53 13.45 12.97 13 13.52 13H13.54C14.09 13 14.54 13.45 14.54 14C14.54 14.55 14.1 15 13.54 15Z" fill="#D2D4D7"/>
                                    <path d="M17.48 15C16.93 15 16.47 14.55 16.47 14C16.47 13.45 16.91 13 17.46 13H17.48C18.03 13 18.48 13.45 18.48 14C18.48 14.55 18.03 15 17.48 15Z" fill="#D2D4D7"/>
                                    <path d="M15.5 16.97C14.95 16.97 14.5 16.53 14.5 15.98V15.96C14.5 15.41 14.95 14.96 15.5 14.96C16.05 14.96 16.5 15.41 16.5 15.96C16.5 16.51 16.06 16.97 15.5 16.97Z" fill="#D2D4D7"/>
                                    <path d="M15.5 13.03C14.95 13.03 14.5 12.59 14.5 12.04V12.02C14.5 11.47 14.95 11.02 15.5 11.02C16.05 11.02 16.5 11.47 16.5 12.02C16.5 12.57 16.06 13.03 15.5 13.03Z" fill="#D2D4D7"/>
                                    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V13C1.25 7.57 3.57 5.25 9 5.25H15C20.43 5.25 22.75 7.57 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75ZM9 6.75C4.39 6.75 2.75 8.39 2.75 13V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 8.39 19.61 6.75 15 6.75H9Z" fill="#D2D4D7"/>
                                    <path d="M12.99 6.75H11.99C11.03 6.75 10.24 5.96 10.24 5C10.24 4.04 11.02 3.25 11.98 3.25C12.14 3.25 12.25 3.14 12.26 3L12.27 1.99C12.28 1.58 12.61 1.25 13.02 1.25H13.03C13.44 1.26 13.78 1.6 13.77 2.01L13.76 3.02C13.75 3.97 12.96 4.75 12.01 4.75C11.85 4.75 11.75 4.86 11.75 5C11.75 5.14 11.86 5.25 12 5.25H13C13.41 5.25 13.75 5.59 13.75 6C13.75 6.41 13.4 6.75 12.99 6.75Z" fill="#D2D4D7"/>
                                </svg>
                            </div>
                        <span className="dashboard-nav__title">{t('nav-item-epic')}</span>
                    </Link>
                </nav>
            </div>
            <div className="dashboard-sidebar__footer">
                <div className="status">
                    <div className="status__title">{t('status-title')}</div>
                    <div className="status__value green-text">{t('status-on')}</div>
                </div>
            </div>
        </aside>
    );
};
