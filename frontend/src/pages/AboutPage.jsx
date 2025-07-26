import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Rocket } from "lucide-react";

const aboutInfo = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#00d9ff]" />,
    title: "Our Mission",
    description:
      "To cultivate a vibrant reading culture by connecting people through thoughtfully curated books and a seamless digital experience.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#00d9ff]" />,
    title: "Our Community",
    description:
      "Thousands of readers and authors around the world come together at ReadGala to share, review, and celebrate stories.",
  },
  {
    icon: <Globe className="w-8 h-8 text-[#00d9ff]" />,
    title: "Global Reach",
    description:
      "With a growing international audience, ReadGala empowers reading for everyone, everywhere.",
  },
];

const teamMembers = [
  { name: "Liam Chen", role: "Frontend Developer", image: "/users/p3.jpg" },        
  { name: "Isabella Rossi", role: "Product Designer", image: "/users/p1.jpg" }, 
  { name: "Takumi Sato", role: "Backend Engineer", image: "/users/p7.jpg" },       
  { name: "Fatima Al-Mansoori", role: "Community Manager", image: "/users/p6.jpg" },
  { name: "Mateo González", role: "Mobile Developer", image: "/users/p5.jpg" },      
  { name: "Amara Ndlovu", role: "Marketing Strategist", image: "/users/p4.jpg" },    
];

const timeline = [
  {
    year: "2022",
    title: "The Spark",
    description: "ReadGala was envisioned to reimagine the online reading experience.",
  },
  {
    year: "2023",
    title: "Beta Born",
    description: "Launched the beta platform with handpicked books and early adopters.",
  },
  {
    year: "2024",
    title: "Community Bloom",
    description: "Reached 10,000+ users. Authors started showcasing their works.",
  },
  {
    year: "2025",
    title: "Global Chapters",
    description: "Expanded globally with multilingual support and mobile apps.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white py-16 px-6 space-y-24">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold mb-4 text-[#00d9ff]">
          About ReadGala
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Welcome to ReadGala — where passion for books meets modern design. Whether you’re a casual reader or a passionate bibliophile, ReadGala is your destination to explore, discover, and connect through stories.
        </p>
      </motion.div>

      {/* Mission Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {aboutInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold text-[#00d9ff]">Meet the PageTurners</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          The passionate squad behind ReadGala — combining code, creativity, and community to shape the future of reading.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-black/30 p-4 rounded-xl border border-white/10 shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-[#00d9ff]"
              />
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

   
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#00d9ff]">Our Journey</h2>
        <div className="relative border-l-2 border-[#00d9ff] pl-6 space-y-12">
          {timeline.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-[-13px] top-1 w-5 h-5 bg-[#00d9ff] rounded-full shadow-lg shadow-cyan-500/50 border-2 border-white "></div>
              <h3 className="font-semibold text-lg m-4">{event.year} — {event.title}</h3>
              <p className="text-gray-300 text-sm">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Rocket className="mx-auto text-[#00d9ff] w-10 h-10 mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Join the ReadGala Revolution
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Whether you're a reader, writer, or dreamer — there's a space for you at ReadGala. Become a part of the movement today.
        </p>
        <a
          href="/signup"
          className="inline-block bg-[#00d9ff] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-all"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;
