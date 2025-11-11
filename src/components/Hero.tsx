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
        {/* Judul baru */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-blue-300">
          DIPONEGORO LAUNDRY
        </h1>

        {/* Kalimat utama */}
        <h2 className="text-3xl md:text-6xl font-bold mb-8 drop-shadow-lg">
          Tinggal Japri Jadi Sendiri  <br />Tanpa Antri <br /> Wangi Bebas Bakteri <br /> Tinggal Pilih Waktu Jadi <br /> Antar Jemput Disegala Hari
        </h2>

        <div className="bg-white/10 backdrop rounded-2xl p-4 mb-10 inline-block border border-white/20">
          <p className="text-2xl md:text-3xl">
            Antar Jemput Gratis untuk Area <span className="font-bold text-blue-400">Kesatrian</span>
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
