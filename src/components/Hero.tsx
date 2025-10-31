import { Phone } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281329279988', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/image.png)',
        backgroundPosition: 'right center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-400/20 to-pink-900/40"></div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">
          Laundry Cepat, Bersih, Wangi dan OnTime dengan Antar Jemput Gratis
        </h2>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 inline-block border border-white/20">
          <p className="text-2xl md:text-3xl">
            Pengantaran Gratis untuk Area <span className="font-bold text-blue-400">Tembalang</span>
          </p>
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto"
        >
          <Phone size={28} />
          <span>Order Via Whatsapp</span>
        </button>
      </div>
    </section>
  );
}
