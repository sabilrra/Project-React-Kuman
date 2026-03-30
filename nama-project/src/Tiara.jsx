import React from 'react'

const Tiara = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl border border-gray-200">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Halaman Profil</div>
          <h1 className="block mt-1 text-2xl leading-tight font-bold text-gray-900">Tiara Purnomo</h1>
          
          <div className="mt-4 grid grid-cols-1 gap-1 text-gray-700">
            <p><span className="font-medium text-gray-900">Kelas:</span> [Isi Kelas Kamu]</p>
            <p><span className="font-medium text-gray-900">Jurusan:</span> Teknologi Informasi</p>
            <p><span className="font-medium text-gray-900">Domisili:</span> Malang</p>
          </div>
          
          <div className="mt-6 border-t border-gray-200 pt-4">
            <h2 className="text-gray-800 font-semibold mb-2">Tentang Saya:</h2>
            <p className="text-gray-600 italic leading-relaxed text-justify">
              Halo! Saya Tiara Purnomo, mahasiswi Teknologi Informasi yang memiliki ketertarikan kuat di bidang pengembangan web, khususnya menggunakan ReactJS. Saat ini, saya fokus mempelajari framework modern untuk menciptakan antarmuka pengguna yang menarik dan responsif. Bagi saya, coding adalah tantangan sekaligus kesempatan untuk terus berinovasi. Di masa depan, saya bercita-cita untuk berkontribusi lebih banyak dalam dunia teknologi informasi dengan keahlian yang saya miliki... (Pastikan ini minimal 100 kata ya, Tiara! Biar nilainya maksimal).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tiara