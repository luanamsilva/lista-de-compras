import styles from './Header.module.css'

import React from 'react'


export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Lista de Compras</h1>
      <div className={styles.inputArea}>
      <input className={styles.input} type="text" placeholder="Digite o item a ser adicionado" name="" id=""  />
      <button className={styles.buttonAdd} type="submit">Adicionar</button>
    </div>
    </div>
  )
}