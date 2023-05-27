import {Header} from './components/Header'
import {ListItems} from './components/ListItems'
import {useState} from 'react'
import {Items} from './components/Items'
import {ItemsProps} from './types/ItemsProps'

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

  return (
    <>

<Header onSubmit={handleAddItem}/>
<div>
  {listItemAdd.map((item)=>(
  <Items key={item.id} item={item}/>
  ))}
  
</div>
<main>
<ListItems/>
</main>

    </>
  )
}

export default App
