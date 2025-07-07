import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const authors = [
  {
    name: "J.K. Rowling",
    quote:
      "I do believe something very magical can happen when you read a good book.",
    image: "/authors/rowling.jpg",
  },
  {
    name: "George R.R. Martin",
    quote:
      "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    image: "/authors/martin.jpg",
  },
  {
    name: "Jhumpa Lahiri",
    quote:
      "That's the thing about books. They let you travel without moving your feet.",
    image: "/authors/jhumpa.jpg",
  },
];


export default function AuthorSpotlights() {
  return (
    <section className="py-12 px-6 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Author Spotlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {authors.map((author, idx) => (
          <Card key={idx} className="bg-white/10 backdrop-blur-sm border-none text-white shadow-md">
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="w-20 h-20 border-2 border-white shadow-sm">
                <AvatarImage src={author.image} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4 text-xl font-semibold">{author.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic text-sm">“{author.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
