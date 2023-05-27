import cart from '../../assets/16246.jpg'
import styles from './ListItems.module.css'
import {ItemProps} from '../../types/ItemsProps'

type Props = {
item: ItemProps;
}

export const ListItems = ({item}: Props) => {
  
  return (
    <div className={styles.container}>
     <img className={styles.cart} src={cart} alt="cart" /> 
     <p>Sua lista ainda está vazia</p>
{item}
    </div>
  )
}
