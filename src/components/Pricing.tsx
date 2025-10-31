import { useState } from "react";
import { Shirt, Package, Bed, X, } from "lucide-react";

export default function Pricing() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const prices = [
    {
      icon: <Shirt className="text-blue-400" size={56} />,
      name: "Laundry Kilat",
      price: "Rp 12.000",
      unit: "/kg",
      description: "Selesai dalam 1 hari",
      hasModal: true,
    },
    {
      icon: <Package className="text-blue-400" size={56} />,
      name: "Laundry Biasa",
      price: "Rp 6.000",
      unit: "/kg",
      description: "Selesai dalam 3 hari",
      hasModal: true,
    },
    {
      icon: <Bed className="text-blue-400" size={56} />,
      name: "Bad Cover Besar",
      price: "Rp 35.000",
      unit: "/pcs",
      description: "King size",
      hasModal: true,
    },
    {
      icon: <Bed className="text-blue-400" size={56} />,
      name: "Bad Cover Sedang",
      price: "Rp 25.000",
      unit: "/pcs",
      description: "Queen size",
      hasModal: true,
    },
    {
      icon: <Bed className="text-blue-400" size={56} />,
      name: "Bad Cover Kecil",
      price: "Rp 20.000",
      unit: "/pcs",
      description: "Single size",
      hasModal: true,
    },
    {
      icon: <Bed className="text-blue-400" size={56} />,
      name: "Bad Cover Mini",
      price: "Rp 15.000",
      unit: "/pcs",
      description: "Ukuran kecil",
      hasModal: true, // ✅ tambahkan agar bisa buka modal
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-pink-10 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">
          Harga Laundry
        </h2>
        <div className='flex justify-center items-center p-7'>
          <div className='h-1 w-64 bg-blue-200'></div>
        </div>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Harga terjangkau dengan kualitas terbaik
        </p>

        {/* Grid Pricing Cards */}
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-6xl mx-auto place-items-center">
          {prices.map((item, index) => (
            <div
              key={index}
              onClick={() => item.hasModal && setSelectedItem(item.name)}
              className={`flex flex-col justify-between items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-blue-200 hover:border-blue-400 min-h-[300px] w-full max-w-sm cursor-pointer ${
                item.hasModal ? "hover:bg-blue-50" : ""
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h3>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-blue-600">{item.price}</span>
                  <span className="text-gray-600 text-xl">{item.unit}</span>
                </div>
                <p className="text-gray-600 italic">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Section */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative transition-transform transform scale-100">
              {/* Tombol Close */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedItem(null)}
              >
                <X size={24} />
              </button>

              {/* Modal untuk Laundry Kilat */}
              {selectedItem === "Laundry Kilat" && (
                <>
                  <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Detail Harga - Laundry Kilat
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex justify-between border-b pb-2">
                      <span>Express 1 Hari</span>
                      <span className="font-semibold text-blue-600">Rp 12.000</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span>2 Hari</span>
                      <span className="font-semibold text-blue-600">Rp 10.000</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span>Setrika Saja (1 Hari)</span>
                      <span className="font-semibold text-blue-600">Rp 9.000</span>
                    </li>
                  </ul>
                </>
              )}

              {/* Modal untuk Laundry Biasa */}
              {selectedItem === "Laundry Biasa" && (
                <>
                  <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Detail Harga - Laundry Biasa
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex justify-between border-b pb-2">
                      <span>Reguler (3 Hari)</span>
                      <span className="font-semibold text-blue-600">Rp 6.000</span>
                    </li>
                  </ul>
                </>
              )}

              {/* Modal untuk Bad Cover Besar */}
              {selectedItem === "Bad Cover Besar" && (
                <>
                  <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Detail Harga - Bad Cover Besar
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex justify-between border-b pb-2">
                      <span>Sprei Kingsize (5 Jam)</span>
                      <span className="font-semibold text-blue-600">Rp 35.000</span>
                    </li>
                  </ul>
                </>
              )}

              {/* Modal untuk Bad Cover Sedang */}
              {selectedItem === "Bad Cover Sedang" && (
                <>
                  <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Detail Harga - Bad Cover Sedang
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex justify-between border-b pb-2">
                      <span>Sprei Queensize (5 Jam)</span>
                      <span className="font-semibold text-blue-600">Rp 25.000</span>
                    </li>
                  </ul>
                </>
              )}

              {/* Modal untuk Bad Cover Kecil */}
              {selectedItem === "Bad Cover Kecil" && (
                <>
                  <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Detail Harga - Bad Cover Kecil
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex justify-between border-b pb-2">
                      <span>Sprei Smallsize (5 Jam)</span>
                      <span className="font-semibold text-blue-600">Rp 20.000</span>
                    </li>
                  </ul>
                </>
              )}

              {/* ✅ Modal untuk Bad Cover Mini */}
              {selectedItem === "Bad Cover Mini" && (
                <>
                  <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Detail Harga - Bad Cover Mini
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex justify-between border-b pb-2">
                      <span>Sprei Minisize (5 Jam)</span>
                      <span className="font-semibold text-blue-600">Rp 15.000</span>
                    </li>
                  </ul>
                </>
              )}

              {/* Tombol Tutup */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
