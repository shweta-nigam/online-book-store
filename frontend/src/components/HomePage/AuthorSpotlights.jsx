import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const authors = [
  { name: "J.K. Rowling", quote: "I do believe something very magical can happen when you read a good book.", image: "/authors/jk.jpg" },
  { name: "George R.R. Martin", quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", image: "/authors/gr.jpg" },
  { name: "Jhumpa Lahiri", quote: "That's the thing about books. They let you travel without moving your feet.", image: "/authors/jl.png" },
  { name: "Neil Gaiman", quote: "Books are a uniquely portable magic.", image: "/authors/ng.jpg" },
  { name: "Toni Morrison", quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.", image: "/authors/tm.jpg" },
  { name: "Haruki Murakami", quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.", image: "/authors/hm.jpg" },
  { name: "Agatha Christie", quote: "The best time for planning a book is while you’re doing the dishes.", image: "/authors/agatha-christie.jpg" },
  { name: "Stephen King", quote: "Books are a uniquely portable magic.", image: "/authors/sk.jpg" },
];

export default function AuthorSpotlights() {
  return (
    <section className="py-16 px-4 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Author Spotlights</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {authors.map((author, idx) => (
          <Card
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/10 shadow-md text-white rounded-xl flex flex-col justify-between hover:shadow-blue-400/30 transition-all duration-300 px-2 py-4"
          >
            <CardHeader className="flex flex-col items-center text-center p-2">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur opacity-0 group-hover:opacity-40 transition duration-500" />
                <Avatar className="w-14 h-14 border-2 border-white z-10 relative">
                  <AvatarImage src={author.image} alt={author.name} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="mt-2 text-base font-semibold text-center">{author.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs italic text-center px-1 pb-2 mt-auto">
              “{author.quote}”
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


