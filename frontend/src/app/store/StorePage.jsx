import MainNavbar from "../../components/navbar/MainNavbar";
import "./storepage.css";

function StorePageContent() {
  return (
    <div>
      <div className="store-page">Accessories</div>
    </div>
  );
}

export default function StorePage() {
  return (
    <div className="store-page">
      <MainNavbar />
      <StorePageContent />
    </div>
  );
}
