export default function Pengurus() {

  const data = {
    inti: [
      {
        nama: "Nama Ketua",
        jabatan: "Ketua",
        foto: "/pengurus/ketua.jpg",
      },
      {
        nama: "Nama Wakil",
        jabatan: "Wakil Ketua",
        foto: "/pengurus/wakil.jpg",
      },
    ],

    liturgi: [
      {
        nama: "Nama Liturgi 1",
        jabatan: "Koordinator Liturgi",
        foto: "/pengurus/liturgi1.jpg",
      },
    ],

    humas: [
      {
        nama: "Nama Humas",
        jabatan: "Koordinator Humas",
        foto: "/pengurus/humas.jpg",
      },
    ],
  };

  const renderSection = (title: string, members: any[]) => (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {members.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition"
          >
            <img
              src={item.foto}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />

            <h3 className="font-semibold">{item.jabatan}</h3>
            <p className="text-sm opacity-70">{item.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-10 text-center bg-gray-50">

      <h1 className="text-3xl font-bold mb-12">
        Susunan Pengurus
      </h1>

      {renderSection("Ketua & Inti", data.inti)}
      {renderSection("Divisi Liturgi", data.liturgi)}
      {renderSection("Divisi Humas", data.humas)}

    </div>
  );
}