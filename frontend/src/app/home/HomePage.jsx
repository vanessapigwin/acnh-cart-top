import MainNavbar from "../../components/MainNavbar";
import "./homepage.css";
import img1 from "../../assets/Bgal21.jpg";
import img2 from "../../assets/JoleenJackalope.jpg";
import img3 from "../../assets/bayerngirl.jpg";
import img4 from "../../assets/CatLassTitch.jpg";
import img5 from "../../assets/Minymints.jpg";
import { useState } from "react";
import { useEffect } from "react";

const images = [img1, img2, img3, img4, img5];

function HomepageContent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 5000);

    return () => {
      clearInterval(key);
    };
  }, []);

  const imgIdx = counter % 5;
  const img = images[imgIdx];
  const author = `/u/${img.split("/").pop().split(".").at(0)}`;

  return (
    <div className="mainpage">
      <div className="slide-container">
        <img className="slide" src={images[imgIdx]}></img>
      </div>
      <div className="author">{author}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <HomepageContent />
    </>
  );
}
