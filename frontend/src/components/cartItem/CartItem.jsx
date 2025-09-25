import { useState } from "react";
import "./cartItem.css";
import ImageTile from "../imageTile/ImgTile";

export default function CartItem({
  item,
  handleChangeOrders,
}) {
  const [counter, setCounter] = useState(item.quantity);

  function changeQtyHandler(e) {
    const newQty = parseInt(e.target.value);
    const updatedItem = { ...item, quantity: newQty };

    // updating local counter
    setCounter(newQty);

    // update cart contents
    handleChangeOrders(updatedItem);
  }

  const total_price = counter * item.price;

  return (
    <li className="cart-item">
      <div className="cartCard">
        <ImageTile filename={item.filename} />
        <div className="cartItemDetails">
          <h2>{item.product_name}</h2>
          <p>{item.price} bells</p>
          <p>Color: {item.color}</p>
          <div className="subtotalCalc">
            <div className="qtyPicker">
              <h3>Quantity: </h3>
              <input
                type="number"
                defaultValue={counter}
                onChange={changeQtyHandler}
              ></input>
            </div>
            <h3>Subtotal: {total_price} bells</h3>
          </div>
        </div>
      </div>
    </li>
  );
}
