import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function JoinCommunity() {
  return (
    <section className="py-16 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Badge className="mb-4 bg-indigo-600 text-white px-3 py-1 text-sm">
          Join the Community
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Connect with thousands of fellow readers
        </h2>
        <p className="text-gray-300 mb-6">
          Share your reviews, discover new books, and explore recommendations tailored just for you.
        </p>
        <Button
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-md px-6 py-3 rounded-full"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
