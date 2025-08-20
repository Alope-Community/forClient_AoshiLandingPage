"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/90 to-black/40 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 font-extrabold text-xl select-none"
          >
            <img
              src="./images/whiteLogo.png"
              alt="Aothis Logo"
              className="w-12 rounded-full"
            />
            <span>Mitra Aoshi</span>
          </a>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-6 items-center text-sm font-medium">
            <li>
              <a href="#" className="hover:text-[#61b241] transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#mitra" className="hover:text-[#61b241] transition">
                Mulai Bisnis
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#61b241] transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#stepJoin" className="hover:text-[#61b241] transition">
                Tahapan Gabung
              </a>
            </li>
            <li>
              <Button text="Gabung" href="https://wa.me/6289638442070" />
            </li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white focus:outline-none cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-t from-black/90 to-black/40 backdrop-blur-md border-t border-white/10">
            <ul className="flex flex-col space-y-4 py-6 text-sm font-medium container mx-auto">
              <li className="mb-5">
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#61b241] transition"
                >
                  Beranda
                </a>
              </li>
              <li className="mb-5">
                <a
                  href="#mitra"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#61b241] transition"
                >
                  Mulai Bisnis
                </a>
              </li>
              <li className="mb-5">
                <a
                  href="#faq"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#61b241] transition"
                >
                  FAQ
                </a>
              </li>
              <li className="mb-10">
                <a
                  href="#stepJoin"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#61b241] transition"
                >
                  Tahapan Gabung
                </a>
              </li>
              <li>
                <Button text="Gabung" href="https://wa.me/6289638442070" />
              </li>
            </ul>
          </div>
        )}

        {/* Bottom Gradient Line */}
        <div className="bg-gradient-to-r from-[#61b241]/0 via-[#61b241]/50 to-[#61b241]/0 absolute bottom-0 right-0 left-0 h-[3px]"></div>
      </nav>
    </div>
  );
}
