import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offers = [
  {
    title: "Summer Sale",
    description: "Get up to 50% off on selected titles.",
    background: "/f1.webp",
    book: {
      link: "https://example.com/book1",
      zigzag: ["/b21.webp", "/b22.webp", "/b3.png", "/b4.jpg"],
    },
  },
  {
    title: "Buy 2 Get 1",
    description: "Bundle deal on bestsellers.",
    background: "/f2.webp",
    book: {
      link: "https://example.com/book2",
      zigzag: ["/b5.jpg", "/b6.jpg", "/b7.jpg", "/b8.jpg"],
    },
  },
  {
    title: "New Arrivals",
    description: "Fresh releases now available.",
    background: "/f9.png",
    book: {
      link: "https://example.com/book3",
      zigzag: ["/b9.webp", "/b10.jpg", "/b11.jpg", "/b12.webp"],
    },
  },
  {
    title: "Editor's Picks",
    description: "Curated by our top editors.",
    background: "/f6.png",
    book: {
      link: "https://example.com/book4",
      zigzag: ["/b13.webp", "/b14.webp", "/b15.jpg", "/b16.webp"],
    },
  },
  {
    title: "Flash Deals",
    description: "Limited time discounts you can’t miss!",
    background: "/f1.png",
    book: {
      link: "https://example.com/book5",
      zigzag: ["/b17.webp", "/b18.jpg", "/b19.jpg", "/b20.jpg"],
    },
  },
];

const BookCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState("right");

  const triggerFlip = (direction) => {
    setFlipDir(direction);
    setIsFlipping(true);
    setTimeout(() => {
      setIndex((prev) =>
        direction === "right"
          ? (prev + 1) % offers.length
          : (prev - 1 + offers.length) % offers.length
      );
      setIsFlipping(false);
    }, 800);
  };

  return (
    <div className="relative h-[550px] w-full flex justify-center items-center mt-6">
      {/* Dynamic Background Flower */}
      <img
        src={offers[index].background}
        alt="Background Flower-vector"
        className="absolute top-2 left-6 w-56 z-10"
      />

      {/* Outline Frame - 5 Layers */}
      {[...Array(5)].map((_, i) => {
        const delay = (i + 1) * 0.05;
        return (
          <React.Fragment key={i}>
            {/* Left Outline */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 flex justify-end items-center"
              style={{
                zIndex: 5 + i,
                transform: `translateX(${i * 3}px)`,
              }}
              animate={
                isFlipping && flipDir === "right"
                  ? { rotateY: [0, -10, 0] }
                  : isFlipping && flipDir === "left"
                  ? { rotateY: [0, 10, 0] }
                  : {}
              }
              transition={{ duration: 0.8, delay }}
            >
              <div
                className="w-[95%] rounded-tl-lg rounded-bl-lg border-l border-t border-b"
                style={{
                  height: `${400 - i * 5}px`,
                  borderColor: `rgba(255,255,255,${0.15 + i * 0.04})`,
                  transform: `skewY(-3deg)`,
                }}
              />
            </motion.div>

            {/* Right Outline */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 flex justify-start items-center"
              style={{
                zIndex: 5 + i,
                transform: `translateX(-${i * 3}px)`,
              }}
              animate={
                isFlipping && flipDir === "right"
                  ? { rotateY: [0, 10, 0] }
                  : isFlipping && flipDir === "left"
                  ? { rotateY: [0, -10, 0] }
                  : {}
              }
              transition={{ duration: 0.8, delay }}
            >
              <div
                className="w-[95%] rounded-tr-lg rounded-br-lg border-r border-t border-b"
                style={{
                  height: `${400 - i * 5}px`,
                  borderColor: `rgba(255,255,255,${0.15 + i * 0.04})`,
                  transform: `skewY(3deg)`,
                }}
              />
            </motion.div>
          </React.Fragment>
        );
      })}

      {/* Carousel Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateY: flipDir === "right" ? 90 : -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: flipDir === "right" ? -90 : 90, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute z-[999] w-[90%] h-[400px] flex overflow-hidden"
        >
          {/* Left Page */}
          <div className="w-1/2 flex flex-col mb-40 justify-center items-center text-white text-center">
            <h2 className="text-4xl font-bold mb-2">{offers[index].title}</h2>
            <p className="text-base leading-relaxed">
              {offers[index].description}
            </p>
          </div>

          {/* Right Page */}
          <div className="w-1/2 flex justify-center items-center relative top-4">
            {/* Zig-zag books */}
            <div className="absolute top-2 right-10 flex gap-2 ">
              {offers[index].book.zigzag.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Book ${idx}`}
                  className={`w-30 h-38 object-contain rounded shadow-md transform ${
                    idx % 2 === 1 ? "translate-y-[15px]" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={() => triggerFlip("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white px-3 py-2 rounded-full z-[1000]"
      >
        ◀
      </button>
      <button
        onClick={() => triggerFlip("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white px-3 py-2 rounded-full z-[1000]"
      >
        ▶
      </button>

      {/* Center Spine */}
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[2px] h-[320px] bg-white/30 z-[60] rounded-full" />
    </div>
  );
};

export default BookCarousel;
