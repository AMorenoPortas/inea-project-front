import Link from "next/link";


const productos = [
  {
    id: 1,
    nombre: "Anillo INÈA",
    precio: 45000,
    imagen: "/anillo4.png",
    href: "/productos/anillo-solitario",
    nuevo: true,
  },
  {
    id: 2,
    nombre: "Imprint Kits",
    precio: 62000,
    imagen: "/imprint.kit.png",
    nuevo: false,
  },
  {
    id: 3,
    nombre: "Brazaletes",
    precio: 28000,
    imagen: "brazaletes.png",
    nuevo: false,
  },
  {
    id: 4,
    nombre: "Solitario Clásico",
    precio: 55000,
    imagen: "/solitario.png",
    nuevo: true,
  },
];

export default function ProductosDestacados() {
  return (
    <section className="w-full mx-auto px-6 py-16">

      <h2 className="text-center text-xs tracking-[0.4em] uppercase font-light mb-12 text-gray-500">
        Más vendidos
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div key={producto.id} className="group cursor-pointer">

            {/* Imagen */}
            <div className="relative aspect-square overflow-hidden bg-gray-50 mb-4">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Badge nuevo */}
              {producto.nuevo && (
                <span className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-widest uppercase px-2 py-1">
                  Nuevo
                </span>
              )}
            </div>

            {/* Info */}
            <p className="text-xs tracking-widest uppercase font-light text-gray-800 mb-1">
              {producto.nombre}
            </p>
            <p className="text-sm text-gray-500 font-light">
              ${producto.precio.toLocaleString("es-AR")}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}