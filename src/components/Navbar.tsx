"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/90 to-black/40 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between py-4 xl:px-0 lg:px-8 px-5">
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
              <Link
                to="header"
                smooth={true}
                duration={500}
                className="hover:text-[#61b241] transition cursor-pointer"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="mitra"
                smooth={true}
                duration={500}
                className="hover:text-[#61b241] transition cursor-pointer"
              >
                Mulai Bisnis
              </Link>
            </li>
            <li>
              <Link
                to="stepJoin"
                smooth={true}
                duration={500}
                className="hover:text-[#61b241] transition cursor-pointer"
              >
                Tahapan Gabung
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className="hover:text-[#61b241] transition cursor-pointer"
              >
                FAQ
              </Link>
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
          <div className="md:hidden bg-gradient-to-t from-black/90 to-black/40 backdrop-blur-md border-t border-white/10 px-5">
            <ul className="flex flex-col space-y-4 py-6 text-sm font-medium container mx-auto">
              <li className="mb-5">
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#61b241] transition cursor-pointer"
                >
                  Beranda
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="mitra"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#61b241] transition cursor-pointer"
                >
                  Mulai Bisnis
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="stepJoin"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#61b241] transition cursor-pointer"
                >
                  Tahapan Gabung
                </Link>
              </li>
              <li className="mb-10">
                <Link
                  to="faq"
                  smooth={true}
                  duration={500}
                  className="hover:text-[#61b241] transition cursor-pointer"
                >
                  FAQ
                </Link>
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
