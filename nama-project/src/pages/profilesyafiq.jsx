import React from 'react';
// Pastikan file foto 'syafiq.jpg' sudah ada di folder src/assets/
import fotoSyafiq from '../assets/syafiq.jpg';

const profilesyafiq = () => {
  const data = {
    nama: "Muhammad Mu'taz Syafiq",
    panggilan: "Syafiq",
    peran: "Junior Web Developer",
    prodi: "Teknologi Informasi",
    fakultas: "Fakultas Vokasi",
    universitas: "Universitas Brawijaya",
    kelas: "TI - 3A",
    domisili: "Surabaya, Indonesia",
    email: "mutaz.syafiq@student.ub.ac.id",
    fotoUrl: fotoSyafiq,
    // Deskripsi diri minimal 100 kata sesuai requirement
    tentangDiri: "Halo! Saya Muhammad Mu'taz Syafiq, mahasiswa aktif tahun ketiga di program studi Teknologi Informasi, Fakultas Vokasi, Universitas Brawijaya. Saya memiliki passion yang sangat kuat di bidang web development, khususnya pada sisi Frontend Engineering dan juga User Interface (UI) Design. Ketertarikan saya pada dunia teknologi dimulai sejak bangku sekolah, dan kini saya fokus mengasah kemampuan dalam ekosistem JavaScript, terutama ReactJS yang dikombinasikan dengan utility-first CSS framework seperti Tailwind CSS untuk menciptakan antarmuka web yang tidak hanya fungsional tetapi juga responsif, modern, dan ramah pengguna (user-friendly). Saya sangat menikmati proses problem-solving dalam coding dan selalu antusias untuk mempelajari teknologi terbaru serta praktik terbaik dalam pengembangan perangkat lunak. Di luar kegiatan akademik, saya aktif bereksperimen dengan proyek-proyek mandiri untuk memperdalam pemahaman saya tentang arsitektur Frontend. Harapan saya ke depannya adalah dapat berkontribusi dalam tim pengembangan yang dinamis sebagai seorang tenaga profesional di industri teknologi digital, di mana saya bisa terus belajar, berkolaborasi, dan menciptakan solusi inovatif yang memberikan dampak positif bagi masyarakat luas."
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-teal-500/30">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div 
            className="font-bold text-xl text-white tracking-tighter cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            MU'TAZ<span className="text-teal-400">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#about" className="hover:text-white transition-colors">Biography</a>
            <span className="text-slate-800">|</span>
            <span className="text-teal-500 font-mono tracking-normal italic">{data.universitas}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row gap-16 relative">
          
          {/* KOLOM KIRI: FIXED PHOTO (Requirement: Foto Profil) */}
          <div className="w-full md:w-2/5 lg:w-1/3 md:sticky md:top-32 md:h-[calc(100vh-160px)]">
            <div className="h-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-teal-500 to-blue-600 rounded-3xl blur opacity-20 transition duration-700"></div>
              
              <img 
                src={data.fotoUrl} 
                alt={data.nama} 
                className="relative w-full h-full object-cover rounded-3xl border border-slate-700/50 shadow-2xl"
              />
              
              <div className="absolute top-4 right-4 bg-teal-500 text-black font-black text-[9px] px-3 py-1 rounded-lg uppercase tracking-tighter">
                Vokasi UB
              </div>

              {/* Requirement: Domisili */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/5">
                <p className="text-teal-400 font-mono text-[9px] uppercase tracking-widest mb-1 italic">Location</p>
                <p className="text-white font-bold text-sm tracking-tight">{data.domisili}</p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: SCROLLABLE CONTENT */}
          <div className="w-full md:w-3/5 lg:w-2/3 space-y-24 py-4">
            
            {/* 1. Header & Data Diri (Requirement: Nama, Kelas, Prodi) */}
            <section id="overview" className="scroll-mt-32 space-y-12">
              <div>
                <p className="text-teal-500 font-mono text-xs mb-4 uppercase tracking-[0.3em]">// Digital Profile</p>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                  {data.nama.split(' ').slice(0, 2).join(' ')}<br/>
                  <span className="text-teal-400">{data.nama.split(' ').slice(2).join(' ')}</span>
                </h1>
                <p className="text-xl text-slate-400 font-light max-w-xl leading-relaxed">
                  Mahasiswa <span className="text-white font-medium">{data.prodi}</span> di <span className="text-white font-medium">{data.fakultas}</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 border-y border-slate-800/50 py-10">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-3">Kelas</h4>
                  <p className="text-lg text-white font-semibold">{data.kelas}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-3">Role</h4>
                  <p className="text-lg text-white font-semibold">{data.peran}</p>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-3">E-mail</h4>
                  <p className="text-lg text-teal-400 font-semibold underline underline-offset-8 decoration-teal-950">
                    {data.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-teal-400 transition-all active:scale-95 shadow-xl">
                  Contact Me
                </button>
              </div>
            </section>

            {/* 2. Biography Section (Requirement: Deskripsi Diri) */}
            <section id="about" className="scroll-mt-32 space-y-10 pt-12 pb-20">
              <div className="flex items-center gap-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">Biography</h3>
                <div className="h-[1px] flex-1 bg-slate-800"></div>
              </div>
              
              <div className="relative">
                <span className="absolute -left-10 top-0 text-8xl text-teal-500/10 font-serif leading-none select-none">“</span>
                <p className="text-slate-400 leading-[1.8] text-xl font-light text-justify italic relative z-10">
                  {data.tentangDiri}
                </p>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="pt-10 pb-10 border-t border-slate-900 text-slate-700 text-[10px] font-mono tracking-[0.3em] uppercase">
              &copy; 2026 {data.nama} // Vokasi UB
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
};

export default profilesyafiq;