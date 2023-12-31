import React from "react";

import styles from "./ThisDay.module.scss";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";


interface Props {

}


export const ThisDay = (props: Props) => {
    return (

        <div className={styles.this__day}>
            <div className={styles.top__block}>
                <div className={styles.this__block_wrapper}>
                    <div className={styles.this__temp}>20</div>
                    <div className={styles.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="sun" />
            </div>
            <div className={styles.bottom__block}>
                <div className={styles.this__time}>Время:<span>21:50</span></div>
                <div className={styles.this__city}>Город:<span>Калуга</span></div>
            </div>

        </div>

    );
};