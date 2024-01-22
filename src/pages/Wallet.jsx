import React from 'react'

export const Wallet = () => {
    return (
        <div className="dashboard-section">
            <div className="grid-wrapper">
                <form className="dashboard-form" action="">
                    <div className="dashboard-form__header">
                        <h2 className="dashboard-form__h2">EPIC</h2>
                        <h3 className="dashboard-form__h3">Algoritm</h3>
                    </div>
                    <div className="dashboard-form__content">
                        <div className="input-wrapper">
                            <label className="label" for="">Send your Epic ID</label>
                            <input className="input" placeholder="ID" type="text" />
                        </div>
                    </div>
                    <div className="dashboard-form__footer">
                        <div className="status">
                            <div className="status__title">Status</div>
                            <div className="status__value green">ON</div>
                        </div>
                    </div>
                </form>
                <form className="dashboard-form" action="">
                    <div className="dashboard-form__header">
                        <h2 className="dashboard-form__h2">RB</h2>
                        <h3 className="dashboard-form__h3">Algoritm</h3>
                    </div>
                    <div className="dashboard-form__content">
                        <div className="input-wrapper">
                            <label className="label" for="">Send your RB ID</label>
                            <input className="input" placeholder="ID" type="text" />
                        </div>
                        <div className="input-wrapper">
                            <label className="label" for="">Send your BTC address</label>
                            <input className="input" placeholder="BTC" type="text" />
                        </div>
                    </div>
                    <div className="dashboard-form__footer">
                        <div className="status">
                            <div className="status__title">Status</div>
                            <div className="status__value green">ON</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
