"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const featuredBooks = [
  { id: 1, cover: "/books/b25.jpg", link: "/book/207566cd-55ed-4155-aa76-a55d9619b6e7" },
  { id: 2, cover: "/books/b24.webp", link: "/book/a917c1ea-6b6b-4744-b458-8b72ec44543a" },
  { id: 3, cover: "/books/b23.webp", link: "/book/1f6d20ea-6a4e-4b51-a3fe-43a4f4aa221b" },
  { id: 4, cover: "/books/b2.jpg", link: "/book/297c7edf-624f-4511-b2ce-f3af37f27a83" },
  { id: 5, cover: "/books/b21.webp", link: "/book/15848d72-acc8-4211-8734-8ac733b75554" },
  { id: 6, cover: "/books/b20.jpg", link: "/book/eb2be4b0-8d68-479b-9fc6-d10700da9523" },
  { id: 7, cover: "/books/b19.jpg", link: "/book/cc556f1f-47d6-4212-b31d-fced087dec6e" },
  { id: 8, cover: "/books/b18.jpg", link: "/book/521c9622-bc8a-4bbe-b0c4-5d6cbdedfb43" },
  { id: 9, cover: "/books/b17.webp", link: "/book/2b8d62b8-d841-41df-8019-65f3a7e02e54" },
  { id: 10, cover: "/books/b15.jpg", link: "/book/cc556f1f-47d6-4212-b31d-fced087dec6e" },
  { id: 11, cover: "/books/b1.jpg", link: "/book/320f7556-d4b4-4a27-bd24-707963ed1ae2" },
  { id: 12, cover: "/books/b13.webp", link: "/book/8ae7ab07-acb1-4d3f-977f-b02dee42c2b4" },
  { id: 13, cover: "/books/b12.webp", link: "/book/15848d72-acc8-4211-8734-8ac733b75554" },
  { id: 14, cover: "/books/b11.jpg", link: "/book/eb2be4b0-8d68-479b-9fc6-d10700da9523" },
  { id: 15, cover: "/books/b10.jpg", link: "/book/521c9622-bc8a-4bbe-b0c4-5d6cbdedfb43" },
];

export function FeaturedBooks() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white overflow-hidden">
   
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
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



