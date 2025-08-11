export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/90 to-black/40 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center space-x-2 font-extrabold text-xl select-none"
          >
            <img
              src="./images/logo.jpeg"
              alt="Aothis Logo"
              className="w-12 rounded-full"
            />
            <span>Aoshi</span>
          </a>
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <a href="#produk" className="hover:text-red-600 transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="#tahapan" className="hover:text-red-600 transition">
                  Tahapan
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-red-600 transition">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-red-600 transition">
                  Harga
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-red-600 transition">
                  Kontak
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
