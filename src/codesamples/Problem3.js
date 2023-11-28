import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";
const statement = "Implement a React component for a simple image carousel.";
// output

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

const samplecode = `
export const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length,
      );
    };
  
    return (
      <div>
        <button onClick={prevImage}>Previous</button>
        <img src={images[currentIndex]} alt={Image {currentIndex + 1}} />
        <button onClick={nextImage}>Next</button>
      </div>
    );
  };`;

export default function Problem3() {
  const arrayCarousel = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=2",
  ];
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<ImageCarousel images={arrayCarousel} />}
    />
  );
}
