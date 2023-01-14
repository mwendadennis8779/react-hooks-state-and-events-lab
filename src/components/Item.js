import React, {useState} from "react";

function Item({ name, category }) {

  const [addTocart, setAddToCart] = useState(false)

  function itemInCart(){
    setAddToCart(true);

  }
  return (
    <li  className={addTocart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={itemInCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
