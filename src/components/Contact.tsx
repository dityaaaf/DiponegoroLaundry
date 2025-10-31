import { Phone, MapPin, Clock, } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281329279988', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-pink-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">
          Hubungi Kami
        </h2>
        <div className='flex justify-center items-center p-7'>
          <div className='h-1 w-64 bg-blue-200'></div>
        </div>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Kami siap melayani kebutuhan laundry Anda
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-blue-200">
              <div className="flex justify-center mb-4">
                <Phone className="text-blue-600" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Telepon</h3>
              <p className="text-gray-700">+62-813-2927-9988</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-blue-200">
              <div className="flex justify-center mb-4">
                <MapPin className="text-pink-600" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Alamat</h3>
              <p className="text-gray-700">
                Wisma Diponegoro Jl. Kesatrian No. 64 Jatingaleh Candisari Kota Semarang
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-blue-200">
              <div className="flex justify-center mb-4">
                <Clock className="text-blue-600" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Jam Operasional</h3>
              <p className="text-gray-700">08:00 - 20:00</p>
              <p className="text-gray-600 text-sm mt-1">Setiap Hari</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <Phone size={28} />
              <span>Hubungi Whatsapp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
