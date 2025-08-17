import classNames from "classnames";
import { useState } from "react";

const faqs = [
  {
    question: "Berapa lama masa berlaku mitra Aoshi?",
    answer:
      "Seumur hidup! Cukup bayar 1 kali saja, kamu akan bergabung bersama kami selamanya, tanpa biaya tambahan apa pun lagi!",
  },
  // {
  //   question: "Apakah ada target penjualan bulanan?",
  //   answer:
  //     "Tidak ada! Kamu bebas jualan kapan saja tanpa tekanan target penjualan.",
  // },
  // {
  //   question: "Apakah Aoshi Market buka setiap hari?",
  //   answer:
  //     "Ya! Kami buka 24 jam nonstop setiap hari, siap melayani kamu dengan fast respon!",
  // },
  {
    question: "Berapa modal awal untuk mulai bisnis?",
    answer:
      "0 rupiah! Kamu bisa langsung mulai jualan tanpa keluar modal besar.",
  },
  // {
  //   question: "Produk apa saja yang bisa dijual?",
  //   answer:
  //     "Semua layanan Aoshi Market, termasuk top up all game, joki Mobile Legends, dan akun game",
  // },
  {
    question: "Apakah ada dukungan untuk Mitra baru?",
    answer:
      "Ada! Kami menyediakan bimbingan, panduan penjualan, dan tips marketing supaya kamu cepat cuan.",
  },
  // {
  //   question: "Paket apa saja yang Aoshi sediakan?",
  //   answer:
  //     "Kami menyediakan berbagai pilihan paket, yaitu Silver, Gold, dan VIP. Setiap paket punya keuntungan berbeda sesuai kebutuhan kamu!",
  // },
  // {
  //   question: "Apakah bisa upgrade paket setelah bergabung?",
  //   answer:
  //     "Bisa! Kamu bisa upgrade paket kapan saja dengan hanya membayar selisih harga paket. ",
  // },
  {
    question: "Apakah harga Mitra berbeda dengan harga publik?",
    answer:
      "Ya! Harga reseller lebih murah dibanding harga di publik, sehingga kamu bisa ambil untung lebih besar.",
  },
  // {
  //   question: "Apakah Aoshi Market menyediakan katalog produk?",
  //   answer:
  //     "Ya, kami menyediakan katalog update setiap hari berisi stok akun, harga top up, dan promo terbaru.",
  // },
  // {
  //   question: "Apakah ada promo khusus untuk Mitra ?",
  //   answer:
  //     "Ada! Kami rutin mengadakan promo & diskon spesial khusus Mitra Aoshi.",
  // },
  // {
  //   question: "Apakah bisa jualan tanpa stok sendiri?",
  //   answer:
  //     "Bisa banget! Kamu bisa dropship langsung dari Aoshi Market tanpa perlu simpan stok.",
  // },
  {
    question: "Berapa lama proses pendaftaran mitra?",
    answer:
      "Cepat banget! Hanya butuh beberapa menit s kamu langsung bisa mulai berjualan",
  },
  // {
  //   question: "Apakah pasti untung?",
  //   answer:
  //     "Tentu! Dengan modal yang sangat murah dari kami, kamu bebas menentukan harga jual sendiri, sehingga keuntungan bisa kamu atur sesuai target cuanmu",
  // },
  // {
  //   question: "Apakah ke depannya akan ada jasa baru?",
  //   answer:
  //     "Ya, tentu! Aoshi Market selalu berinovasi dengan menambah layanan dan produk baru sesuai tren game dan kebutuhan pasar, supaya mitra bisa terus dapat peluang cuan lebih besar.",
  // },
  // {
  //   question: "Jika ada jasa baru, apakah ada biaya tambahan?",
  //   answer:
  //     "Tidak ada!  Semua mitra Aoshi otomatis mendapatkan akses ke jasa atau produk baru tanpa biaya tambahan, jadi keuntungan kamu terus bertambah tanpa keluar modal lagi.",
  // },
  // {
  //   question: "Apakah sudah banyak mitra yang sukses?",
  //   answer:
  //     "Sangat banyak! Banyak mitra Aoshi yang sudah berhasil meraih penghasilan jutaan rupiah tiap bulan, bahkan ada yang menjadikannya sebagai sumber penghasilan utama.",
  // },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-bl from-black to-[#61b241]/30 px-6 shadow-lg py-20 relative"
    >
      <div className="container mx-auto grid grid-cols-2">
        <div>
          <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3.5 py-2 rounded-full border border-[#61b241] text-xs font-semibold">
            FAQs
          </span>
          <h2 className="text-4xl text-white font-bold mt-5">
            Apa yang Sering Ditanyakan <br />
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-5xl mt-2 block">
              Calon Mitra
            </span>
          </h2>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl flex flex-col gap-6 border-2 border-white/10 relative overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={classNames({
                "border-b border-gray-300/20": index + 1 != faqs.length,
              })}
            >
              <button
                className="w-full flex justify-between items-center py-4 text-left font-semibold"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="ml-2 text-[#61b241] font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
