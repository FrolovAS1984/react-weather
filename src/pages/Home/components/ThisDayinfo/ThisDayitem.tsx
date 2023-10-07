import React from "react";
import {Item} from "./ThisDayinfo";
import styles from "./ThisDayinfo.module.scss";
import {IndicatorSvgSelector} from "../../../../assets/icons/indicators/IndicatorSvgSelector";

interface Props {
    item: Item

}

export const ThisDayitem = ({item}: Props) => {
    const {icon_id, name, value} = item
    return (
        <div className={styles.item}>
            <div className={styles.indicator}>
                <IndicatorSvgSelector id={icon_id}/>

            </div>
            <div className={styles.indicator__name}>{name}</div>
            <div className={styles.indicator__value}>{value}</div>


        </div>
    )


}