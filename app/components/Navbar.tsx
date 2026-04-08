"use client";

import { useState } from "react";
import { Menu, Search, Heart, User, ShoppingBag, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const categorias = [
    { nombre: "Todos los productos", href: "/productos" },
    { nombre: "Aros", href: "/productos/aros" },
    { nombre: "Collares", href: "/productos/collares" },
    { nombre: "Anillos", href: "/productos/anillos" },
    { nombre: "Alianzas", href: "/productos/alianzas" },
    { nombre: "Novedades — Imprint Kits", href: "/productos/imprint-kits" },
  ];

  return (
    <>
      <nav className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="mx-auto flex items-center justify-between px-6 py-4">

          <button
            onClick={() => setMenuAbierto(true)}
            className="p-1 hover:opacity-60 transition-opacity cursor-pointer"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-2xl tracking-[0.3em] font-light uppercase">
              INÈA
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button className="p-1 hover:opacity-60 transition-opacity cursor-pointer">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="p-1 hover:opacity-60 transition-opacity hidden sm:block cursor-pointer">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button className="p-1 hover:opacity-60 transition-opacity cursor-pointer">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button className="p-1 hover:opacity-60 transition-opacity relative cursor-pointer">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

        </div>
      </nav>

      {menuAbierto && (
        <div
          onClick={() => setMenuAbierto(false)}
          className="fixed inset-0 bg-black/40 z-50"
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${menuAbierto ? "translate-x-0" : "-translate-x-full"}`}>

        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-lg tracking-[0.3em] font-light uppercase">INÈA</span>
          <button
            onClick={() => setMenuAbierto(false)}
            className="p-1 hover:opacity-60 transition-opacity"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="px-6 py-6 flex flex-col gap-1">
          {categorias.map((categoria) => (
            <Link
              key={categoria.href}
              href={categoria.href}
              onClick={() => setMenuAbierto(false)}
              className="py-3 text-sm tracking-widest uppercase border-b border-gray-50 hover:opacity-50 transition-opacity font-light"
            >
              {categoria.nombre}
            </Link>
          ))}
        </nav>

      </div>
    </>
  );
}