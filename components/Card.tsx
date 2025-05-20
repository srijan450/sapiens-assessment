import React from 'react'
import styles from './Card.module.css';
interface ICard{
    title: string,
    body: string
}

const Card = ({title, body}: ICard) => {
  return (
    <div className={styles.card}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardBody}>{body}</p>
    </div>
  )
}

export default Card