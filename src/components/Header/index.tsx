import styles from './Header.module.css';
import { useState } from 'react';

type Props = {
  onSubmit: (itemTitle:string) => void
}
export const Header = ({onSubmit}:Props) => {
  const [itemAdd, setItemAdd] = useState([]);
  const [textInputItem, setTextInputItem] = useState('');

  function handleAddTextInput() {
    setTextInputItem(event.target.value);
  }

  function handleAddItem() {
    event.preventDefault();

    setItemAdd([...itemAdd, textInputItem]);
    setTextInputArea('');
    onSubmit(itemAdd)
  }

  return (
    <div className={styles.header}>
      <h1>Lista de Compras</h1>
      <div className={styles.inputArea}>
        <input
          className={styles.input}
          placeholder="Digite o item a ser adicionado"
          value={textInputItem}
          onChange={handleAddTextInput}
        />
        <button className={styles.buttonAdd} onSubmit={handleAddItem}>
          Adicionar
        </button>
      </div>
    </div>
  );
};
