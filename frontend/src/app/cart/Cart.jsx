import MainNavbar from "../../components/MainNavbar";
import "./cart.css";

const fakeData = [
  {
    "variant_id": 3042,
    "product_name": "Acorn Knit Cap",
    "price": 880,
    "color": "brown",
    "filename": "https://images.cattoviz.com/Headwear/CapHatAcorn3.png",
    "quantity": 1
  },
  {
    "variant_id": 3047,
    "product_name": "Acorn Knit Cap",
    "price": 880,
    "color": "beige",
    "filename": "https://images.cattoviz.com/Headwear/CapHatAcorn5.png",
    "quantity": 2
  }
]

function CartContent() {
  const data =fakeData
  return (
    <div className="cart-content">
      <h1>My cart</h1>
      <br />
      <div className="cart-content-details">
        <ul className="cart-content-list">
          {
            data.map((d) => {
              return <li key={d.variant_id}>{d.product_name}</li>
            })
          }
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

export default function Cart() {
  return (
    <div className="cart-page">
      <MainNavbar />
      <CartContent />
    </div>
  );
}
