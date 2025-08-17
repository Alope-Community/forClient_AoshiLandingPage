import { Tilt } from "react-tilt";
import HeaderDots from "./partials/dots";
const defaultOptions = {
  reverse: false,
  max: 25, // max tilt rotation (degrees)
  perspective: 1000,
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
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
            Ingin punya penghasilan dari dunia game?
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
              Daftar Reseller
            </a>
          </div>
        </div>

        <div className="md:w-2/5 md:order-2 order-1">
          <div className="md:block hidden">
            <Tilt options={defaultOptions}>
              <div className="rounded-xl overflow-hidden">
                <div className="flex space-x-1 bg-gradient-to-l from-[#61b241] to-emerald-600 p-5 text-xs font-semibold text-black">
                  <HeaderDots />
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
                    <p className="text-gray-100 text-2xl font-bold">
                      Layanan Kami
                    </p>
                    <p className="text-gray-300 mb-5">
                      Top Up all game termurah 24 jam, Joki MLBB terpercaya &
                      aman, serta jual akun bergaransi seumur hidup.
                    </p>
                    <a
                      href="#mitra"
                      className="bg-[#61b241] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-[#61b241]/90 transition"
                    >
                      Lihat Semua
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="md:hidden block">
            <div className="rounded-xl overflow-hidden">
              <div className="flex space-x-1 bg-gradient-to-l from-[#61b241] to-emerald-600 p-5 text-xs font-semibold text-black">
                <HeaderDots />
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
                  <p className="text-gray-100 text-2xl font-bold">
                    Layanan Kami
                  </p>
                  <p className="text-gray-300 mb-5">
                    Top Up all game termurah 24 jam, Joki MLBB terpercaya &
                    aman, serta jual akun bergaransi seumur hidup.
                  </p>
                  <a
                    href="#mitra"
                    className="bg-[#61b241] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-[#61b241]/90 transition"
                  >
                    Lihat Semua
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
