import { Star,} from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mukhlisin',
      review: 'Pelayanan sangat memuaskan! Pakaian selalu bersih dan wangi. Pengantaran juga tepat waktu. Recommended!',
      rating: 5,
    },
    {
      name: 'Kusirin',
      review: 'Sudah langganan 2 tahun di sini. Harga terjangkau, hasil maksimal. Antar jemput gratis sangat membantu!',
      rating: 5,
    },
    {
      name: 'Yuania',
      review: 'Laundry terbaik di Tembalang! Cucian rapi, wangi tahan lama. Pelayanan ramah dan profesional.',
      rating: 5,
    },
    {
      name: 'Ira',
      review: 'Sangat puas dengan layanan kilat mereka. Pakaian bersih dalam sehari tanpa mengurangi kualitas!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
            Kata Pelanggan Setia Kami
          </h2>
          <div className='flex justify-center items-center p-7'>
          <div className='h-1 w-96 bg-blue-200'></div>
        </div>
          <p className="text-gray-600 text-lg">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
            >
              <div className="flex justify-center mb-4 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-gray-700 text-center mb-6 italic leading-relaxed">
                "{testimonial.review}"
              </p>
              <h4 className="text-xl font-bold text-center text-blue-700">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.open('https://forms.gle/fvNBgBdFP2VvRfve7', '_blank')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all transform hover:scale-105"
          >
            Rating Pelayanan Laundry
          </button>
        </div>
      </div>
    </section>
  );
}
