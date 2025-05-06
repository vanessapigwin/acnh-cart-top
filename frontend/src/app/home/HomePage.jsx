import MainNavbar from "../../components/MainNavbar";
import "./homepage.css";
import img1 from "../../assets/Bgal21.jpg";
import img2 from "../../assets/JoleenJackalope.jpg";
import img3 from "../../assets/bayerngirl.jpg";
import img4 from "../../assets/CatLassTitch.jpg";
import img5 from "../../assets/Minymints.jpg";

const images = [img1, img2, img3, img4, img5];

export default function Homepage() {
  return (
    <div className="mainpage">
      <MainNavbar />
      <div className="img-slides">
        <img src={img1}></img>
      </div>
    </div>
  );
}
