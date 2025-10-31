import { Phone, MapPin, Clock } from 'lucide-react';
import Laundry7 from "../../public/Diponegoro Laundry.png"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src={Laundry7} alt="logo" className='w-24 h-12 mr-4' />
              <h3 className="text-2xl font-bold">Diponegoro Laundry</h3>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Laundry terpercaya di Semarang dengan layanan antar jemput gratis untuk area Tembalang
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="text-blue-300 mr-2" size={24} />
              <h4 className="text-xl font-bold">Jam Operasional</h4>
            </div>
            <p className="text-blue-200 text-lg">08:00 - 20:00</p>
            <p className="text-blue-300 mt-2">Setiap Hari</p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <Phone className="text-blue-300 mr-2" size={24} />
              <h4 className="text-xl font-bold">Kontak</h4>
            </div>
            <p className="text-blue-200 mb-3">+62-813-2927-9988</p>
            <div className="flex items-center justify-center md:justify-end">
              <MapPin className="text-blue-300 mr-2" size={20} />
              <p className="text-blue-200 text-sm">
                Jl. Kesatrian No. 64, Semarang
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200">
            &copy; 2025 Diponegoro Laundry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
