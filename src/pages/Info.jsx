import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const Info = () => {
    const { t } = useTranslation();

    const [info, setInfo] = useState([
        {
            name: "Hardware",
            content: [
                { name: "Hash board version", content: "1.3" },
                { name: "Control board version", content: "1.3_2" },
                { name: "PSU version", content: "1.3_1" },
                { name: "CPU", content: `Allwinner A20 Dual Core Cortex-A7 ARM 1.2GHz` },
                { name: "Memory", content: "2Gb DDR3" },
            ]
        },
        {
            name: "Software",
            content: [
                { name: "Model", content: "GNU/Linux 1.2.2 - 2023" },
            ]
        },
        {
            name: "Model",
            content: [
                { name: "Model", content: "GNU/Linux 1.2.2 - 2023" },
            ]
        },
    ])

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-section">
                {info.map((infoItem) =>
                    <div className="info-section" key={infoItem.id}>
                        <div className="info-section__header">
                            <h2 className="info-section__h2">{infoItem.name}</h2>
                        </div>
                        <div className="info-section__content">
                            <div className="info-list">
                                {infoItem.content.map((data) =>
                                    <div className="info-list__item" key={data.id}>
                                        <h3 className="info-list__h3">{data.name}</h3>
                                        <p className="info-list__p">{data.content}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <div className="server-info-footer">
                    <div>
                        <div className="info-data">
                            <div className="info-data__title">{t('ip-status')}</div>
                            <div className="info-data__value">DHCP</div>
                        </div>
                        <div className="info-data">
                            <div className="info-data__title">{t('ip-address')}</div>
                            <div className="info-data__value">192.168.1.1</div>
                        </div>
                    </div>
                    <div>
                        <img src="images/by_sync.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
