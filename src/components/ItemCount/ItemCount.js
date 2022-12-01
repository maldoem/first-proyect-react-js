import "./ItemCount.css";

const ItemCount = ({setCount, count}) => {
  const addItem = () =>{
   setCount((currentValue) =>currentValue +1)
  }
  const removeItem = () =>{ 
    
    setCount((currentValue) =>{
      if(currentValue>0){
        return currentValue - 1;
    } else{
      return currentValue
    }
    });
  };
  return (
    <div className="box-counter">
      <div className="counter">
        <button onClick={addItem}>+</button>
        <h2>{count}</h2>
        <button onClick={removeItem}>-</button>
      </div>
    </div>
  );
};

export default ItemCount;
