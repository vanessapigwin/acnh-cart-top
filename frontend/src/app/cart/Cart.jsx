import { useState } from "react";
import MainNavbar from "../../components/navbar/MainNavbar";
import CartItem from "../../components/cartItem/CartItem";
import "./cart.css";

function CartContent({ cartItems, handleAdjustItems, handleRemoveItems }) {
  const [data, setData] = useState(cartItems);
  const count = data.reduce((sum, d) => sum + d.quantity, 0);
  const total = data.reduce((sum, d) => sum + d.price * d.quantity, 0);

  function updateOrders(orderItem) {
    const updatedCartContent = data.flatMap((current) =>
      current.variant_id === orderItem.variant_id ? orderItem : current,
    );
    // updating local data
    setData(updatedCartContent);

    // updating toplevel data
    if (updatedCartContent.quantity === 0) {
      handleRemoveItems(updatedData);
    }
    handleAdjustItems(updatedData);
  }

  if (count === 0) {
    return (
      <div className="cart-content empty">
        <br />
        <h3>Your cart is currently empty</h3>
        <ShopButton />
      </div>
    );
  }

  return (
    <div className="cart-content">
      <h1>My cart</h1>
      <br />
      <div className="cart-content-details">
        <ul className="cart-content-list">
          {data.map((d) => {
            return (
              <CartItem
                key={d.variant_id}
                item={d}
                handleChangeOrders={updateOrders}
              />
            );
          })}
        </ul>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>
            <span>Number of items: </span>
            <span>{count} item(s)</span>
          </p>
          <p>
            <span>Total: </span>
            <span>{total} bells</span>
          </p>
          <div>
            <button className="order-button">ORDER</button>
            <ShopButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopButton() {
  return (
    <>
      <button className="shop-button">CONTINUE SHOPPING</button>
    </>
  );
}

export default function Cart({
  cartItems,
  handleAdjustItems,
  handleRemoveItems,
}) {
  return (
    <div className="cart-page">
      <MainNavbar />
      <CartContent
        cartItems={cartItems}
        handleAdjustItems={handleAdjustItems}
        handleRemoveItems={handleRemoveItems}
      />
    </div>
  );
}
