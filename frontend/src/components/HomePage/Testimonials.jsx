import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex P.",
    text: "Absolutely love this platform! It helped me discover amazing books and connect with fellow readers.",
    avatar: "/users/p4.jpg",
  },
  {
    name: "Priya S.",
    text: "A fantastic way to track my reading list and share reviews. The community is great!",
    avatar: "/users/p7.jpg",
  },
  {
    name: "James L.",
    text: "Beautiful design, easy to use, and keeps me motivated to read more books every month.",
    avatar: "/users/p6.jpg",
  },
  {
    name: "Sara M.",
    text: "It feels like a cozy book café online. I love the vibes!",
    avatar: "/users/p5.jpg",
  },
  {
    name: "Ravi T.",
    text: "Finally a book platform that understands readers!",
    avatar: "/users/p4.jpg",
  },
  {
    name: "Lena W.",
    text: "I joined for the book tracking, stayed for the community. And plan on staying forever!",
    avatar: "/users/p3.jpg",
  },
  {
    name: "Nora K.",
    text: "An intuitive way to catalog my favorite books and discover new ones.",
    avatar: "/users/p1.jpg",
  },
  {
    name: "Eli B.",
    text: "I read more now than I ever did before. This platform is magic.",
    avatar: "/users/p2.jpg",
  },
];

export default function Testimonials() {
  const paired = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    paired.push([testimonials[i], testimonials[i + 1]]);
  }

  return (
    <section className="py-20 px-4 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What Readers Are Saying
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {paired.slice(0, 4).map((pair, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* 3-layer outline effect */}
              <div className="absolute top-1 left-1 w-full h-full border-2 border-white/10 rounded-xl z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              <div className="absolute top-2 left-2 w-full h-full border-2 border-white/5 rounded-xl z-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />

              <Card className="relative z-10 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-white/5 border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {pair.map((t, sideIndex) =>
                  t ? (
                    <div
                      key={sideIndex}
                      className="w-full sm:w-1/2 p-6 flex flex-col justify-between text-center sm:text-left"
                    >
                      <div className="flex flex-col items-center sm:items-start mb-4">
                        <Avatar className="mb-2 w-14 h-14">
                          <AvatarImage src={t.avatar} alt={t.name} />
                          <AvatarFallback>
                            {t.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-semibold">{t.name}</h3>
                      </div>
                      <p className="text-sm italic text-white/80">“{t.text}”</p>
                    </div>
                  ) : (
                    <div
                      key={sideIndex}
                      className="w-full sm:w-1/2 p-6 hidden sm:block"
                    />
                  )
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


