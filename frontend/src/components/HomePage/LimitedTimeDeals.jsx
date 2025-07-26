import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const limitedDeals = [
  {
    id: 1,
    title: "Educated",
    author: "Tara Westover",
    cover: "/b4.jpg",
    oldPrice: "₹1249",
    newPrice: "₹749",
    genre: "Memoir",
    endsInSeconds: 3600,
  },
  {
    id: 2,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    cover: "/b5.jpg",
    oldPrice: "₹1099",
    newPrice: "₹599",
    genre: "Self Help",
    endsInSeconds: 7200,
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover: "/b6.jpg",
    oldPrice: "₹1399",
    newPrice: "₹899",
    genre: "Fiction",
    endsInSeconds: 5400,
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    cover: "/b7.jpg",
    oldPrice: "₹1299",
    newPrice: "₹749",
    genre: "Productivity",
    endsInSeconds: 4800,
  },
];

export default function LimitedTimeDeals() {
  const [timers, setTimers] = useState(
    limitedDeals.map((deal) => deal.endsInSeconds)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => prev.map((time) => (time > 0 ? time - 1 : 0)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <section className="py-14 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Badge className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full shadow">
            Limited-Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow">
            Exclusive Deals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedDeals.map((book, idx) => (
            <motion.a
              key={book.id}
              href={`/books/${book.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="block"
            >
              <Card className="bg-white/10 text-white rounded-2xl overflow-hidden backdrop-blur shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-52 object-contain bg-white/10 p-4 rounded-t-2xl"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-500 text-xs px-2 rounded-full shadow">
                    ⌛ {formatTime(timers[idx])}
                  </Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white">{book.title}</h3>
                  <p className="text-sm text-gray-300 mb-1">
                    by {book.author}
                  </p>
                  <Badge className="bg-indigo-500/80 text-white text-xs mb-3 rounded-full">
                    {book.genre}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400 text-sm">
                      {book.oldPrice}
                    </span>
                    <span className="text-lg font-semibold text-green-300">
                      {book.newPrice}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button
                    size="sm"
                    className="w-full bg-gray-900 hover:bg-gray-600 text-white rounded-md text-xs tracking-wide"
                  >
                    View Deal
                  </Button>
                </CardFooter>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
