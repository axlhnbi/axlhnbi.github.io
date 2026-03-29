export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-20 max-w-5xl mx-auto font-[family-name:var(--font-geist-sans)]">
      {/* Bagian Hero / Profil */}
      <header className="mb-16 text-center sm:text-left">
        <h1 className="text-4xl font-bold mb-4">Halo, Saya seorang Developer</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Selamat datang di portofolio saya. Saya berfokus pada pengembangan aplikasi, mulai dari web hingga mobile, serta aktif mengeksplorasi integrasi teknologi baru.
        </p>
      </header>

      {/* Bagian Proyek */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Proyek Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Kartu Proyek 1 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Finflow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Aplikasi mobile fungsional yang telah berhasil dikembangkan, di-build, dan dipublikasikan secara resmi ke Google Play Store.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Ionic</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Mobile App</span>
            </div>
          </div>

          {/* Kartu Proyek 2 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Aplikasi To-Do List</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Aplikasi manajemen tugas yang ringan dan responsif, dibangun dengan arsitektur web modern.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Next.js 16</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Web App</span>
            </div>
          </div>

          {/* Kartu Proyek 3 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Aplikasi Patroli Keamanan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Sistem pendataan dan pemantauan aktivitas rute patroli keamanan untuk operasional yang lebih terstruktur.
            </p>
          </div>

          {/* Kartu Proyek 4 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Game Labirin</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Game interaktif yang dilengkapi dengan fitur mekanik seperti map radar dan indikator stamina pemain.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Game Dev</span>
            </div>
          </div>

        </div>
      </section>

      {/* Bagian Kontribusi Tambahan */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Eksplorasi & Open Source</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Selain mengerjakan proyek pribadi, saya juga memiliki ketertarikan untuk berkontribusi memecahkan <i>bug</i> pada aplikasi <i>open source</i> dan mengeksplorasi integrasi AI seperti Gemini API.
        </p>
      </section>
    </main>
  );
}