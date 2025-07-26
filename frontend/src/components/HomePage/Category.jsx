import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const categories = [
  "Fiction",
  "Romance",
  "Thriller",
  "Self Help",
  "Fantasy",
  "History",
]

export function CategoryPreview() {
  const navigate = useNavigate()

  return (
    <section className="py-12 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
        <p className="text-gray-600 mb-8">
          Discover books by your favorite genres and interests.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full px-6 py-2 text-base font-medium hover:bg-blue-100 transition"
              onClick={() =>
                navigate(`/books?category=${encodeURIComponent(category.toLowerCase())}`)
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
