export default function Stats({numOfItems , items}) {
    if (numOfItems == 0) {
      return(
        <footer className="stats">
          Start Packing Your Items Now 💼
        </footer>
      )
      
    }
  
    const packedItems = items.filter(item => item.packed).length
   console.log(packedItems);
  
   const percentageItemPacked =Math.round(packedItems / numOfItems  * 100)
    return (
      <footer className="stats">
        <em>
          {percentageItemPacked === 100 ? `You packed all items, and you are ready to go 🚢`
          
  : `👍 You have ${numOfItems} item on your list, and you already packed ${packedItems} (${percentageItemPacked}%)
  `}</em>
      </footer>
    );
  }