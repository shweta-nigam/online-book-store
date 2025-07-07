import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  // You can later move this data to CMS or JSON file
  const testimonials = [
    {
      name: "Alex P.",
      text: "Absolutely love this platform! It helped me discover amazing books and connect with fellow readers.",
      avatar: "/users/alex.png",
    },
    {
      name: "Priya S.",
      text: "A fantastic way to track my reading list and share reviews. The community is great!",
      avatar: "/users/priya.png",
    },
    {
      name: "James L.",
      text: "Beautiful design, easy to use, and keeps me motivated to read more books every month.",
      avatar: "/users/james.png",
    },
  ];

  return (
    <section className="py-12 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-100">
          What Readers Are Saying
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Card key={index} className="shadow hover:shadow-lg transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="mb-4">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <p className="italic text-gray-300 mb-4">
                  “{t.text}”
                </p>
                <div className="font-semibold text-gray-100">
                  — {t.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
