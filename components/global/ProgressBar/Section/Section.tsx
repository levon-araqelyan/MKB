import React from "react";
import styles from "../ProgressBar.module.scss";
import cn from "classnames";
import {Image} from "react-bootstrap";

const Section: React.FC<{ position: number; isLast: boolean, index: number, prePosition?: number }> = (
    {
        position,
        isLast,
        index,
        prePosition
    }) => {
    return (
        <>
            <div className={styles.section}>
                <div className={cn(styles.circle, {[styles.activeCircle]: position === index, [styles.checked]: position > index})}>
                    {position > index ? <Image src="/checked.svg" alt={"checked"}/> : index}
                </div>
            </div>
            {!isLast && <div className={cn(styles.line,
                {
                    [styles.activeLine]: position > index, [styles.inProcess]: prePosition === 1 && position === index,
                    [styles.prePosition]: (prePosition === 2) && position === index,
                    [styles.nextPosition]: (prePosition === 3) && position === index
                })
            }/>}
        </>
    )
}

export default Section