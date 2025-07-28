import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offers = [
  {
    title: "Summer Sale",
    description: "Get up to 50% off on selected titles.",
    background: "/bg/f1.webp",
    book: {
      link: "https://example.com/book1",
      zigzag: [
        "/books/b21.webp",
        "/books/b22.webp",
        "/books/b25.jpg",
        "/books/b4.jpg",
      ],
    },
  },
  {
    title: "Buy 2 Get 1",
    description: "Bundle deal on bestsellers.",
    background: "/bg/f2.webp",
    book: {
      link: "https://example.com/book2",
      zigzag: [
        "/books/b5.jpg",
        "/books/b6.jpg",
        "/books/b7.jpg",
        "/books/b8.jpg",
      ],
    },
  },
  {
    title: "New Arrivals",
    description: "Fresh releases now available.",
    background: "/bg/f9.png",
    book: {
      link: "https://example.com/book3",
      zigzag: [
        "/books/b9.webp",
        "/books/b10.jpg",
        "/books/b11.jpg",
        "/books/b12.webp",
      ],
    },
  },
  {
    title: "Editor's Picks",
    description: "Curated by our top editors.",
    background: "/bg/f6.png",
    book: {
      link: "https://example.com/book4",
      zigzag: [
        "/books/b13.webp",
        "/books/b14.webp",
        "/books/b15.jpg",
        "/books/b16.webp",
      ],
    },
  },
  {
    title: "Flash Deals",
    description: "Limited time discounts you can’t miss!",
    background: "/bg/f1.png",
    book: {
      link: "https://example.com/book5",
      zigzag: [
        "/books/b17.webp",
        "/books/b18.jpg",
        "/books/b19.jpg",
        "/books/b20.jpg",
      ],
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
    <div
  className="relative h-[550px] w-full flex justify-center items-center mt-6"
  style={{ perspective: 1200 }}
>
      <img
        src={offers[index].background}
        alt="Background Flower-vector"
        className="absolute top-0 z-10 left-1 md:left-2 lg:left-0 xl:left-10 w-36 md:w-46 lg:w-56 xl:w-66"
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
            <h2 className="text-3xl  xl:text-4xl ml-6 font-bold xl:mb-2">{offers[index].title}</h2>
            <p className="text-base ml-2 leading-relaxed">
              {offers[index].description}
            </p>
          </div>

          {/* Right Page */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative mt-4 md:top-4">
            {/* Zig-zag books */}
            <div className="grid grid-cols-2 gap-2 mb-40 md:mb-40 lg:mb30  ml-2 md:ml-20 items-center md:flex md:gap-2 md:absolute">
              {offers[index].book.zigzag.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Book ${idx}`}
                  className={`w-16 h-28 md:w-30 md:h-38 object-contain rounded shadow-md transform ${
                    idx % 2 === 1 ? "md:translate-y-[15px]" : ""
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
