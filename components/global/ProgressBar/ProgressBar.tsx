import React, { memo } from "react";
import {Image} from "react-bootstrap";
import cn from "classnames";
import Section from "./Section";
import styles from "./ProgressBar.module.scss";

const ProgressBar:React.FC<{position:number,sectionLength:number,prePosition?:number}> = ({ position,sectionLength,prePosition }) => {
    const content = () => {
        const section = []
        for(let i=0; i < sectionLength; i++){
            section.push(<Section position={position} isLast={sectionLength - 1 === i} index={i + 1} prePosition={prePosition}/>)
        }
        return section
    }
    return (
        <div className={styles.progressWrap}>
            <div className={styles.circlesWrap}>
                    {content()}
            </div>
        </div>
    );
};

export default memo(ProgressBar);