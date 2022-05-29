import React, {useEffect} from "react";
import styles from "./Spinner.module.scss";
import {ClipLoader} from "react-spinners";

export const Spinner = ({progress}:any) => {
    useEffect(()=>{}, [progress])
    return (
        <div className={styles.spinner}>
            <ClipLoader color="black"/>
        </div>
    )
}