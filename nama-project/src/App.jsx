import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' // Nah, kita import Link di sini
import './App.css'
import ProfileSyafiq from './pages/profilesyafiq'
import Home from "./pages/profilesyafiq";
import ProfileBilqis from './pages/profilebilqis'
import ProfileSabila from './pages/profilesabila'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Home sekarang ada tombolnya */}
        <Route path="/" element={
          <div style={{textAlign: "center", marginTop: "100px"}}>
            <h1>Halo! Ini Halaman Utama Tim Kuman</h1>
            <p>Klik tombol di bawah untuk melihat profil anggota:</p>
            
            {/* Ini tombol buat ke halaman Syafiq */}
            <Link to="/syafiq">
              <button style={{
                padding: "10px 20px", 
                fontSize: "16px", 
                cursor: "pointer", 
                backgroundColor: "#007BFF", 
                color: "white", 
                border: "none", 
                borderRadius: "5px",
                marginTop: "10px"
              }}>
                Lihat Profil Syafiq
              </button>
            </Link>

          </div>
        } />
        
        {/* Rute ke profil lu */}
        <Route path="/syafiq" element={<ProfileSyafiq />} />
      </Routes>

      <Routes>
        {/* Halaman Home sekarang ada tombolnya */}
        <Route path="/" element={
          <div style={{textAlign: "center", marginTop: "100px"}}>
            <h1>Halo! Ini Halaman Utama Tim Kuman</h1>
            <p>Klik tombol di bawah untuk melihat profil anggota:</p>
            
            {/* Ini tombol buat ke halaman Bilqis */}
            <Link to="/bilqis">
              <button style={{
                padding: "10px 20px", 
                fontSize: "16px", 
                cursor: "pointer", 
                backgroundColor: "#007BFF", 
                color: "white", 
                border: "none", 
                borderRadius: "5px",
                marginTop: "10px"
              }}>
                Lihat Profil Bilqis
              </button>
            </Link>

          </div>
        } />
        
        {/* Rute ke profil lu */}
        <Route path="/bilqis" element={<ProfileBilqis />} />
      </Routes>


      <Routes>
        {/* Halaman Home sekarang ada tombolnya */}
        <Route path="/" element={
          <div style={{textAlign: "center", marginTop: "100px"}}>
            <h1>Halo! Ini Halaman Utama Tim Kuman</h1>
            <p>Klik tombol di bawah untuk melihat profil anggota:</p>
            
            {/* Ini tombol buat ke halaman Sabila */}
            <Link to="/sabila">
              <button style={{
                padding: "10px 20px", 
                fontSize: "16px", 
                cursor: "pointer", 
                backgroundColor: "#007BFF", 
                color: "white", 
                border: "none", 
                borderRadius: "5px",
                marginTop: "10px"
              }}>
                Lihat Profil Sabila
              </button>
            </Link>

          </div>
        } />
        
        {/* Rute ke profil lu */}
        <Route path="/sabila" element={<ProfileSabila />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App