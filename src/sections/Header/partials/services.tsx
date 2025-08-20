import Button from "../../../components/Button";
import HeaderDots from "./dots";

export default function HeaderServices() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="flex space-x-1 bg-gradient-to-l from-[#61b241] to-emerald-600 p-5 text-xs font-semibold text-black">
        <HeaderDots />
      </div>
      <div className="px-4 py-6 space-y-5 backdrop-blur-lg bg-white/10 border border-[#47593d] rounded-b-xl shadow">
        <div className="grid grid-cols-3 gap-5">
          <img
            src="./images/header1.jpg"
            alt="Layanan Topup Aoshi"
            className="rounded-lg shadow-lg flex-1/3"
          />
          <img
            src="./images/header2.jpg"
            alt="Layanan Joki Aoshi"
            className="rounded-lg shadow-lg flex-1/3"
          />
          <img
            src="./images/header3.jpg"
            alt="Layanan Jubel Akun Aoshi"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center mb-2">
          <p className="text-gray-100 text-2xl font-bold">Layanan Kami</p>
          <p className="text-gray-300 mb-5">
            Top Up all game termurah 24 jam, Joki MLBB terpercaya & aman, serta
            jual akun bergaransi seumur hidup.
          </p>
          {/* <a
            href="#mitra"
            className="bg-[#61b241] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-[#61b241]/90 transition"
          >
            Lihat Semua
          </a> */}
          <Button text="Lihat Semua" href="#mitra" />
        </div>
      </div>
    </div>
  );
}
