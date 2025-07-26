import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, XIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white py-16 px-6">

      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#00d9ff] mb-4">Get in Touch</h1>
        <p className="text-gray-300">
          We'd love to hear from you! Whether it’s feedback, a question, or a
          collaboration idea — drop a message and we’ll get back soon.
        </p>
      </motion.div>

      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        <ContactCard
          icon={<Mail className="text-[#00d9ff] w-6 h-6" />}
          title="Email"
          value="hello@readgala.com"
        />
        <ContactCard
          icon={<MapPin className="text-[#00d9ff] w-6 h-6" />}
          title="Location"
          value="Remote • Worldwide 🌍"
        />
        <ContactCard
          icon={
            <div className="flex justify-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="text-[#00d9ff] w-5 h-5 hover:scale-110 transition" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="text-[#00d9ff] w-5 h-5 hover:scale-110 transition" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="text-[#00d9ff] w-5 h-5 hover:scale-110 transition" />
              </a>
            </div>
          }
          title="Socials"
          value="@ReadGalaHQ"
        />
      </div>


      <motion.form
        className="bg-black/40 border border-white/10 backdrop-blur-md p-8 rounded-xl max-w-2xl mx-auto space-y-6 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <Input label="Name" type="text" placeholder="Your name" />
          <Input label="Email" type="email" placeholder="you@example.com" />
        </div>
        <Input label="Subject" type="text" placeholder="What's this about?" />
        <Textarea label="Message" placeholder="Write your message here..." />
        <button
          type="submit"
          className="bg-[#00d9ff] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

// Reusable Input
const Input = ({ label, type, placeholder }) => (
  <div className="flex flex-col text-left">
    <label className="mb-1 text-sm font-semibold text-gray-300">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-3 rounded-md bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00d9ff] text-white placeholder-gray-400"
    />
  </div>
);

// Reusable Textarea
const Textarea = ({ label, placeholder }) => (
  <div className="flex flex-col text-left">
    <label className="mb-1 text-sm font-semibold text-gray-300">{label}</label>
    <textarea
      rows="5"
      placeholder={placeholder}
      className="px-4 py-3 rounded-md bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00d9ff] text-white placeholder-gray-400 resize-none"
    ></textarea>
  </div>
);

// Reusable Contact Card
const ContactCard = ({ icon, title, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-md hover:shadow-xl text-center"
  >
    <div className="mb-3 flex justify-center">{icon}</div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-gray-300 text-sm">{value}</p>
  </motion.div>
);

export default ContactPage;
