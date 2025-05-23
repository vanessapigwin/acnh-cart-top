import fallbackSrc from "../assets/resetti.png";

export default function ImageTile({ filename }) {
  const onError = (e) => {
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <>
      <img src={filename} onError={onError} />
    </>
  );
}
