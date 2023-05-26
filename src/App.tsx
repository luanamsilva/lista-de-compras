import {Header} from './components/Header'
import {ListItems} from './components/ListItems'
import {useState} from 'react'

function App() {

  const [listItemAdd, setListItemAdd] = useState([])


  function handleAddItem(itemTitle:string) {
    const newListItemAdd = [...listItemAdd];
    newListItemAdd.push({
      id: id.lehgth +1,
      title: itemTitle
    })
    setListItemAdd(newListItemAdd)
  }

  return (
    <>

<Header onSubmit={handleAddItem}/>

<ListItems/>

    </>
  )
}

export default App
