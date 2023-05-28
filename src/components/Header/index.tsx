import styles from './Header.module.css';
import { useState, FormEvent, ChangeEvent } from 'react';

type Props = {
  onSubmit: (itemTitle: string) => void
}
export const Header = ({onSubmit}:Props) => {
  const [itemAdd, setItemAdd] = useState([] as string []);
  


  function handleAddItem(event: FormEvent <HTMLFormElement>) {
    event.preventDefault();
    onSubmit(itemAdd);
    setItemAdd('')
  }

  function handleChangeInput(event: ChangeEvent<HTMLInpuntElement>) {
    event.target.setCustomValidity("")

    setItemAdd(event.target.value)
  }

  function handleInputInvalid(event: InvalidEvent <HTMLInputElement>) {
    event.target.setCustomValidity("Campo obrigatório")
  }

  return (
    <div className={styles.header}>
      <h1>Lista de Compras</h1>
      <form className={styles.inputArea} onSubmit={handleAddItem}>
      
        <input
          className={styles.input}
          type="text"
          placeholder="Digite o item a ser adicionado"
          value={itemAdd}
          onChange={handleChangeInput}
          onInvalid={handleInputInvalid}
          required
        />
        <button type='submit' className={styles.buttonAdd} >
          Adicionar
        </button>
      </form>
    </div>
  );
};
