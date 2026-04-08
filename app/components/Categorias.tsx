import Link from "next/link";

const categorias = [
  {
    nombre: "Anillos",
    href: "/productos/anillos",
    imagen: "/anillo7.png",
  },
  {
    nombre: "Collares",
    href: "/productos/collares",
    imagen: "/collares.png",
  },
  {
    nombre: "Imprint Kits",
    href: "/productos/imprint-kits",
    imagen: "https://sansarushop.com/cdn/shop/files/REELS_LANZAMIENTO_HUELLAS.jpg?v=1761299593&width=3200",
  },
];

export default function Categorias() {
  return (
    <section className="w-full mx-auto px-6 py-16">

      <h2 className="text-center text-xs tracking-[0.4em] uppercase font-light mb-12 text-gray-500">
        Explorar por categoría
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {categorias.map((cat) => (
          <Link key={cat.href} href={cat.href} className="group relative overflow-hidden">

            {/* Imagen */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={cat.imagen}
                alt={cat.nombre}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Nombre encima */}
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-white text-sm tracking-[0.3em] uppercase font-light">
                {cat.nombre}
              </span>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}