// src/components/Footer.jsx
import { useState } from "react";
import { InstagramIcon, GithubIcon, XIcon } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: hook into your newsletter API
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1) Brand / About */}
        <div>
          <h3 className="text-2xl font-bold mb-2">BookBazaar</h3>
          <p className="text-sm text-gray-600">
            Your one-stop shop for fiction, non-fiction, academic & children’s
            books.
          </p>
        </div>

        {/* 2) Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:underline">
                Categories
              </a>
            </li>
            <li>
              <a href="/authors" className="hover:underline">
                Authors
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* 3) Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-2">Join Our Newsletter</h4>
          <p className="text-sm text-gray-600 mb-4">
            Get updates on new arrivals, bestsellers sales & more.
          </p>
          <form onSubmit={handleSubscribe} className="flex max-w-md">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

      {/* Social + Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <InstagramIcon className="w-5 h-5" />
            <GithubIcon className="w-5 h-5" />
            <XIcon className="w-5 h-5" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} BookBazaar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
