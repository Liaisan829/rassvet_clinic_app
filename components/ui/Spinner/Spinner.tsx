import React, {useEffect} from "react";
import {ClipLoader} from "react-spinners";
import styles from "./Spinner.module.scss";

export const Spinner = ({progress}:any) => {
    useEffect(()=>{}, [progress])
    return (
        <div className={styles.spinner}>
            <ClipLoader color="black"/>
        </div>
    )
}