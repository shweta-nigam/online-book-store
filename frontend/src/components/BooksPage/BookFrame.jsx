import React from "react";

const BookFrame = () => {
  return (
    <div className="relative h-[550px] w-full flex justify-center items-center mt-6">
      {/* Left page outlines */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`left-${i}`}
          className="absolute left-0 top-0 w-1/2 flex justify-end items-center"
          style={{
            zIndex: 10 + i,
            transform: `translateX(${i * 3}px)`,
          }}
        >
          <div
            className="w-[95%] rounded-tl-lg rounded-bl-lg border-l border-t border-b"
            style={{
              height: `${380 - i * 5}px`,
              borderColor: `rgba(255,255,255,${0.2 + i * 0.05})`,
              transform: `skewY(-3deg)`,
            }}
          />
        </div>
      ))}

      {/* Right page outlines */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`right-${i}`}
          className="absolute right-0 top-0 w-1/2 flex justify-start items-center"
          style={{
            zIndex: 10 + i,
            transform: `translateX(-${i * 3}px)`,
          }}
        >
          <div
            className="w-[95%] rounded-tr-lg rounded-br-lg border-r border-t border-b"
            style={{
              height: `${380 - i * 5}px`,
              borderColor: `rgba(255,255,255,${0.2 + i * 0.05})`,
              transform: `skewY(3deg)`,
            }}
          />
        </div>
      ))}

      {/* Center spine (shortest part) */}
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[2px] h-[300px] bg-white/30 z-50 rounded-full" />
    </div>
  );
};

export default BookFrame;
