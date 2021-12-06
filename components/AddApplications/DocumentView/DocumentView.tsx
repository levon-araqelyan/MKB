import React from "react";
import styles from "./DocumentView.module.scss"

const DocumentView: React.FC<{ prePosition: number }> = ({prePosition}) => {
    return (
        <div className={styles.documentView}>
            <p>{prePosition === 1 ?
                "Можно выдать кредитную карту. Нажав на кнопку, вы не сможете отменить действие" :
                "Кредитная карта полностью готова к использованию"}</p>
        </div>
    )
}

export default DocumentView