import React from 'react';
import fotoSyafiq from '../assets/syafiq.jpg';

const profilesyafiq = () => {
  const data = {
    nama: "MUHAMMAD MU'TAZ SYAFIQ",
    peran: "Student",
    prodi: "Teknologi Informasi",
    fakultas: "Fakultas Vokasi",
    universitas: "Universitas Brawijaya",
    kelas: "T2G",
    domisili: "Malang, Indonesia",
    email: "mmutazsyafiq01@student.ub.ac.id",
    wa: "0895605390661", 
    fotoUrl: fotoSyafiq,
    tentangDiri: "Halo! Saya Muhammad Mu'taz Syafiq, Saya merupakan mahasiswa aktif tahun pertama Program Studi Teknologi Informasi, Fakultas Vokasi, Universitas Brawijaya yang memiliki dedikasi tinggi terhadap pengembangan diri. Saya dikenal sebagai pribadi yang memiliki kemampuan komunikasi interpersonal yang baik, bertanggung jawab penuh terhadap tugas, serta mampu mengelola waktu secara efektif di tengah kesibukan akademik. Saya terbiasa bekerja dengan pendekatan yang terstruktur dan sistematis, baik dalam menyelesaikan proyek teknis maupun tanggung jawab non-akademik. Melalui kombinasi kedisiplinan dan pola pikir analitis, saya selalu berupaya memberikan hasil kerja yang akurat dan tepat waktu. Saya siap berkontribusi secara positif dalam lingkungan kerja yang dinamis maupun kolaborasi tim yang suportif."
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-teal-500/30">
      
      {/* NAVBAR - Font diperbesar */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div 
            className="font-bold text-2xl text-white tracking-tighter cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            {data.nama}<span className="text-teal-400">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#overview" className="hover:text-teal-400 transition-colors">Overview</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">Biography</a>
            <span className="text-slate-700">|</span>
            <span className="text-teal-500 font-mono italic text-[11px] uppercase font-black">{data.universitas}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row gap-16 relative">
          
          {/* KOLOM KIRI: FIXED PHOTO */}
          <div className="w-full md:w-2/5 lg:w-1/3 md:sticky md:top-32 md:h-[calc(100vh-160px)]">
            <div className="h-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-teal-500 to-blue-600 rounded-3xl blur opacity-25 transition duration-700"></div>
              
              <img 
                src={data.fotoUrl} 
                alt={data.nama} 
                className="relative w-full h-full object-cover rounded-3xl border border-slate-700/50 shadow-2xl"
              />
              
              <div className="absolute top-4 right-4 bg-teal-500 text-black font-black text-[9px] px-3 py-1 rounded-lg uppercase tracking-tighter shadow-lg">
                VOKASI UB
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: SCROLLABLE CONTENT */}
          <div className="w-full md:w-3/5 lg:w-2/3 space-y-24 py-4">
            
            {/* 1. OVERVIEW SECTION - Line diperjelas */}
            <section id="overview" className="scroll-mt-32 space-y-8">
              <div className="flex items-center gap-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">Overview</h3>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-all group">
                  <h4 className="text-[10px] font-black uppercase text-teal-500 tracking-[0.2em] mb-2">Kelas</h4>
                  <p className="text-xl text-white font-bold">{data.kelas}</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-all">
                  <h4 className="text-[10px] font-black uppercase text-teal-500 tracking-[0.2em] mb-2">Role</h4>
                  <p className="text-xl text-white font-bold">{data.peran}</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-all">
                  <h4 className="text-[10px] font-black uppercase text-teal-500 tracking-[0.2em] mb-2">Contact</h4>
                  <p className="text-xl text-white font-bold">{data.wa}</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-all">
                  <h4 className="text-[10px] font-black uppercase text-teal-500 tracking-[0.2em] mb-2">Location</h4>
                  <p className="text-xl text-white font-bold">{data.domisili}</p>
                </div>

                <div className="sm:col-span-2 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-all">
                  <h4 className="text-[10px] font-black uppercase text-teal-500 tracking-[0.2em] mb-2">Program Studi</h4>
                  <p className="text-xl text-white font-bold">{data.prodi} — {data.fakultas}</p>
                </div>

                <div className="sm:col-span-2 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-teal-500/40 transition-all">
                  <h4 className="text-[10px] font-black uppercase text-teal-500 tracking-[0.2em] mb-2">Academic Email</h4>
                  <p className="text-lg text-white font-semibold break-all font-mono tracking-tight">{data.email}</p>
                </div>
              </div>
            </section>

            {/* 2. BIOGRAPHY SECTION - Line diperjelas */}
            <section id="about" className="scroll-mt-32 space-y-10">
              <div className="flex items-center gap-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">Biography</h3>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent"></div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                
                <div className="relative bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-800/50 overflow-hidden shadow-2xl">
                  <div className="absolute -top-4 -left-2 text-9xl text-teal-500/5 font-serif select-none pointer-events-none">“</div>
                  
                  <div className="relative z-10 space-y-6">
                    <p className="text-slate-300 leading-[2] text-lg md:text-xl text-justify font-light italic">
                      {data.tentangDiri}
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6">
                      <div className="h-[2px] w-16 bg-gradient-to-r from-teal-400 to-transparent rounded-full"></div>
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-teal-500/70 italic">Student Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <footer className="pt-10 pb-10 border-t border-slate-900 text-slate-700 text-[10px] font-mono tracking-[0.3em] uppercase text-center md:text-left">
              &copy; 2026 {data.nama} // {data.prodi}
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
};

export default profilesyafiq;