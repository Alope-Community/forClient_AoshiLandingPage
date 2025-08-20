import Navbar from "./components/Navbar";
import Footer from "./sections/Footer/Footer";

import Header from "./sections/Header/Header";
import ServiceSection from "./sections/Service/Service";
import FAQSection from "./sections/FAQ/FAQ";
import StepJoinSection from "./sections/StepJoin/StepJoin";
import WhyUsSection from "./sections/WhyUs/WhyUs";

export default function App() {
  return (
    <>
      <Navbar />

      <Header />

      <section className="mx-auto xl:px-0 lg:px-8 px-5 bg-gradient-to-r from-[#61b241] to-emerald-600 py-10">
        <div className="flex container mx-auto justify-between items-center">
          <p className="text-gray-100 lg:w-2/3 xl:w-1/2 w-full lg:text-left text-center">
            Populasi gamers di Indonesia diperkirakan mencapai <b>19 juta</b>{" "}
            orang pada tahun 2025. <br /> Jangan cuma jadi penonton, saatnya
            kamu ambil bagian dan cuan dari industri game yang terus tumbuh
            pesat!
          </p>
        </div>
      </section>

      <ServiceSection />

      <WhyUsSection />

      <StepJoinSection />

      <FAQSection />

      <section className="px-6 bg-gradient-to-r from-[#61b241] to-emerald-600 py-12 bg-fixed">
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Siap Gapai 100 Juta Pertama dari Game?
            </h2>
            <p className="text-gray-100">
              Klik tombol di <span className="lg:inline hidden">Samping</span>{" "}
              <span className="lg:hidden inline">Bawah</span> untuk daftar jadi
              Mitra Aoshi dan mulai bisnismu hari ini!
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

      <Footer />
    </>
  );
}
