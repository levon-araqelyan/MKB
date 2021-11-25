import React, { memo } from "react";
import {Image} from "react-bootstrap";
import cn from "classnames";
import styles from "./ProgressBar.module.scss";

const ProgressBar:React.FC<{position:number}> = ({ position }) => {
    return (
        <div className={styles.progressWrap}>
            <div className={styles.circlesWrap}>
                <div className={styles.section}>
                    <div className={cn(styles.circle, { [styles.activeCircle]: position === 1, [styles.checked]: position > 1 })}>
                        {position > 1 ? <Image src="/checked.svg" alt={"checked"} /> : 1}
                    </div>
                </div>
                <div className={cn(styles.line, { [styles.activeLine]: position > 1 })} />
                <div className={styles.section}>
                    <div className={cn(styles.circle, { [styles.activeCircle]: position === 2, [styles.checked]: position > 2 })}>
                        {position > 2 ? <Image src="/checked.svg" alt={"checked"} /> : 2}
                    </div>
                </div>
                <div className={cn(styles.line, { [styles.activeLine]: position > 2 })} />
                <div className={styles.section}>
                    <div
                        className={cn(styles.circle,styles.lastCircle, { [styles.activeCircle]: position === 3, [styles.checked]: position >= 3 })}
                    >
                        {<Image src={position === 3 ? "/checked.svg" : "/unchecked.svg"} alt={"checked"}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProgressBar);