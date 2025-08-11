import Card from "./components/Card";

export default function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/90 to-black/40 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center space-x-2 font-extrabold text-xl select-none"
          >
            <img
              src="./images/logo.jpeg"
              alt="Aothis Logo"
              className="w-12 rounded-full"
            />
            <span>Aoshi</span>
          </a>
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <a href="#produk" className="hover:text-red-600 transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="#tahapan" className="hover:text-red-600 transition">
                  Tahapan
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-red-600 transition">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-red-600 transition">
                  Harga
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-red-600 transition">
                  Kontak
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="min-h-screen bg-[repeating-radial-gradient(circle_at_center,rgba(97,178,65,0.1),rgba(97,178,65,0.1)_70px,transparent_150px,transparent_100px)]">
        <div className="container relative pt-32 pb-20 mx-auto px-6 flex flex-col md:flex-row items-center gap-12 w-full p-8">
          <div className="md:w-3/5 space-y-6">
            <p className="text-gray-100 text-2xl mb-0">
              Ingin punya penghasilan dari dunia game?
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Saatnya jadi bagian dari <br />{" "}
              <span className="bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-5xl">
                Mitra Aoshi!
              </span>
            </h1>
            <p className="text-gray-200 max-w-md text-lg leading-relaxed">
              Bergabunglah sebagai mitra reseller kami bersama 1000+ orang yang
              bergabung.
            </p>
            <div className="flex space-x-4">
              <a
                href="#produk"
                className="bg-[#61b241] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#61b241]/90 transition duration-300"
              >
                Daftar Reseller
              </a>
            </div>
          </div>

          <div className="md:w-2/5 rounded-xl overflow-hidden">
            <div className="flex space-x-1 bg-[#61b241] p-5 text-xs font-semibold text-black">
              <div className="rounded-full w-3 h-3 bg-white"></div>
              <div className="rounded-full w-3 h-3 bg-white"></div>
              <div className="rounded-full w-3 h-3 bg-white"></div>
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
                <p className="text-gray-100 text-2xl font-bold">Service Kami</p>
                <p className="text-gray-300 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, officiis. Temporibus, assumenda nam asperiores,
                </p>
                <button className="bg-[#61b241] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-[#61b241]/90 transition">
                  Lihat Semua
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20">
        <span className="bg-gradient-to-r from-[#61b241]/30 to-emerald-600/30 px-3 py-2 rounded-full border border-[#61b241] text-sm font-semibold">
          Mitra Aoshi
        </span>
        <h3 className="text-4xl mt-5">
          Membuka peluang untuk kamu yang ingin{" "}
          <span className="block bg-gradient-to-r from-[#61b241] to-emerald-600 bg-clip-text text-transparent font-extrabold text-4xl">
            Memulai Bisnis!
          </span>
        </h3>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section id="produk" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Katalog Produk
        </h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-4">
          Temukan produk voucher gaming terlengkap dengan harga yang bersaing di
          katalog kami yang mudah diakses.
        </p>
        <div className="flex justify-center mb-8 space-x-6">
          <button className="px-6 py-2 rounded-full bg-red-600 text-black font-semibold hover:bg-red-700 transition focus:outline-none">
            Semua
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-700 hover:border-red-600 text-gray-300 hover:text-red-600 font-semibold transition focus:outline-none">
            Mobile Legends
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-700 hover:border-red-600 text-gray-300 hover:text-red-600 font-semibold transition focus:outline-none">
            Free Fire
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4616d97-996f-4daf-a044-f1717f3f3113.png"
              alt="Product card showing mobile game character in fiery battle scene for Mobile Legends Bang Bang"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              Mobile Legends
            </div>
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c55228b6-3d15-48ed-b8f9-09ab1b58720e.png"
              alt="Vibrant artwork of Free Fire battle royale game with armed characters in dynamic poses"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              Free Fire
            </div>
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e20564b4-8e64-4400-85cb-07dc9248dac2.png"
              alt="Epic fantasy game art showing warriors in combat for League of Legends"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              League of Legends
            </div>
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bac7bc34-b7a3-403a-b331-12a56d28fadf.png"
              alt="Character aiming in realistic modern combat game PUBG Mobile cover image with soldier helmet"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              PUBG Mobile
            </div>
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03015ff6-6ca9-44d1-98e4-8370b24fad06.png"
              alt="Beautiful anime style avatar of Novarose game with detailed blue and white themed hair and outfit"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              Novarose
            </div>
          </article>

          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d30ed03e-e8c2-499e-ac7d-10d1d5ee2952.png"
              alt="Cute anime style girl with pink hair character art representing Genshin Impact"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              Genshin Impact
            </div>
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex items-center justify-center transform hover:scale-105 transition duration-300 cursor-pointer bg-black">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f01feeb2-2972-4dae-a6ba-a68aeb337097.png"
              alt="Simple and striking red Valkyrie symbol logo with black background of Valorant game"
              className="object-contain"
            />
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d2e8591-c6a8-474d-9a35-46f7e204fa8c.png"
              alt="Blue-themed champion heroes illustration from League of Legends Wild Rift game"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              League of Legends Wild Rift
            </div>
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b444fb3-c1b1-4cad-ba96-cae2f4913eef.png"
              alt="Shadowy military tactical image representing Arma Breakout game"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              Arma Breakout
            </div>
          </article>
          <article className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b3023b3-1f06-4c38-b2a5-55f3a8740c41.png"
              alt="Call of Duty game cover showing soldier in combat gear with smoky war background"
              className="w-full object-cover"
            />
            <div className="p-3 text-center font-semibold text-white">
              Call of Duty
            </div>
          </article>
        </div>

        <div className="text-center mt-10">
          <a
            href="#kontak"
            className="inline-block bg-red-600 px-6 py-3 rounded-md font-semibold text-black hover:bg-red-700 transition"
          >
            Lihat Semua Produk
          </a>
        </div>
      </section>

      <section
        id="tahapan"
        className="bg-gradient-to-tr from-black via-gray-900 to-black py-16 px-6 max-w-7xl mx-auto rounded-lg shadow-lg mt-16 mb-24"
      >
        <h2 className="text-3xl text-white font-bold mb-10 text-center">
          Tahapan Anda Untuk <span className="text-red-600">Jadi Reseller</span>
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-400 mb-10">
          Tahapan mudah dan cepat yang bisa anda lakukan untuk menjadi reseller
          voucher game bersama Mitra Gamers dan mulai meraih keuntungan dari
          penjualan produk kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <article className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-md space-y-4">
            <div className="bg-red-600 rounded-full p-3 text-white font-bold text-xl select-none">
              1
            </div>
            <h3 className="font-semibold text-lg text-white">
              Daftar Akun Mitra
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Isi formulir pendaftaran dan dapatkan akun mitra resmi Mitra
              Gamers yang siap digunakan untuk berjualan.
            </p>
          </article>
          <article className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-md space-y-4">
            <div className="bg-red-600 rounded-full p-3 text-white font-bold text-xl select-none">
              2
            </div>
            <h3 className="font-semibold text-lg text-white">
              Deposit Saldo Mitra Gamers
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Isi saldo melalui berbagai metode pembayaran untuk memulai
              pembelian produk voucher di website reseller.
            </p>
          </article>
          <article className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-md space-y-4">
            <div className="bg-red-600 rounded-full p-3 text-white font-bold text-xl select-none">
              3
            </div>
            <h3 className="font-semibold text-lg text-white">
              Mulai Berjualan
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Mulai promosikan produk dan layanan kami, raih keuntungan dari
              setiap transaksi yang berhasil Anda lakukan.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 rounded-xl shadow-xl p-6 mb-10">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b28c316e-a81d-428d-bce7-a1ee92b04510.png"
            alt="Screenshot of Mitra Gamers reseller website dashboard featuring game voucher products and statistics"
            className="rounded-lg mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 max-w-xl mx-auto text-white">
          Mau Jadi Reseller Voucher Game Yang Lebih Besar? Kami Siapkan
          Websitenya
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Dengan website reseller profesional dan siap pakai dari Mitra Gamers,
          Anda bisa kelola penjualan dengan mudah dan tampilkan produk terbaru
          untuk pelanggan.
        </p>
        <a
          href="#kontak"
          className="inline-block bg-red-600 text-black font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Dapatkan Website
        </a>
      </section>

      <section id="fitur" className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Fitur Keunggulan Yang Kami Berikan
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-400 mb-10">
          Kami menyediakan berbagai fitur lengkap untuk mendukung reseller
          mendapatkan kemudahan dan performa penjualan maksimal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <article className="bg-gray-900 p-6 rounded-lg shadow-lg text-center space-y-3 hover:shadow-red-600 transition">
            <div className="text-red-600 text-5xl select-none">✔</div>
            <h3 className="font-semibold text-lg text-white">
              Transaksi Otomatis
            </h3>
            <p className="text-gray-400 text-sm">
              Sistem transaksi cepat dan otomatis memudahkan proses pembelian
              voucher tanpa delay.
            </p>
          </article>

          <article className="bg-gray-900 p-6 rounded-lg shadow-lg text-center space-y-3 hover:shadow-red-600 transition">
            <div className="text-red-600 text-5xl select-none">🛒</div>
            <h3 className="font-semibold text-lg text-white">
              Manajemen Persediaan Lengkap
            </h3>
            <p className="text-gray-400 text-sm">
              Kelola stok voucher dan produk dengan sistem yang terintegrasi
              secara real-time.
            </p>
          </article>

          <article className="bg-gray-900 p-6 rounded-lg shadow-lg text-center space-y-3 hover:shadow-red-600 transition">
            <div className="text-red-600 text-5xl select-none">📄</div>
            <h3 className="font-semibold text-lg text-white">
              Laporan Penjualan Otomatis
            </h3>
            <p className="text-gray-400 text-sm">
              Dapatkan laporan lengkap dan update setiap transaksi untuk
              memudahkan analisa penjualan Anda.
            </p>
          </article>

          <article className="bg-gray-900 p-6 rounded-lg shadow-lg text-center space-y-3 hover:shadow-red-600 transition">
            <div className="text-red-600 text-5xl select-none">📊</div>
            <h3 className="font-semibold text-lg text-white">Admin Panel</h3>
            <p className="text-gray-400 text-sm">
              Panel admin yang mudah digunakan untuk mengelola user, produk, dan
              konfigurasi penjualan.
            </p>
          </article>
        </div>
        <div className="text-center mt-14">
          <a
            href="#harga"
            className="inline-block bg-red-600 px-8 py-3 rounded-md font-semibold text-black hover:bg-red-700 transition"
          >
            Lihat Harga Paket
          </a>
        </div>
      </section>

      <section id="harga" className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Harga Berlangganan Website
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-center mb-10">
          Nikmati fitur lengkap dan performa maksimal dengan paket berlangganan
          website Mitra Gamers yang sesuai kebutuhan Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col space-y-6 border border-gray-700 hover:border-red-600 transition cursor-default">
            <h3 className="text-xl font-semibold text-red-600">
              Feature Basic
            </h3>
            <p className="line-through text-gray-500">3.999K</p>
            <p className="text-3xl font-extrabold text-white">2.999K</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm flex-grow">
              <li>Akses Website Mitra Gamers</li>
              <li>Produk Voucher Lengkap</li>
              <li>Manajemen Produk</li>
              <li>Support Customer</li>
              <li>Paket Basic</li>
              <li>Website Optimized Mobile</li>
              <li>Multi Channel Support</li>
              <li>Email Notifikasi</li>
              <li>Data Aman Terintegrasi</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col space-y-6 border-2 border-red-600 cursor-default">
            <h3 className="text-xl font-semibold text-white">
              Feature Premium
            </h3>
            <p className="line-through text-gray-500">5.999K</p>
            <p className="text-3xl font-extrabold text-red-600">4.499K</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm flex-grow">
              <li>Semua Fit Basic</li>
              <li>Dashboard Penjualan</li>
              <li>Data Penjualan Lengkap</li>
              <li>Multi Website</li>
              <li>Manajemen Akun User</li>
              <li>Update Produk Berkala</li>
              <li>Backup Data Harian</li>
              <li>Integrasi Payment Gateway</li>
              <li>Customer Support 24/7</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col space-y-6 border border-gray-700 hover:border-red-600 transition cursor-default">
            <h3 className="text-xl font-semibold text-red-600">
              Feature Ultimate
            </h3>
            <p className="line-through text-gray-500">7.999K</p>
            <p className="text-3xl font-extrabold text-white">5.999K</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm flex-grow">
              <li>Semua Fit Premium</li>
              <li>Custom Desain Website</li>
              <li>Mobile App Support</li>
              <li>API Integrasi Lengkap</li>
              <li>Hosting dan Domain</li>
              <li>Backup & Restore Otomatis</li>
              <li>Security Premium</li>
              <li>Account Manager Khusus</li>
              <li>Training Penjualan</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="kontak" className="max-w-7xl mx-auto text-center px-6 mb-24">
        <h2 className="text-3xl font-bold text-white mb-6 max-w-xl mx-auto">
          Hubungi Whatsaap Kami Untuk Mendaftar Jadi Reseller Atau Membuat
          Website Impian
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Tim kami siap membantu Anda dengan informasi lengkap terkait
          pendaftaran reseller dan pembuatan website yang sesuai kebutuhan
          bisnis voucher game Anda.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener"
          className="inline-block bg-red-600 px-10 py-3 rounded-lg font-semibold text-black hover:bg-red-700 transition"
        >
          Hubungi Sekarang
        </a>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed96d3cd-5bb3-4621-87ac-aa3c75e8a96b.png"
            alt="Free Fire game cover art showing armed characters in intense gameplay action"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc705cfe-81f5-4cfd-8632-3cc21683a61d.png"
            alt="Bright colorful mobile game character artwork for a fantasy battle game"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b9902522-5ffb-4c66-9f07-e542505a16c5.png"
            alt="Realistic soldier artwork from PUBG representing tactical shooter game"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/268a934b-96a3-40cf-afa6-843d9acbaec0.png"
            alt="Logo and promotional art of Valorant eSports shooter tactical game in dark background"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-10">
          Punya Pertanyaan? Kami Punya Jawaban
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          <details className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer">
            <summary className="font-semibold text-lg text-red-600">
              Apa saja keuntungan menjadi reseller Mitra Gamers?
            </summary>
            <p className="mt-3 text-gray-300 text-sm">
              Sebagai reseller Anda mendapatkan sistem website siap pakai, akses
              produk voucher lengkap, serta dukungan sistem transaksi otomatis
              dan laporan penjualan secara real-time.
            </p>
          </details>
          <details className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer">
            <summary className="font-semibold text-lg text-red-600">
              Bagaimana cara mendaftar menjadi reseller?
            </summary>
            <p className="mt-3 text-gray-300 text-sm">
              Anda hanya perlu mengisi formulir pendaftaran di website kami,
              melakukan deposit saldo, dan mulai berjualan dengan sistem kami
              yang sudah terintegrasi.
            </p>
          </details>
          <details className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer">
            <summary className="font-semibold text-lg text-red-600">
              Apakah ada biaya langganan untuk website reseller?
            </summary>
            <p className="mt-3 text-gray-300 text-sm">
              Ya, tersedia beberapa paket harga langganan mulai dari paket
              Basic, Premium, hingga Ultimate sesuai kebutuhan fitur dan
              performa yang Anda inginkan untuk website reseller.
            </p>
          </details>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-red-600 font-bold text-xl mb-3 select-none">
              Mitra Gamers
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mitra Gamers adalah platform reseller voucher game terpercaya yang
              menyediakan website siap pakai dan produk gaming lengkap untuk
              menunjang bisnis Anda.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#produk" className="hover:text-red-600 transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="#tahapan" className="hover:text-red-600 transition">
                  Tahapan
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-red-600 transition">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-red-600 transition">
                  Harga
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-red-600 transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              Kontak Kami
            </h4>
            <address className="not-italic text-gray-400 text-sm space-y-1">
              <p>Jl. Reseller No. 123, Jakarta Selatan</p>
              <p>Email: contact@mitragamers.com</p>
              <p>Phone: +62 812 3456 7890</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6281234567890"
                  className="text-red-600 hover:underline"
                >
                  +62 812 3456 7890
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
                <a href="#" className="hover:text-red-600 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center text-gray-600 text-xs py-6 select-none">
          © 2024 Mitra Gamers. All rights reserved.
        </div>
      </footer>
    </>
  );
}
