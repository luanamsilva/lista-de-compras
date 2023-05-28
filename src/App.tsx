import {Header} from './components/Header'
import {NoItems} from './components/NoItems'
import {useState} from 'react'
import {Items} from './components/Items'
import {ItemsProps} from './types/ItemsProps'
import cart from './assets/16246.jpg'
import styles from './App.module.css'

function App() {

  const [listItemAdd, setListItemAdd] = useState<ItemsProps[]>([])


  function handleAddItem(itemTitle:string) {
    const newListItemAdd = [...listItemAdd];
    newListItemAdd.push({
      id: listItemAdd.lehgth +1,
      title: itemTitle
    })
    setListItemAdd(newListItemAdd)
  }

  function onDelete(itemTitle:string) {
    const newItemDelete = listItemAdd.filter((item) => item.title !== itemTitle)
    setListItemAdd(newItemDelete)
  }
  return (
    <>

<Header onSubmit={handleAddItem}/>
{listItemAdd == 0 ?
<NoItems/> : 

<div className={styles.container}>
<img className={styles.cart} src={cart} alt="cart" /> 
<div className={styles.listItems}>
  {listItemAdd.map((item)=>(
  <Items 
  onDelete={onDelete}
  key={item} 
  item={item} 
  />
  ))}
 </div> 
</div>}
<main>

</main>

    </>
  )
}

export default App
