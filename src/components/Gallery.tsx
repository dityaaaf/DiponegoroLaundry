import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Laundry from "../../public/Laundry 1.jpg";
import Laundry2 from "../../public/Laundry 2.jpg";
import Laundry3 from "../../public/Laundry 3.jpg";
import Laundry4 from "../../public/Laundry 4.jpg";

export default function Gallery() {
  const images = [Laundry, Laundry2, Laundry3, Laundry4];
  const [current, setCurrent] = useState(0);

  // Fungsi navigasi manual
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Ganti slide otomatis setiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="galeri" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">
    
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">
          Galeri Kami
        </h2>
        <div className='flex justify-center items-center p-7'>
          <div className='h-1 w-48 bg-blue-200'></div>
        </div>
        <p className="text-center text-gray-600 mb-12 text-lg">
         Proses dan Hasil Jadi Diponegoro Laundry
        </p>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`w-full h-[450px] md:h-[550px] object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            />
          ))}

          {/* Tombol Previous */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Tombol Next */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-white scale-110 shadow-md"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
