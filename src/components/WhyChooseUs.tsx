import { Clock, Sparkles, Truck, Shield, ThumbsUp, Zap, } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap className="text-yellow-400" size={48} />,
      title: 'Proses Cepat',
      description: 'Layanan kilat tersedia, pakaian bersih dalam waktu singkat',
    },
    {
      icon: <Sparkles className="text-pink-400" size={48} />,
      title: 'Hasil Bersih & Wangi',
      description: 'Menggunakan deterjen berkualitas tinggi dan pewangi premium',
    },
    {
      icon: <Truck className="text-blue-400" size={48} />,
      title: 'Antar Jemput Gratis',
      description: 'Gratis pengantaran untuk area Tembalang',
    },
    {
      icon: <Clock className="text-blue-400" size={48} />,
      title: 'Tepat Waktu',
      description: 'Komitmen kami mengembalikan cucian sesuai jadwal',
    },
    {
      icon: <Shield className="text-purple-400" size={48} />,
      title: 'Terpercaya',
      description: 'Dipercaya oleh ratusan pelanggan setia',
    },
    {
      icon: <ThumbsUp className="text-orange-400" size={48} />,
      title: 'Harga Terjangkau',
      description: 'Kualitas premium dengan harga yang bersahabat',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white-50 to-pink-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">
          Mengapa Memilih Diponegoro Laundry?
        </h2>
        <div className='flex justify-center items-center p-7'>
          <div className='h-1 w-96 bg-blue-200'></div>
        </div>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Alasan mengapa kami menjadi pilihan terbaik untuk kebutuhan laundry Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-blue-100"
            >
              <div className="flex justify-center mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                {reason.title}
              </h3>
              <p className="text-center text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}