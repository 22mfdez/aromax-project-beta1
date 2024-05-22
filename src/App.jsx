import React from "react";

import ReactDOM from "react-dom";

import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/navigation_pages/Navbar";
import Home from "./components/main_pages/Home";
import About from "./components/main_pages/About";

import Genres from "./components/main_pages/Genres";
import Footer from "./components/main_pages/Footer";
import Cards from "./components/main_pages/Cards";
import Info from "./components/small_components/Info";
import Newsletter from "./components/small_components/Newsletter";
import Carrito from "./components/main_pages/Carrito";
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

function App() {
  return (
    <div>
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>
      </main>

      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <Genres />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <Cards title="oriental" source={oriental} alt="oriental" />
        <Cards title="biscuit" source={biscuit} alt="biscuit" />
        <Cards title="citric" source={citric} alt="citric" />
        <Cards title="floral" source={floral} alt="floral" />
        <Cards title="fruit" source={fruit} alt="fruit" />
        <Cards title="madera" source={madera} alt="madera" />
      </div>
      <div class="flex justify-center items-center">
        <Info />
      </div>
      <div className="my-8">
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;
