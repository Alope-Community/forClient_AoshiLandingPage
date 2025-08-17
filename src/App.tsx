import { Dumbbell, Gem, ShoppingBasket } from "lucide-react";
import Badge from "./components/Badge";
import { OurServiceCard, WhyChooseCard } from "./components/Card";
import Navbar from "./components/Navbar";
import FAQAccordion from "./sections/FAQ";

import Header from "./sections/Header/Header";

export default function App() {
  return (
    <>
      <Navbar />

      {/* <header className="min-h-screen bg-[repeating-radial-gradient(circle_at_center,rgba(97,178,65,0.1),rgba(97,178,65,0.1)_20px,transparent_200px,transparent_100px)]"> */}

      <Header />

      <section className="mx-auto px-6 bg-gradient-to-r from-[#61b241] to-emerald-600 py-10">
        <div className="flex container mx-auto justify-between items-center">
          <p className="text-gray-100 md:w-1/2 w-full md:text-left text-center">
            Populasi gamers di Indonesia diperkirakan mencapai <b>19 juta</b>{" "}
            orang pada tahun 2025. <br /> Jangan cuma jadi penonton, saatnya
            kamu ambil bagian dan cuan dari industri game yang terus tumbuh
            pesat!
          </p>
          {/* <a className="hover:bg-gradient-to-l rounded-full bg-gradient-to-r from-white/70 to-gray-200/70 px-8 py-3 text-61b241 font-semibold text-gray-700">
            Gabung Aoshi
          </a> */}
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-black via-[#61b241]/20 to-black relative"> */}
      <section
        id="mitra"
        className="py-20 bg-gradient-to-br from-black to-[#61b241]/40 relative lg:px-0 px-5"
      >
        <div className="container mx-auto md:text-left text-center">
          <Badge text="Mitra Aoshi" />
          <h3 className="text-4xl mt-5 md:text-left text-center">
            Membuka peluang untuk kamu yang ingin{" "}
            <span className="block bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-4xl">
              Memulai Bisnis!
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10 mt-10 text-left">
            <OurServiceCard
              icon={<Gem />}
              title="Top Up All Games Termurah"
              desc="Kami menyediakan jasa top up modal termurah Seindonesia. Buka 24 jam nonstop. Proses super kilat, kurang dari 1 detik"
            />
            <OurServiceCard
              icon={<Dumbbell />}
              title="Joki MLBB Terpercaya"
              desc="Tingkatkan rank Mobile Legends kamu dengan cepat dan aman bersama tim joki profesional. 100% aman, rahasia terjaga, dan harga terjangkau!"
            />
            <OurServiceCard
              icon={<ShoppingBasket />}
              title="Jual Akun Game"
              desc="Kami menyediakan akun termurah yang bisa kalian jual kembali dengan margin tinggi hingga 100%. Semua akun bergaransi seumur hidup. Akun terjamin anti hackback"
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
            Simak keunggulan Kami dibawah Ini!
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
              desc="Kami siap melayani kamu setiap hari tanpa henti! Fast respon , pelayanan ramah , dan selalu siap membantu kapan pun kamu butuh."
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

      <section
        id="stepJoin"
        className="bg-gradient-to-tl from-black to-[#61b241]/30 px-6 shadow-lg py-20 relative text-center"
      >
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
            Berikut cara bergabung Reseller Aoshi!
          </p>
        </div>
        <div className="container relative mx-auto">
          <div className="grid grid-cols-10 xl:grid-cols-11 gap-y-8">
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 p-10 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] text-left">
              <h2 className="text-xl font-semibold -my-2">
                Klik Bergabung & hubungi admin via WhatsApp
              </h2>
              <p className="text-white/50">
                Tekan tombol “Bergabung” lalu langsung terhubung dengan admin
                melalui WhatsApp untuk memulai proses.
              </p>
              <div className="absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 -right-[93px]">
                <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
                  1
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 p-10 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] xl:col-start-7 text-left">
              <h2 className="text-xl font-semibold -my-2">
                Konsultasi dengan admin
              </h2>
              <p className="text-white/50">
                Sampaikan pertanyaan atau kebutuhanmu, admin akan membantu
                memberikan solusi dan informasi yang jelas.
              </p>
              <div className="absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 -left-[93px]">
                <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
                  2
                </div>
              </div>
            </div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 p-10 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] text-left">
              <h2 className="text-xl font-semibold -my-2">
                Lakukan pendaftaran
              </h2>
              <p className="text-white/50">
                Lengkapi data pendaftaran sesuai instruksi admin agar akunmu
                bisa segera aktif.
              </p>
              <div className="absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 -right-[93px]">
                <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
                  3
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 p-10 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] xl:col-start-7 text-left">
              <h2 className="text-xl font-semibold -my-2">
                Selamat! Kamu bisa mulai bisnis modal 0 rupiah
              </h2>
              <p className="text-white/50">
                Setelah pendaftaran selesai, kamu sudah resmi bergabung dan siap
                menjalankan bisnis tanpa modal.
              </p>
              <div className="absolute hidden top-0 border border-white/20 p-1.5 bg-white/10 rounded-full xl:flex items-center justify-center z-20 -left-[93px]">
                <div className="h-14 w-14 flex items-center justify-center bg-[#61b241] rounded-full">
                  4
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
              href="https://wa.me/6289638442070"
              target="_blank"
              className="bg-white shadow px-10 py-4 rounded-full text-[#1d5308] font-semibold"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      <footer className="relative bg-[repeating-radial-gradient(circle_at_center,rgba(97,178,65,0.1),rgba(97,178,65,0.1)_80px,transparent_200px,transparent_100px)]">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-[#61b241] font-bold text-xl mb-3 select-none">
              Mitra Aoshi
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mitra Aoshi adalah platform reseller voucher game,joki & akun
              terpercaya yang menyediakan produk gaming lengkap untuk menunjang
              bisnis Anda. Tanpa modal kamu sudah bisa memulai bisnis !
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
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
    </>
  );
}
