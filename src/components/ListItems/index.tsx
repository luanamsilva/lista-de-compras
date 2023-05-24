import cart from '../../assets/16246.jpg'
import styles from './ListItems.module.css'
import React from 'react'



export const ListItems = () => {
  return (
    <div className={styles.container}>
     <img className={styles.cart} src={cart} alt="cart" /> 
     <p>Sua lista ainda está vazia</p>
    </div>
  )
}
