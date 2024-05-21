// src/components/Home.jsx
import React from "react";
import creando from "../../assets/creando.mp4";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const Home = () => {
  const [scope, animate] = useAnimate();
  const words = "Descubre el arte de la perfumería a medida.";

  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="font-bold text-5xl title opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

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
        <h1
          className="text-white max-w-md justify-center items-center
        text-center logo-first text-8xl border-b-2 border-white pb-3"
        >
          AromaX
        </h1>
        {renderWords()}
        <Button radius="full" size="lg">
          Empezar
        </Button>
      </div>
    </header>
  );
};

export default Home;
