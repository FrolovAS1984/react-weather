import React from "react";

import styles from "./Days.module.scss";
import {Card} from "./Card";
// import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";


interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '08 окт',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Второй',
            day_info: '09 окт',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: 'Третий',
            day_info: '10 окт',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Четвертый',
            day_info: '11 окт',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пятый',
            day_info: '12 окт',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];

    return (<div className={styles.days}>
        {days.map((day: Day) => (
            <Card day={day} />

        ))}

    </div>
    )

};