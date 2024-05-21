import React from "react";
import Navbar from "../navigation_pages/Navbar"; // Importamos el Navbar
import img from "../../assets/about.jpg"; // Importamos la imagen de ejemplo
import Button from "../small_components/Button";

const About = () => {
  return (
    <>
      <Navbar /> {/* Incluimos el Navbar en la página */}
      <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
          Quienes Somos
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-2/4">
            <img className="rounded-lg h-auto" src={img} alt="img" />
          </div>
          <div className="w-full lg:w-2/4 p-4 space-y-3">
            <h2 className="font-semibold text-3xl">
              ¿Qué hace nuestra marca tan especial?
            </h2>
            <p>
              En nuestra empresa, creemos que la esencia de un perfume va más
              allá de su aroma; es una experiencia sensorial que cuenta una
              historia única. Nuestra pasión por la perfumería nos impulsa a
              buscar las mejores materias primas, combinando tradición y
              modernidad para crear fragancias que evocan emociones y recuerdos
              inolvidables.
            </p>
            <p>
              Nos dedicamos a innovar constantemente, trabajando de la mano con
              expertos perfumistas y artistas creativos para desarrollar
              colecciones que reflejen la diversidad y riqueza de nuestras
              culturas. Cada botella es un reflejo de nuestro compromiso con la
              calidad y la artesanía, diseñada para ser no solo un accesorio,
              sino una extensión de la personalidad de quien la lleva.
            </p>

            <Button title="Leer más" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
