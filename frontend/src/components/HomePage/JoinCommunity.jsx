import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function JoinCommunity() {
   const navigate = useNavigate()

  return (
    <section className="py-20 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
     
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
            className="rounded-full text-white bg-gray-900 hover:bg-gray-600 px-7 py-3 text-sm font-medium shadow-md transition duration-300"
            onClick = {() => navigate("/login")}
          >
            Get Started
          </Button>
        </div>

       
        <div className="w-full h-full flex justify-center md:justify-end">
          <img
            src="/assets/book-club.jpg"
            alt="Community Illustration"
            className="md:w-140 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
