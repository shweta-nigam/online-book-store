import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "/b2.png",
    price: "$12.99",
    genre: "Fiction",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/b1.png",
    price: "$9.99",
    genre: "Self Help",
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "/b3.png",
    price: "$11.49",
    genre: "Thriller",
  },
];

export function FeaturedBooks() {
  return (
    <section className="py-12 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white animate-fadeIn">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredBooks.map((book, idx) => (
            <Card
              key={book.id}
              className="bg-gray-900 text-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out animate-fadeIn"
              style={{ animationDelay: `${idx * 0.1}s` }} // stagger animation
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-contain bg-gray-800"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                <p className="text-sm text-gray-400 mb-2">by {book.author}</p>
                <Badge variant="secondary" className="mb-3">{book.genre}</Badge>
                <p className="text-lg font-bold">{book.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  View Book
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

