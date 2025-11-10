"use client";
import { useState } from "react";
import { Truck, Clock, Zap, Bed, Wind, Shirt } from "lucide-react";

type PricingItem = {
  name: string;
  price: string;
};

type PriceGroup = PricingItem[] | Record<string, PricingItem[]>;

const pricingData: Record<string, PriceGroup> = {
  kiloan: [{ name: "Reguler (3 hari)", price: "Rp 6.000/kg" }],
  express: [
    { name: "Express 1 hari", price: "Rp 10.000/kg" },
    { name: "Express 2 hari", price: "Rp 8.000/kg" },
    { name: "Setrika Saja 1 hari", price: "Rp 7.000/kg" },
  ],
  kilat: [
    { name: "Kilat 5 Jam setrika", price: "Rp 11.000/kg" },
    { name: "Kilat 5 Jam komplit", price: "Rp 13.000/kg" },
    { name: "Kilat 5 Jam cuci kering lipat", price: "Rp 10.500/kg" },
  ],
  sprei: [
    { name: "Sprei Single (Normal)", price: "Rp 10.000/kg" },
    { name: "Sprei Double (Normal)", price: "Rp 13.000/kg" },
    { name: "Sprei kingsize (Normal)", price: "Rp 17.000/kg" },
    { name: "Sprei Single (Rumbai)", price: "Rp 12.000/kg" },
    { name: "Sprei Double (Rumbai)", price: "Rp 15.000/kg" },
    { name: "Sprei kingsize (Rumbai)", price: "Rp 19.000/kg" },
  ],
  Gordyn: [
    { name: "Gordyn Tipis (Normal)", price: "Rp 12.500/m²" },
    { name: "Gordyn Tebal (Normal)", price: "Rp 15.000/m²" },
    { name: "Gordyn Tipis (Rumbai)", price: "Rp 25.000/m²" },
    { name: "Gordyn Tebal (Rumbai)", price: "Rp 30.000/m²" },
  ],
  Harga_Satuan: {
    Aksesoris: [
      { name: "Topi", price: "Rp 15.000" },
      { name: "Boneka", price: "Rp 25.000" },
      { name: "Sajadah", price: "Rp 15.000" },
    ],
    "Aksesoris Rumah": [
      { name: "Keset", price: "Rp 10.000" },
      { name: "Bantal/Guling", price: "Rp 25.000" },
      { name: "Kasur lipat", price: "Rp 30.000" },
      { name: "Karpet/m2", price: "Rp 15.000" },
      { name: "Gordyn/m2", price: "Rp 12.000" },
    ],
    Pakaian: [
      { name: "Kaos", price: "Rp 15.000" },
      { name: "Celana", price: "Rp 15.000" },
      { name: "Mukena", price: "Rp 10.000" },
      { name: "Jilbab", price: "Rp 10.000" },
      { name: "Batik", price: "Rp 25.000" },
      { name: "Jas", price: "Rp 30.000" },
      { name: "Dress", price: "Rp 15.000" },
      { name: "Baju Tidur Wanita", price: "Rp 15.000" },
      { name: "Dasi/Rompi", price: "Rp 15.000" },
    ],
    Sprei: [
      { name: "Sprei Single", price: "Rp 13.000" },
      { name: "Sprei Double", price: "Rp 17.000" },
      { name: "Sprei kingsize", price: "Rp 22.000" },
    ],
    Selimut: [
      { name: "Selimut Single", price: "Rp 15.000" },
      { name: "Selimut Double", price: "Rp 20.000" },
      { name: "Selimut kingsize", price: "Rp 25.000" },
    ],
    "Bed Cover": [
      { name: "Bed cover single", price: "Rp 25.000" },
      { name: "Bed cover Double", price: "Rp 30.000" },
      { name: "Bed cover kingsize", price: "Rp 40.000" },
    ],
  },
};

type Service = {
  title: string;
  description: string;
  price: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  key: keyof typeof pricingData;
};

const services: Service[] = [
  {
    title: "Laundry Biasa",
    description: "Cocok untuk pakaian sehari-hari dengan harga terjangkau.",
    price: "Mulai Rp 6.000/kg",
    color: "blue",
    icon: Truck,
    key: "kiloan",
  },
  {
    title: "Laundry Kilat",
    description: "Selesai hanya 1–2 hari, pakaian cepat rapi dan bersih.",
    price: "Mulai Rp 12.000/kg",
    color: "blue",
    icon: Clock,
    key: "kilat",
  },
  {
    title: "Laundry Bed Cover Besar",
    description: "Butuh super cepat? Selesai dalam 5 jam saja!",
    price: "Mulai Rp 35.000/kg",
    color: "blue",
    icon: Zap,
    key: "sprei",
  },
  {
    title: "Laundry Bed Cover Kecil",
    description: "Butuh super cepat? Selesai dalam 5 jam saja!",
    price: "Mulai Rp 20.000/kg",
    color: "blue",
    icon: Bed,
    key: "sprei",
  },
  {
    title: "Laundry Bed Cover Sedang",
    description: "Butuh super cepat? Selesai dalam 5 jam saja!",
    price: "Mulai Rp 25.000/kg",
    color: "blue",
    icon: Wind,
    key: "sprei",
  },
  {
    title: "Harga Satuan",
    description: "Butuh super cepat? Selesai dalam 5 jam saja!",
    price: "Mulai Rp 10.500/kg",
    color: "blue",
    icon: Shirt,
    key: "Harga_Satuan",
  },
];

export default function Pricing() {
  const [openModal, setOpenModal] = useState<keyof typeof pricingData | null>(
    null
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const currentData = openModal ? pricingData[openModal] : null;

  const renderTable = (data: PricingItem[]) => (
    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center py-2 border-b border-gray-200"
        >
          <span className="text-gray-700 max-w-[60%]">{item.name}</span>
          <span className="font-semibold text-blue-600">{item.price}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="layanan"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Pilihan layanan fleksibel untuk kebutuhan laundry Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                setOpenModal(service.key);
                setSelectedSubCategory("");
              }}
              className="cursor-pointer bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`bg-${service.color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-6`}
              >
                <service.icon className={`h-8 w-8 text-${service.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-blue-600 font-bold text-lg">{service.price}</p>
              <p className="text-sm text-blue-500 mt-3 italic">
                Klik untuk lihat detail harga
              </p>
            </div>
          ))}
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              {services.find((s) => s.key === openModal)?.title}
            </h3>

            {openModal === "Harga_Satuan" &&
            currentData &&
            typeof currentData === "object" &&
            !Array.isArray(currentData) ? (
              <div>
                <select
                  className="w-full border p-2 rounded-md mb-3"
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                >
                  <option value="">Pilih Kategori</option>
                  {Object.keys(
                    currentData as Record<string, PricingItem[]>
                  ).map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>

                {selectedSubCategory &&
                  renderTable(currentData?.[selectedSubCategory] || [])}
              </div>
            ) : (
              Array.isArray(currentData) && renderTable(currentData)
            )}
          </div>
        </div>
      )}
    </section>
  );
}
