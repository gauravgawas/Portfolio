import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const images = [
  "src/assets/chatimg1.jpeg",
  "src/assets/chatimg2.jpeg",
  "src/assets/chatimg3.jpeg",
  "src/assets/chatimg4.jpeg",
  "src/assets/chatimg5.jpeg",
  "src/assets/chatimg6.jpeg",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      style={{
        width: "100%",
        height: "300px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <img
        src={images[index]}
        alt="slider"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "12px",
          transition: "0.4s ease",
        }}
      />
    </div>
  );
}
