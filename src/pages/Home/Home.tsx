import React from "react";
import styles from "./Home.module.scss";
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayinfo} from "./components/ThisDayinfo/ThisDayinfo";
import {Days} from "./components/Days/Days";

interface Props {

}


export const Home = (props: Props) => {
    return (
        <div className={styles.home}>
            <div className={styles.wrapper}>
                <ThisDay />
                <ThisDayinfo />
            </div>
            <Days />
        </div>
    );
};