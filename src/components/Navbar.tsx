export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/90 to-black/40 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
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
          <nav>
            <ul className="flex space-x-6 items-center text-sm font-medium">
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
                  Tahapan gabung
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6289638442070"
                  target="_blank"
                  className="bg-gradient-to-r from-[#61b241] to-emerald-600 hover:bg-gradient-to-l text-white px-6 py-2 rounded-full font-semibold hover:bg-red-[#61b241]/90 transition cursor-pointer"
                >
                  Gabung
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bg-gradient-to-r from-[#61b241]/0 via-[#61b241]/50 to-[#61b241]/0 absolute bottom-0 right-0 left-0 h-[3px]"></div>
      </nav>
    </div>
  );
}
