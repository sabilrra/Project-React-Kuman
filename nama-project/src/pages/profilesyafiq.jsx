import React from 'react';

const ProfileSyafiq = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      
      {/* Perbaikan Komentar: Card putih untuk profil */}
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
        
        {/* Bagian Kiri: Foto Profil */}
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/250"
            alt="Foto Profil"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Bagian Kanan: Informasi Profil */}
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
            Nama Lengkap Lu
          </h1>
          <h2 className="text-xl text-blue-600 font-semibold mb-6">
            Sistem Informasi (Ganti Jurusan/Prodi)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Kelas</p>
              <p className="text-lg text-gray-800 font-medium">TI - 3A (Ganti Kelas)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Domisili</p>
              <p className="text-lg text-gray-800 font-medium">Surabaya, Indonesia (Ganti Domisili)</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 inline-block pb-1">
              Tentang Diri
            </h3>
            <p className="text-gray-600 text-justify leading-relaxed">
              Halo! Nama saya [Nama Lu], saya adalah seorang mahasiswa di program studi [Jurusan Lu] yang memiliki minat dan ketertarikan besar dalam dunia teknologi informasi, khususnya dalam bidang pengembangan perangkat lunak dan desain antarmuka pengguna (UI/UX). Sejak awal masa perkuliahan, saya selalu antusias dalam mempelajari berbagai bahasa pemrograman serta kerangka kerja terbaru untuk membangun aplikasi yang fungsional dan menarik secara visual. Saya memiliki keyakinan bahwa teknologi yang dibangun dengan baik dapat memecahkan berbagai masalah sehari-hari dan memberikan dampak positif yang signifikan bagi masyarakat luas. Di luar kegiatan akademik kampus, saya aktif bereksperimen dengan berbagai proyek mandiri, salah satunya adalah mengeksplorasi ekosistem ReactJS dan utilitas Tailwind CSS seperti pada proyek ini, untuk menciptakan desain website yang responsif, modern, dan sangat ramah pengguna. Saya sangat menikmati setiap proses kreatif dalam mengubah baris-baris kode menjadi sebuah tampilan visual yang interaktif. Ke depannya, saya berharap dapat terus mengasah keterampilan teknis saya, belajar berkolaborasi dalam tim pengembangan yang solid, dan pada akhirnya mampu berkontribusi secara nyata sebagai tenaga profesional di industri teknologi digital.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileSyafiq;