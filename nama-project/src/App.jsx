import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ProfileSyafiq from './pages/profilesyafiq'
import ProfileBilqis from './pages/profilebilqis'
import ProfileSabila from './pages/profilesabila'
import ProfileTiara from './pages/profiletiara'

// Komponen Home dipisah biar kodingan App.jsx gak kepanjangan
const Home = () => {
  const members = [
    { name: "Syafiq", path: "/syafiq", color: "from-teal-500 to-blue-600" },
    { name: "Bilqis", path: "/bilqis", color: "from-pink-500 to-rose-600" },
    { name: "Sabila", path: "/sabila", color: "from-purple-500 to-indigo-600" },
    { name: "Tiara", path: "/tiara", color: "from-amber-500 to-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-8">
      {/* Header Utama */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
          TIM <span className="text-teal-400">KUMAN</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Selamat datang di Hub Portofolio kami. Pilih anggota untuk melihat detail profil.
        </p>
      </div>

      {/* Grid Tombol Anggota */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {members.map((member) => (
          <Link key={member.name} to={member.path} className="group">
            <div className={`relative overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-3xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-teal-500/50 group-hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)]`}>
              {/* Efek Cahaya saat Hover */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 blur transition duration-500`}></div>
              
              <div className="relative flex flex-col items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold`}>
                  {member.name[0]}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-black">View Profile</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Simple */}
      <footer className="mt-20 text-slate-600 text-[10px] uppercase tracking-[0.4em]">
        Project PemWeb I &copy; 2026
      </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syafiq" element={<ProfileSyafiq />} />
        <Route path="/bilqis" element={<ProfileBilqis />} />
        <Route path="/sabila" element={<ProfileSabila />} />
        <Route path="/tiara" element={<ProfileTiara />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
