import React, { useState } from "react";
import { styles } from "./DashboardHeader.css";
import { CircleButton } from "../CircleButton/CircleButton";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const DashboardHeader = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const languages = [
    {
      name: "EN",
    },
    {
      name: "CN",
    },
  ];

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language.toLowerCase()); // Изменение языка с использованием react-i18next
  };

  return (
    <>
      <header className="dashboard-header">
        <Link className="logo" to="/">
          <img src="images/logo.svg" alt="" />
        </Link>
        <h1 className="text-h1">{document.title}</h1>
        <div className="dashboard-buttons">
          <CircleButton
            icon={"images/language-square.svg"}
            subList={languages}
            selected_option={currentLanguage}
            setSelectedOption={handleChangeLanguage}
          />
          <div className="circle-btn">
            <img src="images/off_solid.svg" alt="" />
          </div>
          <div className="circle-btn">
            <img src="images/login.svg" alt="" />
          </div>
        </div>
      </header>
      <div className="m-header">
        <h1 className="text-h1">{document.title}</h1>
        <div className="status">
            <div className="status__title">{t('status-title')}</div>
            <div className="status__value green-text">{t('status-on')}</div>
        </div>
      </div>
    </>
  );
};
