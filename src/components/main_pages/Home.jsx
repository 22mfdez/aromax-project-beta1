// src/components/Home.jsx
import React from "react";
import creando from "../../assets/creando.mp4";

import FlipWords from "../ui/FlipWords";

const Home = () => {
  const words = ["Descubre", "Crea", "Modifica", "Personaliza", "Comparte"];

  return (
    <header className="relative min-h-screen grid place-items-center mb-8">
      <video
        src={creando}
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      ></video>
      <div className="absolute w-full h-full flex flex-col justify-center items-center gap-[70px] text-center text-white">
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-5xl mx-auto font-bold text-white dark:text-neutral-400">
            <FlipWords words={words} /> <br />
            el arte de la perfumería a tu medida.
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
