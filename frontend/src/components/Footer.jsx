import { InstagramIcon, GithubIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();
    console.log("Subscribed:", email);
  }

  return (
    <footer className="bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-gray-100">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fadeIn">
      
        <div>
          <h3 className="text-3xl font-bold mb-3">ReadGala</h3>
          <p className="text-sm text-gray-300">
            Your one-stop hub for fiction, non-fiction, academic & children's books.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/shop" },
              { name: "Categories", href: "/categories" },
              { name: "Authors", href: "/authors" },
              { name: "Blog", href: "/blog" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:underline hover:text-blue-300 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-3">Join Our Newsletter</h4>
          <p className="text-sm text-gray-300 mb-4">
            Get updates on new arrivals, bestsellers, sales & more.
          </p>
          <form onSubmit={handleSubscribe} className="flex max-w-md">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-r-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      
          <div className="flex space-x-5">
            {[InstagramIcon, GithubIcon, XIcon].map((Icon, idx) => (
              <Icon
                key={idx}
                className="w-5 h-5 hover:scale-110 hover:text-blue-300 transition-transform duration-300"
              />
            ))}
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} ReadGala. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

