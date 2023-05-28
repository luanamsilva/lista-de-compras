import styles from './Items.module.css'
import {ItemProps} from '../../types/ItemsProps'


type Props ={
  item: ItemProps
}

export const Items = ({item}:Props) => {
  
  return (
    <div className={styles.container}>

{item.title}
    </div>
  )
}
