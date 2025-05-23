import MainNavbar from "../../components/navbar/MainNavbar";
import CartItem from "../../components/cartItem/CartItem";
import "./cart.css";

function CartContent({ cartItems }) {
  const data = cartItems;
  const count = data.length;
  const total = data.reduce((sum, d) => sum + d.price * d.quantity, 0);

  if (data.length === 0) {
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
            return <CartItem key={d.variant_id} data={d} />;
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

export default function Cart({ cartItems }) {
  return (
    <div className="cart-page">
      <MainNavbar />
      <CartContent cartItems={cartItems} />
    </div>
  );
}
