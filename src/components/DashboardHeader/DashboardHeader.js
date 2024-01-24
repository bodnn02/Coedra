import React, { useState, useEffect, useLayoutEffect } from "react";
import { styles } from "./DashboardHeader.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export const DashboardHeader = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [pageTitle, setPageTitle] = useState(document.title);

  const location = useLocation();


  var [isOpenedLanguageMenu, setIsOpenedLanguageMenu] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage.toLowerCase());
    }
  }, [i18n]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPageTitle(document.title);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location, document.title]);

  const languages = [
    {
      name: "EN",
    },
    {
      name: "CN",
    },
  ];

  const handleClickLanguageSelector = () => {
    setIsOpenedLanguageMenu((prev) => !prev);
  };

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language.name);
    i18n.changeLanguage(language.name.toLowerCase());
    localStorage.setItem("language", language.name);
    setIsOpenedLanguageMenu(false);
  };

  return (
    <>
      <header className="dashboard-header">
        <Link className="logo" to="/">
          <img src="images/logo.svg" alt="" />
        </Link>
        <h1 className="text-h1">{t(pageTitle)}</h1>
        <div className="dashboard-buttons">
          <div className="circle-btn">
            <img
              src="images/language-square.svg"
              alt=""
              onClick={handleClickLanguageSelector}
            />
            <div
              className={`sub-menu ${isOpenedLanguageMenu ? "opened" : ""}`}
            >
              <div className="sub-list">
                {languages.map((item) => (
                  <div
                    className={`sub-list__item ${currentLanguage === item.name ? "selected" : ""
                      }`}
                    onClick={() => handleChangeLanguage(item)}
                    key={item.name}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="circle-btn">
            <img src="images/off_solid.svg" alt="" />
          </div>
          <div className="circle-btn">
            <img src="images/login.svg" alt="" />
          </div>
        </div>
      </header>
      <div className="m-header">
        <h1 className="text-h1">{t(pageTitle)}</h1>
        <div className="status">
          <div className="status__title">{t('status-title')}</div>
          <div className="status__value green-text">{t('status-on')}</div>
        </div>
      </div>
    </>
  );
};
