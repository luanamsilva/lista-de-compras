import cart from '../../assets/16246.jpg'
import styles from './ListItems.module.css'


export const ListItems = () => {
  
  return (
    <div className={styles.container}>
     <img className={styles.cart} src={cart} alt="cart" /> 
     <p>Sua lista ainda está vazia</p>

    </div>
  )
}
