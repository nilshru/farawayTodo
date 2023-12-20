import { useState } from "react";
import Form from "./components/Form";
import PakingList from "./components/PackingList";
import Stats from "./components/Stats";
import Logo from "./components/Logo";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false }

];

export default function App() {
  const [items, setItem] = useState(initialItems);

  const numItem = items.length
// console.log(numItem); 
  function handleItem(item) {
    setItem((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handlePacked(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItem} />
      <PakingList items={items} onDeleteItems={deleteItem} onPackedItems={handlePacked}  onClearList={handleClearList}/>
      <Stats numOfItems={numItem} items={items} />
    </div>
  );
}









