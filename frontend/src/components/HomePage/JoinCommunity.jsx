import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function JoinCommunity() {
  return (
    <section className="py-20 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">
          <Badge className="mb-4 bg-gary-600/80 text-white px-3 py-1 text-sm rounded-full shadow">
            Join the Community
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow">
            Connect with thousands of fellow readers
          </h2>

          <p className="text-gray-300 text-md mb-6 max-w-lg">
            Share your reviews, discover new books, and explore recommendations tailored just for you.
          </p>

          <Button
            size="lg"
            className="rounded-full text-white px-7 py-3 text-sm font-medium shadow-md transition duration-300"
            style={{ backgroundColor: "oklch(0.21 0.034 264.665)" }}
          >
            Get Started
          </Button>
        </div>

        {/* RIGHT SIDE - IMAGE SLOT */}
        <div className="w-full h-full flex justify-center md:justify-end">
          {/* Replace below line with your desired image */}
          <img
            src="/assets/book-club.jpg"
            alt="Community Illustration"
            className="w-180 md:w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
