import { FormEvent, useReducer, useState } from 'react';
import itemReducer from '../reducers/ItemReducer';
import { Item } from '../reducers/ItemState';

const ItemComponent = () => {
  const [state, dispatch] = useReducer(itemReducer, { items: [] });
  const [itemName, setItemName] = useState('');

  const addItem = (event: FormEvent) => {
    event.preventDefault();
    const newItem: Item = { id: Date.now(), name: itemName };
    dispatch({ type: 'ADD_ITEM', payload: newItem })
    setItemName('')
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          placeholder='Enter Item Name'
        />
        <button type='submit'>Add Item</button>
      </form>

      <ul>
        {state.items.map((item, idx) => (
            <li key={idx}>
                {item.name}
                <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemComponent;
