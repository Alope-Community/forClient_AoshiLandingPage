import { WhyChooseCard } from "../../components/Card";

export default function WhyUsSection() {
  return (
    <div>
      <section className="bg-gradient-to-tr from-black to-[#61b241]/40 px-6 shadow-lg py-20 relative ">
        <div className="container mx-auto text-center">
          <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3.5 py-2 rounded-full border border-[#61b241] text-sm font-semibold">
            Why Us?
          </span>
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-3 mt-5 text-center">
            Kenapa Harus Gabung{" "}
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-4xl">
              Mitra Aoshi?
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-300 mb-10">
            Simak keunggulan Kami dibawah Ini!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-5 gap-8">
            <WhyChooseCard
              title="Modal Murah"
              desc="Jualan jadi makin gampang karena kamu punya modal harga termurah!"
            />
            <WhyChooseCard
              title="Produk Super Lengkap"
              desc="Top up, joki, akun game, semua tersedia nonstop tanpa batas waktu!"
            />
            <WhyChooseCard
              title="Sistem Anti Ribet"
              desc="Cukup HP & internet, langsung bisa jalanin bisnis, kami siap bantu dari awal sampai cuan!"
            />
            <WhyChooseCard
              title="Layanan 24 Jam Nonstop"
              desc="Kami siap melayani kamu setiap hari tanpa henti! Fast respon , pelayanan ramah , dan selalu siap membantu kapan pun kamu butuh."
            />
            <WhyChooseCard
              title="Bisa Dimulai dari Nol"
              desc="Bisa mulai dari Rp0 dengan sistem dropship. Gak harus stok barang, tapi tetap bisa untung besar!"
            />
            <WhyChooseCard
              title="Sudah Dipercaya Ribuan Reseller Aktif"
              desc="Kamu gak sendiri, kami punya komunitas besar yang saling support dan tumbuh bareng!"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
