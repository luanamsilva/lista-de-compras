import {Header} from './components/Header'
import {NoItems} from './components/NoItems'
import {useEffect,useState} from 'react'
import {Items} from './components/Items'
import {ItemsProps} from './types/ItemsProps'
import cart from './assets/16246.jpg'
import styles from './App.module.css'

function App() {

  const LOCAL_STORAGE_KEY = 'item:savedItem'
  const [listItemAdd, setListItemAdd] = useState<ItemsProps[]>([])

  function loadLocalStorage() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved){
      setListItemAdd(JSON.parse(saved))
    }
  }

  function setItemsAndSave(newItems:ItemsProps[] ) {
    setListItemAdd(newItems)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems))
  }

  useEffect(()=>{
    loadLocalStorage();
  },[])
  function handleAddItem(itemTitle:string) {
    const newListItemAdd = [...listItemAdd];
    newListItemAdd.push({
      id: listItemAdd.lehgth +1,
      title: itemTitle
    })
    setItemsAndSave(newListItemAdd)
  }

  function onDelete(itemTitle:string) {
    const newItemDelete = listItemAdd.filter((item) => item.title !== itemTitle)
    setItemsAndSave(newItemDelete)
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
