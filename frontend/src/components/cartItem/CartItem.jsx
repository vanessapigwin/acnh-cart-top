import "./cartItem.css";

export default function CartItem({ data }) {
  const total_price = data.quantity * data.price;
  return (
    <li className="cart-item">
      <div className="cartCard">
        <img src={data.filename} />
        <div className="cartItemDetails">
          <h2>{data.product_name}</h2>
          <p>{data.price} bells</p>
          <p>Color: {data.color}</p>
          <p>Price: {data.price}</p>
          <div className="subtotalCalc">
            <div className="qtyPicker">
              <h3>Quantity: </h3>
              <select>{data.quantity}</select>
            </div>
            <h3>Subtotal: {total_price} bells</h3>
          </div>
        </div>
      </div>
    </li>
  );
}
