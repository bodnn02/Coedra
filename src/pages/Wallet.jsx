import React from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Wallet = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("Wallet");
    }, []);

    return (
        <div className="dashboard-section wallet-page">
            <div className="grid-wrapper">
                <form className="dashboard-form" action="">
                    <div className="dashboard-form__header">
                        <h2 className="dashboard-form__h2">EPIC</h2>
                        <h3 className="dashboard-form__h3">{t('algoritm')}</h3>
                    </div>
                    <div className="dashboard-form__content">
                        <div className="input-wrapper">
                            <label className="label" for="">{t('send-your-epic')}</label>
                            <input className="input" placeholder="ID" type="text" />
                        </div>
                    </div>
                    <div className="dashboard-form__footer">
                        <div className="status">
                            <div className="status__title">{t('status-title')}</div>
                            <div className="status__value green-text">{t('status-on')}</div>
                        </div>
                    </div>
                </form>
                <form className="dashboard-form" action="">
                    <div className="dashboard-form__header">
                        <h2 className="dashboard-form__h2">RB</h2>
                        <h3 className="dashboard-form__h3">{t('algoritm')}</h3>
                    </div>
                    <div className="dashboard-form__content">
                        <div className="input-wrapper">
                            <label className="label" for="">{t('send-your-rbid')}</label>
                            <input className="input" placeholder="ID" type="text" />
                        </div>
                        <div className="input-wrapper">
                            <label className="label" for="">{t('send-your-btc')}</label>
                            <input className="input" placeholder="BTC" type="text" />
                        </div>
                    </div>
                    <div className="dashboard-form__footer">
                        <div className="status">
                            <div className="status__title">{t('status-title')}</div>
                            <div className="status__value green-text">{t('status-on')}</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
