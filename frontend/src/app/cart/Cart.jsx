import MainNavbar from "../../components/navbar/MainNavbar";
import CartItem from "../../components/cartItem/CartItem";
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
            return <CartItem key={d.variant_id} data={d} />;
          })}
        </ul>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Number of items: 3</p>
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
