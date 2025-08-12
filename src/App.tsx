import { OurServiceCard, WhyChooseCard } from "./components/Card";
import Navbar from "./components/Navbar";
import FAQAccordion from "./sections/FAQ";

export default function App() {
  return (
    <>
      <Navbar />

      {/* <header className="min-h-screen bg-[repeating-radial-gradient(circle_at_center,rgba(97,178,65,0.1),rgba(97,178,65,0.1)_20px,transparent_200px,transparent_100px)]"> */}
      <header className="py-20 bg-gradient-to-b from-black via-[#61b241]/30 to-black relative">
        <div className="container relative pt-32 pb-20 mx-auto px-6 flex flex-col md:flex-row items-center gap-12 w-full p-8">
          <div className="md:w-3/5 space-y-6">
            <p className="text-gray-100 text-2xl mb-0">
              Ingin punya penghasilan dari dunia game?
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Saatnya jadi bagian dari <br />{" "}
              <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-5xl">
                Mitra Aoshi!
              </span>
            </h1>
            <p className="text-gray-200 max-w-md text-lg leading-relaxed">
              Bergabunglah sebagai mitra reseller kami bersama 1000+ orang yang
              bergabung.
            </p>
            <div className="flex space-x-4">
              <a
                href="#produk"
                className="bg-[#61b241] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#61b241]/90 transition duration-300"
              >
                Daftar Reseller
              </a>
            </div>
          </div>

          <div className="md:w-2/5 rounded-xl overflow-hidden">
            <div className="flex space-x-1 bg-gradient-to-l from-[#61b241] to-emerald-600 p-5 text-xs font-semibold text-black">
              <div className="rounded-full w-3 h-3 bg-white"></div>
              <div className="rounded-full w-3 h-3 bg-white"></div>
              <div className="rounded-full w-3 h-3 bg-white"></div>
            </div>
            <div className="px-4 py-6 space-y-5 backdrop-blur-lg bg-white/10 border border-[#47593d] rounded-b-xl shadow">
              <div className="grid grid-cols-3 gap-5">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3d26d692-b535-4044-8bab-a7e6dccb2d7e.png"
                  alt="Cover art of Free Fire game with bright and action-packed illustration"
                  className="rounded-lg shadow-lg flex-1/3"
                />
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1007f0b-fd2b-45ec-834c-2b6b00a10138.png"
                  alt="Cover art of Honor of Kings game featuring a female warrior in fantasy setting"
                  className="rounded-lg shadow-lg flex-1/3"
                />
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69c2ddfb-f9f4-4af0-9ed5-fd9236f2629a.png"
                  alt="Cover art of Free Fire game with survival and combat theme characters"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-100 text-2xl font-bold">Service Kami</p>
                <p className="text-gray-300 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, officiis. Temporibus, assumenda nam asperiores,
                </p>
                <button className="bg-[#61b241] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-[#61b241]/90 transition">
                  Lihat Semua
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto px-6 bg-gradient-to-r from-[#61b241] to-emerald-600 py-10">
        <div className="flex container mx-auto justify-between items-center">
          <p className="text-gray-100 w-1/2">
            Populasi gamers di Indonesia diperkirakan mencapai <b>19 juta</b>{" "}
            orang pada tahun 2025. <br /> Jangan cuma jadi penonton — saatnya
            kamu ambil bagian dan cuan dari industri game yang terus tumbuh
            pesat!
          </p>
          {/* <a className="hover:bg-gradient-to-l rounded-full bg-gradient-to-r from-white/70 to-gray-200/70 px-8 py-3 text-61b241 font-semibold text-gray-700">
            Gabung Aoshi
          </a> */}
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-black via-[#61b241]/20 to-black relative"> */}
      <section className="py-20 bg-gradient-to-br from-black to-[#61b241]/40 relative">
        <div className="container mx-auto">
          <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3 py-2 rounded-full border border-[#61b241] text-sm font-semibold">
            Mitra Aoshi
          </span>
          <h3 className="text-4xl mt-5">
            Membuka peluang untuk kamu yang ingin{" "}
            <span className="block bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-4xl">
              Memulai Bisnis!
            </span>
          </h3>

          <div className="grid grid-cols-3 gap-10 mt-10">
            <OurServiceCard
              title="Top Up All Games Termurah"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero minus nemo corrupti nisi consequatur ab Libero minus nemo corrupti nisi consequatur ab."
            />
            <OurServiceCard
              title="Joki MLBB Terpercaya"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero minus nemo corrupti nisi consequatur ab Libero minus nemo corrupti nisi consequatur ab."
            />
            <OurServiceCard
              title="Jual Akun Game"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero minus nemo corrupti nisi consequatur ab Libero minus nemo corrupti nisi consequatur ab."
            />
          </div>
        </div>
      </section>

      {/*  */}

      {/* <section className="bg-gradient-to-tr from-black via-[#61b241]/30 to-black px-6 shadow-lg py-20 relative"> */}
      <section className="bg-gradient-to-tr from-black to-[#61b241]/40 px-6 shadow-lg py-20 relative ">
        <div className="container mx-auto text-center">
          {/* <div className="bg-gradient-to-bl from-[#61b241]/30 via-[#61b241]/0 to-[#61b241]/0 absolute top-0 right-0 size-56 z-10"></div> */}

          <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3.5 py-2 rounded-full border border-[#61b241] text-sm font-semibold">
            Why Us?
          </span>
          <h2 className="text-4xl text-white font-bold mb-3 mt-5 text-center">
            Kenapa Harus Gabung{" "}
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-4xl">
              Mitra Aoshi?
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            debitis voluptatum quo earum ad autem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aut, veniam!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WhyChooseCard
              title="Modal Murah"
              desc="Jualan jadi makin gampang karena kamu punya modal harga termurah!"
            />
            <WhyChooseCard
              title="Produk Super Lengkap"
              desc="Top up, joki, akun game — semua tersedia nonstop tanpa batas waktu!"
            />
            <WhyChooseCard
              title="Sistem Anti Ribet"
              desc="Cukup HP & internet, langsung bisa jalanin bisnis — kami siap bantu dari awal sampai cuan!"
            />
            <WhyChooseCard
              title="Layanan 24 Jam"
              desc="Bisa mulai dari Rp0 dengan sistem dropship. Gak harus stok barang, tapi tetap bisa untung besar!"
            />
            <WhyChooseCard
              title="Bisa Dimulai dari Nol"
              desc="Bisa mulai dari Rp0 dengan sistem dropship. Gak harus stok barang, tapi tetap bisa untung besar!"
            />
            <WhyChooseCard
              title="Sudah Terpercaya"
              desc="Kamu gak sendiri — kami punya komunitas besar yang saling support dan tumbuh bareng!"
            />
          </div>
        </div>
      </section>

      <FAQAccordion />

      <section className="bg-gradient-to-tl from-black to-[#61b241]/30 px-6 shadow-lg py-20 relative text-center">
        {/* <section className="bg-gradient-to-tl from-black via-[#61b241]/30 to-black px-6 shadow-lg py-20 relative"> */}
        <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3.5 py-2 rounded-full border border-[#61b241] text-xs font-semibold">
          Lets Join
        </span>
        <div>
          <h2 className="text-4xl text-white font-bold mb-3 mt-5 text-center">
            Tahapan Bergabung dengan{" "}
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-4xl">
              Mitra Aoshi!
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            debitis voluptatum quo earum ad autem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aut, veniam!
          </p>
        </div>
        <div className="container relative mx-auto">
          <div className="grid grid-cols-10 xl:grid-cols-11 gap-y-8">
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 p-10 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px]">
              <h2 className="text-xl font-semibold -my-2">Step 1</h2>
              <p className="text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                non distinctio,
              </p>
              <div className="absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 -right-[93px]">
                <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
                  1
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 p-10 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] xl:col-start-7">
              <h2 className="text-xl font-semibold -my-2">Step 2</h2>
              <p className="text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                non distinctio,
              </p>
              <div className="absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 -left-[93px]">
                <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
                  2
                </div>
              </div>
            </div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 p-10 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px]">
              <h2 className="text-xl font-semibold -my-2">Step 3</h2>
              <p className="text-white/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                non distinctio,
              </p>
              <div className="absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 -right-[93px]">
                <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
                  3
                </div>
              </div>
            </div>
          </div>
          <div className="w-px h-full bg-white/20 absolute inset-y-0 right-1/2 -z-10 hidden xl:block"></div>
        </div>
      </section>

      <section className="px-6 bg-gradient-to-r from-[#61b241] to-emerald-600 py-12 bg-fixed">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Siap Gapai 100 Juta Pertama dari Game?
            </h2>
            <p className="text-gray-100">
              Klik tombol di Samping untuk daftar jadi Mitra Aoshi dan mulai
              bisnismu hari ini!
            </p>
          </div>
          <div>
            <a
              href=""
              className="bg-white shadow px-10 py-4 rounded-full text-[#1d5308] font-semibold"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      <footer className="relative bg-[repeating-radial-gradient(circle_at_center,rgba(97,178,65,0.1),rgba(97,178,65,0.1)_80px,transparent_200px,transparent_100px)]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-[#61b241] font-bold text-xl mb-3 select-none">
              Aoshi
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aoshi adalah platform reseller voucher game terpercaya yang
              menyediakan website siap pakai dan produk gaming lengkap untuk
              menunjang bisnis Anda.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#produk" className="hover:text-[#61b241] transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="#tahapan" className="hover:text-[#61b241] transition">
                  Tahapan
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-[#61b241] transition">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-[#61b241] transition">
                  Harga
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#61b241] transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Kontak Kami
            </h4>
            <address className="not-italic text-gray-400 text-sm space-y-1">
              <p>Jl. Reseller No. 123, Jakarta Selatan</p>
              <p>Email: contact@aoshi.com</p>
              <p>Phone: +62 812 3456 7890</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6281234567890"
                  className="text-[#61b241] hover:underline"
                >
                  +62 812 3456 7890
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
                <a href="#" className="hover:text-red-600 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#61b241] text-center text-gray-300 text-xs py-6 select-none">
          © 2024 Aoshi. All rights reserved.
        </div>

        {/* <div className="bg-gradient-to-tl from-[#61b241]/70 via-[#61b241]/0 to-[#61b241]/0 absolute bottom-0 right-0 size-56 z-10"></div> */}
      </footer>
      {/* <footer className="relative bg-[repeating-radial-gradient(circle_at_center,rgba(97,178,65,0.1),rgba(97,178,65,0.1)_80px,transparent_200px,transparent_100px)]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-[#61b241] font-bold text-xl mb-3 select-none">
              Aoshi
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aoshi adalah platform reseller voucher game terpercaya yang
              menyediakan website siap pakai dan produk gaming lengkap untuk
              menunjang bisnis Anda.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#produk" className="hover:text-[#61b241] transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="#tahapan" className="hover:text-[#61b241] transition">
                  Tahapan
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-[#61b241] transition">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-[#61b241] transition">
                  Harga
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#61b241] transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Kontak Kami
            </h4>
            <address className="not-italic text-gray-400 text-sm space-y-1">
              <p>Jl. Reseller No. 123, Jakarta Selatan</p>
              <p>Email: contact@aoshi.com</p>
              <p>Phone: +62 812 3456 7890</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6281234567890"
                  className="text-[#61b241] hover:underline"
                >
                  +62 812 3456 7890
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
                <a href="#" className="hover:text-red-600 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#61b241] text-center text-gray-300 text-xs py-6 select-none">
          © 2024 Aoshi. All rights reserved.
        </div>

        <div className="bg-gradient-to-tl from-[#61b241]/70 via-[#61b241]/0 to-[#61b241]/0 absolute bottom-0 right-0 size-56 z-10"></div>
      </footer> */}
    </>
  );
}
