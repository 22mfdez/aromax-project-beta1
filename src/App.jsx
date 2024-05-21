import React from "react";
import { Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/navigation_pages/Navbar";
import Home from "./components/main_pages/Home";
import About from "./components/main_pages/About";
import Products from "./components/main_pages/Products";
import Review from "./components/main_pages/Review";
import Footer from "./components/main_pages/Footer";
import Cards from "./components/main_pages/Cards";

import Banner from "./components/small_components/Banner";
// fonts
import "./fonts/DidotLTStd-BoldItalic.ttf";
import "./fonts/DidotLTStd-BoldItalic.woff";
import "./fonts/DidotLTStd-BoldItalic.woff2";

// images
import oriental from "./assets/oriental.jpg";
import biscuit from "./assets/biscuit.jpg";
import citric from "./assets/citric.jpg";
import floral from "./assets/floral.jpg";
import fruit from "./assets/fruit2.jpg";
import madera from "./assets/madera.png";

import bannerImage from "./assets/oriental.jpg"; // Añade una imagen de banner

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <NextUIProvider>
        <Navbar />
        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>
        </main>

        <div>
          <div className="my-8">
            <Banner
              image={bannerImage}
              title="Ofertas Especiales"
              subtitle="Descubre nuestras ofertas exclusivas de este mes"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <Cards title="oriental" source={oriental} alt="oriental" />
            <Cards title="biscuit" source={biscuit} alt="biscuit" />
            <Cards title="citric" source={citric} alt="citric" />
            <Cards title="floral" source={floral} alt="floral" />
            <Cards title="fruit" source={fruit} alt="fruit" />
            <Cards title="madera" source={madera} alt="madera" />
          </div>

          <div id="producto">
            <Products />
          </div>

          <div id="review">
            <Review />
          </div>
          <Footer />
        </div>
      </NextUIProvider>
    </DndProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;
