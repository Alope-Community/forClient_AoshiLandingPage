import { Tilt } from "react-tilt";
import HeaderServices from "./partials/services";
const defaultOptions = {
  reverse: false,
  max: 15, // max tilt rotation (degrees)
  perspective: 1000,
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,
  transition: true,
  axis: null,
  reset: false,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Header() {
  return (
    <header className="py-20 bg-gradient-to-b from-black via-[#61b241]/30 to-black relative lg:px-0 px-5">
      <div className="container relative pt-32 pb-20 mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        <div className="w-full md:w-3/5 space-y-6 md:order-1 order-2 md:text-left text-center">
          <p className="text-gray-100 text-2xl mb-0">
            Ingin punya penghasilan dari game?
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Saatnya jadi bagian dari <br />{" "}
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-5xl">
              Mitra Aoshi!
            </span>
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Bergabunglah sebagai mitra reseller kami bersama 1000+ orang yang
            bergabung.
          </p>
          <div className="flex space-x-4 md:justify-start justify-center">
            <a
              href="https://wa.me/6289638442070"
              target="_blank"
              className="bg-[#61b241] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#61b241]/90 transition duration-300"
            >
              Daftar Mitra Aoshi
            </a>
          </div>
        </div>

        <div className="md:w-2/5 md:order-2 order-1">
          <div className="md:block hidden">
            <Tilt options={defaultOptions}>
              <HeaderServices />
            </Tilt>
          </div>
          <div className="md:hidden block">
            <HeaderServices />
          </div>
        </div>
      </div>
    </header>
  );
}
