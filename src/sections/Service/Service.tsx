import { Dumbbell, Gem, ShoppingBasket } from "lucide-react";
import Badge from "../../components/Badge";
import { OurServiceCard } from "../../components/Card";

export default function ServiceSection() {
  return (
    <section
      id="mitra"
      className="py-20 bg-gradient-to-br from-black to-[#61b241]/40 relative xl:px-0 lg:px-8 px-5"
    >
      <div className="container mx-auto md:text-left text-center">
        <Badge text="Mitra Aoshi" />
        <h3 className="text-3xl sm:text-4xl mt-5 md:text-left text-center font-bold">
          Membuka peluang untuk kamu yang ingin{" "}
          <span className="sm:block bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-4xl">
            Memulai Bisnis!
          </span>
        </h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-10 sm:gap-5 gap-7 mt-10 text-left">
          <OurServiceCard
            icon={<Gem />}
            title="Top Up All Games Termurah"
            desc="Kami menyediakan jasa top up modal termurah Seindonesia. Buka 24 jam nonstop. Proses super kilat, kurang dari 1 detik"
          />
          <OurServiceCard
            icon={<Dumbbell />}
            title="Joki MLBB Terpercaya"
            desc="Kami menyediakan jasa joki mobile legends termurah Seindonesia Buka 24 jam nonstop Proses joki dikerjakan oleh pro player dan penjoki profesional dengan pengalaman lebih dari 5 tahun Garansi Full Winstreak"
          />
          <OurServiceCard
            customClass="lg:col-span-1 md:col-span-2 col-span-1"
            icon={<ShoppingBasket />}
            title="Jual Akun Game"
            desc="Kami menyediakan akun termurah yang bisa kalian jual kembali dengan margin tinggi hingga 100%. Tersedia akun MLBB, FF, PUBGM, ROBLOX, EFOOTBALL & game populer lainnya. Buka 24 jam nonstop. Semua akun bergaransi seumur hidup. Akun terjamin anti hackback"
          />
        </div>
      </div>
    </section>
  );
}
