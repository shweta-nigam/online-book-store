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
    oldPrice: "$14.99",
    newPrice: "$8.99",
    genre: "Memoir",
    endsInSeconds: 3600, // 1 hour
  },
  {
    id: 2,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    cover: "/b5.jpg",
    oldPrice: "$13.49",
    newPrice: "$7.99",
    genre: "Self Help",
    endsInSeconds: 7200, // 2 hours
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover: "/b6.jpg",
    oldPrice: "$16.99",
    newPrice: "$10.49",
    genre: "Fiction",
    endsInSeconds: 5400, // 1.5 hours
  },
    {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    cover: "/b7.jpg",
    oldPrice: "$15.99",
    newPrice: "$9.49",
    genre: "Productivity",
    endsInSeconds: 4800, // 1.3 hours
  },
];

export default function LimitedTimeDeals() {
  // Countdown timers (basic)
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
    <section className="py-12 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(5,87,150,0.8)_35%,rgba(0,0,0,0.95)_100%)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Badge className="bg-red-600 text-white text-xs px-2 py-1">
            ⏰ Limited-Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Deals</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedDeals.map((book, idx) => (
            <motion.a
              key={book.id}
              href={`/books/${book.id}`} // replace with real route
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="block"
            >
              <Card className="bg-gray-800 text-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-48 object-contain bg-gray-900 p-2"
                  />
                  <Badge className="absolute top-2 right-2 bg-red-600 text-xs">
                    Ends in {formatTime(timers[idx])}
                  </Badge>
                </div>
                <CardContent className="p-3">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-xs text-gray-400 mb-1">by {book.author}</p>
                  <Badge variant="secondary" className="mb-2">
                    {book.genre}
                  </Badge>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="line-through text-gray-400 text-xs">
                      {book.oldPrice}
                    </span>
                    <span className="text-md font-bold text-green-400">
                      {book.newPrice}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-3 pt-0">
                  <Button
                    size="sm"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs"
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
