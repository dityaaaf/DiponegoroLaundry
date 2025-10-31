import * as lucideReact from 'lucide-react';
import React, { useState } from 'react';
import DiponegoroLaundry from "../../public/Diponegoro Laundry.png"
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };
   const navigate = useNavigate();

  return (
    <header className="bg-white opacity-95 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
              <img src={DiponegoroLaundry} alt="logo" className='w-12 h-10 md:w-24 md:h-12'/>
            <h1 className="text-2xl font-bold text-blue-400">Diponegoro Laundry</h1>
          </div>
          <nav className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-3">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-black transition-colors text-blue-400 font-medium px-1 lg:px-2 xl:px-3"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-black transition-colors text-blue-400 font-medium px-1 lg:px-2 xl:px-3"
            >
              Harga Laundry
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-black transition-colors text-blue-400 font-medium px-1 lg:px-2 xl:px-3"
            >
              Kontak
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-black transition-colors text-blue-400 font-medium px-1 lg:px-2 xl:px-3"
            >
              Syarat dan Ketentuan
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="hover:text-black transition-colors text-blue-400 font-medium px-1 lg:px-2 xl:px-3"
            >
              Lokasi
            </button>
          </nav>
          <button className="md:hidden p-2 rounded-full bg-black/20 hover:bg-black/40 transition-all" onClick={() => setMobileOpen(!mobileOpen)}>
            <lucideReact.Menu size={28} />
          </button>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg z-50 animate-slide-down">
            <div className="w-full border-t border-blue/30" />
            <nav className="flex flex-col items-center py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-blue-200 transition-colors font-medium text-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="hover:text-blue-200 transition-colors font-medium text-lg"
              >
                Harga Laundry
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-200 transition-colors font-medium text-lg"
              >
                Kontak
              </button>
              <button
                onClick={() => navigate('/terms')}
                className="hover:text-blue-200 transition-colors font-medium text-lg"
              >
                Syarat dan Ketentuan
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="hover:text-blue-200 transition-colors font-medium text-lg"
              >
                Lokasi
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
