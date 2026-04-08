"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80",
    titulo: "Nueva Colección",
    subtitulo: "Invierno 2026",
    cta: "Descubrí la colección",
    href: "/productos",
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1600&q=80",
    titulo: "Aros Exclusivos",
    subtitulo: "Diseños únicos para vos",
    cta: "Ver aros",
    href: "/productos/aros",
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80",
    titulo: "Collares & Dijes",
    subtitulo: "Elegancia en cada detalle",
    cta: "Ver collares",
    href: "/productos/collares",
  },
];

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      loop
      className="w-full h-[85vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">

            <img
              src={slide.imagen}
              alt={slide.titulo}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-16 left-12 text-white">
              <p className="text-sm tracking-[0.3em] uppercase mb-2 font-light">
                {slide.subtitulo}
              </p>
              <h2 className="text-5xl font-light uppercase tracking-widest mb-6">
                {slide.titulo}
              </h2>
              <a
                href={slide.href}
                className="inline-block border border-white text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
              >
                {slide.cta}
              </a>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}