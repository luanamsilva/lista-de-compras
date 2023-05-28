import cartEmpty from '../../assets/6011.jpg'
import styles from './NoItems.module.css'


export const NoItems = () => {
  
  return (
    <div className={styles.container}>
     <img className={styles.cartEmpty} src={cartEmpty} alt="cartEmpty" /> 
     <p>Sua lista ainda está vazia</p>

    </div>
  )
}
