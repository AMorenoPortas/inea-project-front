import HeroCarousel from "./components/HeroCarousel";
import Categorias from "./components/Categorias";
import ProductosDestacados from "./components/ProductosDestacados";

export default function Home() {
  return (
    <main>
      <HeroCarousel/>
      <Categorias/>
      <ProductosDestacados />
    </main>
  );
}