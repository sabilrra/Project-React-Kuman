import React from 'react';
import fotoBilqis from '../assets/bilqis.jpg'; // Pastikan nama file foto sudah disesuaikan di folder assets

const profilebilqis = () => {
  const data = {
    nama: "Bilqis Nailatul Muna",
    peran: "Student",
    prodi: "Teknologi Informasi",
    fakultas: "Fakultas Vokasi",
    universitas: "Universitas Brawijaya",
    kelas: "T2G",
    domisili: "Surabaya, Indonesia",
    email: "bilqis@student.ub.ac.id", // Silakan sesuaikan email jika diperlukan
    wa: "0895605390661", // Masukkan nomor WhatsApp kamu di sini
    fotoUrl: fotoBilqis,
    tentangDiri: "Halo! Saya Bilqis Nailatul Muna, mahasiswa aktif tahun ketiga di program studi Teknologi Informasi, Fakultas Vokasi, Universitas Brawijaya. Saya memiliki passion yang sangat kuat di bidang web development, khususnya pada sisi Frontend Engineering dan juga User Interface (UI) Design. Ketertarikan saya pada dunia teknologi dimulai sejak bangku sekolah, dan kini saya fokus mengasah kemampuan dalam ekosistem JavaScript, terutama ReactJS yang dikombinasikan dengan utility-first CSS framework seperti Tailwind CSS untuk menciptakan antarmuka web yang tidak hanya fungsional tetapi juga responsif, modern, dan ramah pengguna (user-friendly). Saya sangat menikmati proses problem-solving dalam coding dan selalu antusias untuk mempelajari teknologi terbaru serta praktik terbaik dalam pengembangan perangkat lunak. Di luar kegiatan akademik, saya aktif bereksperimen dengan proyek-proyek mandiri untuk memperdalam pemahaman saya tentang arsitektur Frontend. Harapan saya ke depannya adalah dapat berkontribusi dalam tim pengembangan yang dinamis sebagai seorang tenaga profesional di industri teknologi digital, di mana saya bisa terus belajar, berkolaborasi, dan menciptakan solusi inovatif yang memberikan dampak positif bagi masyarakat luas."
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-teal-500/30">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div 
            className="font-bold text-xl text-white tracking-tighter cursor-pointer uppercase" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            BILQIS NAILATUL MUNA<span className="text-teal-400">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#about" className="hover:text-white transition-colors">Biography</a>
            <span className="text-slate-800">|</span>
            <span className="text-teal-500 font-mono italic text-[9px]">UNIVERSITAS BRAWIJAYA</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row gap-16 relative">
          
          {/* KOLOM KIRI: FIXED PHOTO */}
          <div className="w-full md:w-2/5 lg:w-1/3 md:sticky md:top-32 md:h-[calc(100vh-160px)]">
            <div className="h-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-teal-500 to-blue-600 rounded-3xl blur opacity-20 transition duration-700"></div>
              
              <img 
                src={data.fotoUrl} 
                alt={data.nama} 
                className="relative w-full h-full object-cover rounded-3xl border border-slate-700/50 shadow-2xl"
              />
              
              <div className="absolute top-4 right-4 bg-teal-500 text-black font-black text-[9px] px-3 py-1 rounded-lg uppercase tracking-tighter shadow-lg">
                VOKASI UB
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/5">
                <p className="text-teal-400 font-mono text-[9px] uppercase tracking-widest mb-1 italic text-center">LOCATION</p>
                <p className="text-white font-bold text-sm tracking-tight text-center">{data.domisili}</p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: SCROLLABLE CONTENT */}
          <div className="w-full md:w-3/5 lg:w-2/3 space-y-24 py-4">
            
            {/* 1. OVERVIEW SECTION */}
            <section id="overview" className="scroll-mt-32 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 py-6 border-b border-slate-800/50 pb-16">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-4">KELAS</h4>
                  <p className="text-2xl text-white font-bold">{data.kelas}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-4">ROLE</h4>
                  <p className="text-2xl text-white font-bold">{data.peran}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-4">CONTACT</h4>
                  <p className="text-2xl text-white font-bold">{data.wa}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-4">PRODI</h4>
                  <p className="text-xl text-white font-bold leading-tight">{data.prodi}</p>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-4">E-MAIL</h4>
                  <p className="text-lg text-teal-400 font-semibold underline underline-offset-8 decoration-teal-950 break-all">
                    {data.email}
                  </p>
                </div>
              </div>
            </section>

            {/* 2. BIOGRAPHY SECTION */}
            <section id="about" className="scroll-mt-32 space-y-10 pt-4 pb-20">
              <div className="flex items-center gap-6">
                <h3 className="text-5xl font-black text-white tracking-tighter">Biography</h3>
                <div className="h-[1px] flex-1 bg-slate-800"></div>
              </div>
              
              <div className="relative">
                <p className="text-slate-400 leading-[2] text-xl font-light text-justify relative z-10">
                  {data.tentangDiri}
                </p>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="pt-10 pb-10 border-t border-slate-900 text-slate-700 text-[10px] font-mono tracking-[0.3em] uppercase text-center md:text-left">
              &copy; 2026 {data.nama} // {data.fakultas}
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
};

export default profilebilqis;