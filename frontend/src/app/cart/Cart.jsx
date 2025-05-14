import MainNavbar from "../../components/MainNavbar";
import "./cart.css";

function CartContent({ cartItems }) {
  const data = cartItems;
  return (
    <div className="cart-content">
      <h1>My cart</h1>
      <br />
      <div className="cart-content-details">
        <ul className="cart-content-list">
          {data.map((d) => {
            return <li key={d.variant_id}>{d.product_name}</li>;
          })}
        </ul>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Total: 420</p>
          <div>Button tray here</div>
        </div>
      </div>
    </div>
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
