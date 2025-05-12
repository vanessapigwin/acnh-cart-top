import MainNavbar from "../../components/MainNavbar";
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
    <>
      <MainNavbar />
      <StorePageContent />
    </>
  );
}
