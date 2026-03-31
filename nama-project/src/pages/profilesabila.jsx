import { useState, useRef } from "react";
// --- BARIS KODE BARU (IMPORT FOTO PERMANEN) ---
import FotoSabila from "../assets/sabila.jpeg"; 

function Sabila() {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(FotoSabila); 
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-10 min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 font-sans relative">

      {/* Input File yang Disembunyikan */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handlePhotoChange}
        className="hidden"
      />

      {/* LEFT - PROFILE CARD */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">

        {/* Avatar - CLICKABLE */}
        <div
          className="w-36 h-36 mb-6 relative group overflow-hidden rounded-full border-4 border-blue-100 shadow-inner cursor-pointer"
          onClick={handleUploadClick}
          title="Klik untuk mengubah foto profil"
        >
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile Preview"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          ) : (
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg p-2 text-blue-500">
              <circle cx="50" cy="35" r="22" fill="#3b82f6" />
              <ellipse cx="50" cy="70" rx="30" ry="28" fill="#3b82f6" />
              <circle cx="50" cy="100" r="50" fill="none" stroke="#e5e7eb" strokeWidth="2" />
            </svg>
          )}

          <div className="absolute inset-0 bg-blue-500/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium gap-1">
            <span className="text-2xl">📸</span>
            <span className="text-xs">Ubah Foto</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Sabila Rahma Aulia
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mb-6">
          <button className="flex-1 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:-translate-y-1 transition shadow-md">
            Follow
          </button>
          <button className="flex-1 py-3 rounded-lg text-blue-500 font-semibold bg-gray-100 border border-gray-300 hover:bg-gray-200">
            Message
          </button>
        </div>

        {/* Social */}
        <div className="w-full text-left">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4 tracking-wide">
            Social Links
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition hover:translate-x-1">
                🌐 Website
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition hover:translate-x-1">
                🐙 GitHub
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition hover:translate-x-1">
                𝕏 Twitter
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition hover:translate-x-1">
                📷 Instagram
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition hover:translate-x-1">
                👍 Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-6 lg:col-span-2">

        {/* USER INFO */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center mb-6 pb-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Informasi Pribadi</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-500 font-semibold hover:text-blue-700 hover:scale-105 transition"
            >
              ✏️ Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Full Name", value: "Sabila Rahma Aulia" },
              { label: "Email", value: "sabilauliarahma@gmail.com" },
              { label: "Phone", value: "081249837470" },
              { label: "Mobile", value: "081249837470" },
              { label: "Address", value: "Malang, Indonesia" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 uppercase mb-2">
                  {item.label}
                </span>
                <input
                  defaultValue={item.value}
                  disabled={!isEditing}
                  className={`p-3 rounded-lg text-sm transition font-medium
                    ${isEditing
                      ? "border-2 border-blue-500 bg-white focus:ring-2 focus:ring-blue-200"
                      : "bg-transparent border-none"}
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIWAYAT & PENCAPAIAN SECTION */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b">
            Riwayat & Pencapaian
          </h2>

          <div className="flex flex-col gap-8">
            
            {/* 1. RIWAYAT PENDIDIKAN */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                🎓 Riwayat Pendidikan
              </h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-6">
                
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                  <h4 className="font-bold text-gray-800">Universitas Brawijaya Malang</h4>
                  <p className="text-sm text-gray-500 mb-1">D3 Teknologi Informasi 2025 - sekarang</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Fokus pada rekayasa perangkat lunak dan pengembangan web. Aktif mengikuti praktikum dan proyek pengembangan aplikasi kampus.
                  </p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gray-300 rounded-full border-2 border-white shadow"></div>
                  <h4 className="font-bold text-gray-800">SMA Negeri 2 Magetan</h4>
                  <p className="text-sm text-gray-500 mb-1">Jurusan MIPA • 2022 - 2025</p>
                </div>

              </div>
            </div>

            {/* 2. PENGALAMAN ORGANISASI */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                🤝 Pengalaman Organisasi
              </h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-6">
                
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                  <h4 className="font-bold text-gray-800">Himpunan Mahasiswa Teknologi Informasi</h4>
                  <p className="text-sm text-gray-500 mb-1">Staff Ahli Departemen Kreativitas dan Olahraga</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Bertanggung jawab dalam Program kerja Organisasi
                  </p>
                </div>

              </div>
            </div>

            {/* 3. ACHIEVEMENT / PENCAPAIAN */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                🏆 Achievement
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:bg-blue-100 transition cursor-default">
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Juara 1 UNESA NATIONAL Pencak Silat Chalenge Competition</h4>
                  <p className="text-xs text-gray-500 font-medium">Tingkat Nasional • 2023</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:bg-blue-100 transition cursor-default">
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Juara 2 Pencak Silat Bupati Cup Magetan </h4>
                  <p className="text-xs text-gray-500 font-medium">Tingkat Kabupaten • 2024</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:bg-blue-100 transition cursor-default">
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Peserta OSNK INFORMATIKA 2024</h4>
                  <p className="text-xs text-gray-500 font-medium">SMAN 2 MAGETAN • 2024</p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Sabila;