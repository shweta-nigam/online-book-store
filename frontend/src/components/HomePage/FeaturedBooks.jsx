"use client";
import { motion } from "framer-motion";

const featuredBooks = [
  { id: 1, cover: "/books/b25.jpg" },
  { id: 2, cover: "/books/b24.webp" },
  { id: 3, cover: "/books/b23.webp" },
  { id: 4, cover: "/books/b22.webp" },
  { id: 5, cover: "/books/b21.webp" },
  { id: 6, cover: "/books/b20.jpg" },
  { id: 7, cover: "/books/b19.jpg" },
  { id: 8, cover: "/books/b18.jpg" },
  { id: 9, cover: "/books/b17.webp" },
  { id: 10, cover: "/books/b15.jpg" },
  { id: 11, cover: "/books/b14.webp" },
  { id: 12, cover: "/books/b13.webp" },
  { id: 13, cover: "/books/b12.webp" },
  { id: 14, cover: "/books/b11.jpg" },
  { id: 15, cover: "/books/b10.jpg" },
];

export function FeaturedBooks() {
  return (
    <section className="relative py-20  bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Our Featured Books
          </h2>
          <p className="text-lg text-gray-300">
            Dive into a world of carefully curated titles across genres.
            This wall of covers represents our current top picks — minimal, beautiful, and ready for your shelf.
          </p>
        </motion.div>

        {/* Right Book Wall */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-0"
        >
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              whileHover={{ scale: 1.03 }}
              className="aspect-[2/3] w-full"
            >
              <img
                src={book.cover}
                alt={`Book ${book.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


