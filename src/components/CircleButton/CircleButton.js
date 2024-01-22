import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {styles} from './CircleButton.css'


export const CircleButton = ({ icon, subList, selectedOption, setSelectedOption }) => {
    var [isOpened, setIsOpened] = useState(false);
    const { t } = useTranslation();

    const handleClick = () => {
        if(isOpened) {
            setIsOpened(false)
        } else {
            setIsOpened(true)
        }
    };

    const handleSelect = (item) => {
        setSelectedOption(item.name);
        setIsOpened(false)
    };

    return (
        <div className="circle-btn">
            <img src={icon} alt="" onClick={handleClick}/>
            <div className={`sub-menu ${isOpened === true ? 'opened' : ''}`}>
                <div className='sub-list'>
                    {
                        Array.isArray(subList) && subList.map((item) =>
                            <div className={`sub-list__item ${selectedOption === item.name ? 'selected' : ''}`} onClick={() => handleSelect(item)} key={item.name}>{item.name}</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
