import StepCount from "./partials/count";

export default function StepJoinSection() {
  return (
    <div>
      <section
        id="stepJoin"
        className="bg-gradient-to-bl from-black to-[#61b241]/30 px-6 shadow-lg py-20 relative text-center"
      >
        <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3.5 py-2 rounded-full border border-[#61b241] text-xs font-semibold">
          Lets Join
        </span>
        <div>
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-3 mt-5 text-center">
            Tahapan Bergabung dengan{" "}
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-4xl">
              Mitra Aoshi!
            </span>
          </h2>
          <p className="mx-auto text-center text-gray-300 mb-10">
            Berikut cara bergabung Mitra Aoshi
          </p>
        </div>
        <div className="container relative mx-auto max-w-7xl">
          <div className="grid grid-cols-10 xl:grid-cols-11 md:gap-y-8 gap-y-5">
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 lg:px-10 px-6 lg:py-10 py-8 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] text-left">
              <h2 className="text-xl font-semibold -my-2">
                Klik Bergabung & hubungi admin via WhatsApp
              </h2>
              <p className="text-white/50">
                Tekan tombol{" "}
                <a
                  href="https://wa.me/6289638442070"
                  target="_blank"
                  className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent hover:from-emerald-600 hover:to-[#61b241] transition duration-300 mx-1 font-bold"
                >
                  Bergabung
                </a>
                lalu langsung terhubung dengan admin melalui WhatsApp untuk
                memulai proses.
              </p>
              <StepCount customClass="-right-[93px]" text="1" />
            </div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 lg:px-10 px-6 lg:py-10 py-8 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] xl:col-start-7 text-left">
              <h2 className="text-xl font-semibold -my-2">
                Konsultasi dengan admin
              </h2>
              <p className="text-white/50">
                Sampaikan pertanyaan atau kebutuhanmu, admin akan membantu
                memberikan solusi dan informasi yang jelas.
              </p>
              <StepCount customClass="-left-[93px]" text="2" />
            </div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 lg:px-10 px-6 lg:py-10 py-8 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] text-left">
              <h2 className="text-xl font-semibold -my-2">
                Lakukan pendaftaran
              </h2>
              <p className="text-white/50">
                Lengkapi data pendaftaran sesuai instruksi admin agar akunmu
                bisa segera aktif.
              </p>
              <StepCount customClass="-right-[93px]" text="3" />
            </div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="xl:col-span-2 hidden xl:block"></div>
            <div className="relative col-span-10 xl:col-span-5 rounded-3xl border border-white/10 lg:px-10 px-6 lg:py-10 py-8 bg-white/5 flex flex-col gap-6 backdrop-blur-[32px] xl:col-start-7 text-left">
              <h2 className="text-xl font-semibold -my-2">
                Selamat! Kamu bisa mulai bisnis modal 0 rupiah
              </h2>
              <p className="text-white/50">
                Setelah pendaftaran selesai, kamu sudah resmi bergabung dan siap
                menjalankan bisnis tanpa modal.
              </p>
              <StepCount customClass="-left-[93px]" text="4" />
            </div>
          </div>

          <div className="w-px h-full bg-white/20 absolute inset-y-0 right-1/2 -z-10 hidden xl:block"></div>
        </div>
      </section>
    </div>
  );
}
