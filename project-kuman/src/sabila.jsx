import { useState } from "react";

function Sabila() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-10 min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 font-sans">

      {/* LEFT - PROFILE CARD */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">

        {/* Avatar */}
        <div className="w-36 h-36 mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <circle cx="50" cy="35" r="22" fill="#3b82f6" />
            <ellipse cx="50" cy="70" rx="30" ry="28" fill="#3b82f6" />
            <circle cx="50" cy="100" r="50" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          </svg>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Contoh HTML Web Profil
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
            <h2 className="text-xl font-bold text-gray-800">User Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-500 font-semibold hover:text-blue-700 hover:scale-105 transition"
            >
              ✏️ Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {[
              { label: "Full Name", value: "Contoh HTML Web Profil" },
              { label: "Email", value: "contact@example.com" },
              { label: "Phone", value: "+62 (123) 456-7890" },
              { label: "Mobile", value: "+62 812-3456-7890" },
              { label: "Address", value: "Jakarta, Indonesia" },
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

        {/* PROJECT STATUS */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b">
            Project Status
          </h2>

          <div className="flex flex-col gap-5">

            {[
              { name: "Web Design", value: "75%" },
              { name: "Website Markup", value: "90%" },
              { name: "One Page", value: "60%" },
              { name: "Mobile Template", value: "85%" },
            ].map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-800">
                    {project.name}
                  </span>
                  <span className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded">
                    {project.value}
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-md"
                    style={{ width: project.value }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Sabila;