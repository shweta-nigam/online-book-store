"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const featuredBooks = [
  { id: 1, cover: "/books/b25.jpg", link: "/books/25" },
  { id: 2, cover: "/books/b24.webp", link: "/books/24" },
  { id: 3, cover: "/books/b23.webp", link: "/books/23" },
  { id: 4, cover: "/books/b22.webp", link: "/books/22" },
  { id: 5, cover: "/books/b21.webp", link: "/books/21" },
  { id: 6, cover: "/books/b20.jpg", link: "/books/20" },
  { id: 7, cover: "/books/b19.jpg", link: "/books/19" },
  { id: 8, cover: "/books/b18.jpg", link: "/books/18" },
  { id: 9, cover: "/books/b17.webp", link: "/books/17" },
  { id: 10, cover: "/books/b15.jpg", link: "/books/15" },
  { id: 11, cover: "/books/b14.webp", link: "/books/14" },
  { id: 12, cover: "/books/b13.webp", link: "/books/13" },
  { id: 13, cover: "/books/b12.webp", link: "/books/12" },
  { id: 14, cover: "/books/b11.jpg", link: "/books/11" },
  { id: 15, cover: "/books/b10.jpg", link: "/books/10" },
];

export function FeaturedBooks() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white overflow-hidden">
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
          <Button className="btn" variant="outline" onClick={() => navigate("/books")}>
            Explore
          </Button>
        </motion.div>

        {/* Right Book Wall */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-0"
        >
          {featuredBooks.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ scale: 1.05 }}
              className="aspect-[2/3] w-full cursor-pointer transition duration-300"
              onClick={() => navigate(book.link)}
            >
              <img
                src={book.cover}
                alt={`Book ${book.id}`}
                className="w-full h-full object-cover rounded-sm"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



