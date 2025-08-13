import classNames from "classnames";
import { useState } from "react";

const faqs = [
  {
    question: "Apa itu layanan kami?",
    answer:
      "Kami menyediakan solusi digital yang memudahkan bisnis Anda berkembang.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer: "Biasanya antara 3-7 hari kerja, tergantung kompleksitas proyek.",
  },
  {
    question: "Apakah ada garansi?",
    answer: "Ya, kami memberikan garansi revisi sesuai ketentuan yang berlaku.",
  },
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
            <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-4xl mt-2 block">
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
