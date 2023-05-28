import styles from './Items.module.css'
import {ItemProps} from '../../types/ItemsProps'
import {Trash} from 'phosphor-react'



type Props ={
  item: ItemProps,
  onDelete: (itemTitle:string) => void
}

export const Items = ({item, onDelete}:Props) => {
  
  return (
    <div className={styles.container}>

{item.title} 
<button onClick={()=> onDelete(item.title)}><Trash/></button>
    </div>
  )
}
