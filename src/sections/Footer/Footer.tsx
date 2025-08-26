import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div>
      <footer className="relative bg-[repeating-radial-gradient(circle_at_center,rgba(97,178,65,0.1),rgba(97,178,65,0.1)_80px,transparent_200px,transparent_100px)]">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="sm:col-span-2">
            <h3 className="text-[#61b241] font-bold text-xl mb-3 select-none">
              Mitra Aoshi
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mitra Aoshi adalah platform reseller voucher game, joki & akun
              terpercaya yang menyediakan produk gaming lengkap untuk menunjang
              bisnis Anda. Tanpa modal kamu sudah bisa memulai bisnis !
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
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
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Kontak Kami
            </h4>
            <address className="not-italic text-gray-400 text-sm space-y-1">
              <p>Jl. Mayor Salim Batubara No 4, Kota Palembang</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6289638442070"
                  target="_blank"
                  className="text-[#61b241] hover:underline"
                >
                  +6289638442070
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Sosial Media
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/mitraaoshi"
                  target="_blank"
                  className="hover:text-[#61b241] transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Aoshi_market"
                  target="_blank"
                  className="hover:text-[#61b241] transition"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#61b241] text-center text-gray-300 text-xs py-6 select-none">
          © 2024 Aoshi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
