import {  } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 bg-white" id='location'>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800">
            Lokasi Kami
          </h2>
        </div>
          <div className='flex justify-center items-center m-8'>
            <div className='h-1 w-52 bg-blue-200'></div>
          </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.8282776156246!2d110.4190306!3d-7.0283991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDEnNDIuMiJTIDExMMKwMjUnMTcuOCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diponegoro Laundry Location"
            ></iframe>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-8 text-center shadow-lg">
            <p className="text-xl md:text-2xl text-gray-800 font-semibold">
              Wisma Diponegoro Jl. Kesatrian No. 64 Jatingaleh Candisari Kota Semarang
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
