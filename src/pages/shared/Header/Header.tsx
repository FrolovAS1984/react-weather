import React from "react";
import Select from 'react-select'
import styles from "./Header.module.scss";
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";

interface Props {

}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Калуга' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Санкт-Петербург' }
    ];

    const colorStyles = {
        control: (styles:any) => ({
                ...styles,
                backgroundColor: 'lightblue',
                width:'230px',
                height:'37px',
                border: 'none',
                borderRadius: '10px',
                zIndex: '100',
            }
        ),
    };

    return (
        <header className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <GlobalSvgSelector id="header-logo" />
            </div>
            <div className={styles.title}>Информация о погоде</div>
        </div>
        <div className={styles.wrapper}>
            <Select
                defaultValue={options[0]}
                styles={colorStyles}
                options={options}
            />
        </div>

        </ header>
    );
};