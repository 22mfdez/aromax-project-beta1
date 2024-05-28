import {
  Button,
  Tooltip,
  Select,
  Input,
  Switch,
  Progress,
} from "@nextui-org/react";
import { useState } from "react";
import Confetti from "react-confetti";
import Spotlight from "../components/ui/Spotlight";
import LetterPullup from "../components/ui/Letter-pullup";
import Footer from "../components/main_pages/Footer";

// Componente de selección de notas
function Step1({ onNext }) {
  const [headNote, setHeadNote] = useState("");
  const [heartNote, setHeartNote] = useState("");
  const [baseNote, setBaseNote] = useState("");

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Paso 1: Selección de Notas</h2>
      <div className="w-full max-w-md">
        <Select
          placeholder="Selecciona una nota de cabeza"
          selectionMode="multiple"
          className="mt-4"
          onChange={(value) => setHeadNote(value)}
        />
        <Select
          placeholder="Selecciona una nota de corazón"
          selectionMode="multiple"
          className="mt-4"
          onChange={(value) => setHeartNote(value)}
        />
        <Select
          placeholder="Selecciona una nota de base"
          selectionMode="multiple"
          className="mt-4"
          onChange={(value) => setBaseNote(value)}
        />
      </div>
      <Tooltip content="Recuerda haber elegido bien!">
        <Button
          onClick={() => onNext({ headNote, heartNote, baseNote })}
          className="mt-4"
        >
          Siguiente
        </Button>
      </Tooltip>
    </>
  );
}

// Componente de personalización del perfume
function Step2({ onCustomize }) {
  const [selectedBottle, setSelectedBottle] = useState("");
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [bottleShape, setBottleShape] = useState("");
  const [refillable, setRefillable] = useState(false);

  const handleBottleSelection = (bottle) => {
    setSelectedBottle(bottle);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        Paso 2: Personalización del Perfume
      </h2>
      <div className="w-full max-w-md">
        <div className="flex justify-between mt-4">
          <div
            className={`p-4 cursor-pointer border-2 ${
              selectedBottle === "frasco1"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => handleBottleSelection("frasco1")}
          >
            <img src="/assets/frascos/frasco1.jpg" alt="Frasco 1" />
          </div>
          <div
            className={`p-4 cursor-pointer border-2 ${
              selectedBottle === "frasco2"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => handleBottleSelection("frasco2")}
          >
            <img src="/assets/frascos/frasco2.jpg" alt="Frasco 2" />
          </div>
        </div>
        <Select
          value={size}
          className="mt-4"
          onChange={(value) => setSize(value)}
          placeholder="Seleccione el tamaño"
          options={[
            { label: "30ml", value: "30ml" },
            { label: "50ml", value: "50ml" },
            { label: "100ml", value: "100ml" },
          ]}
        />
        <Input
          value={name}
          className="mt-4"
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese el nombre para grabar"
        />
        <Select
          value={bottleShape}
          className="mt-4"
          onChange={(value) => setBottleShape(value)}
          placeholder="Forma del Frasco"
          options={[
            { label: "Spray", value: "spray" },
            { label: "Gotero", value: "gotero" },
            { label: "Otro", value: "otro" },
          ]}
        />
        <div className="mt-4 flex items-center">
          <Switch
            checked={refillable}
            onChange={() => setRefillable(!refillable)}
            label="Opción a Recargable"
          />
          <label className="ml-2">Recargable</label>
        </div>
      </div>
      <Button
        onClick={() =>
          onCustomize({ selectedBottle, size, name, bottleShape, refillable })
        }
        className="mt-4"
      >
        Siguiente
      </Button>
    </>
  );
}

// Componente principal que renderiza los pasos y maneja la lógica
function Personalize() {
  const [step, setStep] = useState(1);
  const [selectedNotes, setSelectedNotes] = useState({});
  const [customizationData, setCustomizationData] = useState({});

  const handleNextStep = (data) => {
    setSelectedNotes(data);
    setStep(step + 1);
  };

  const handleCustomize = (data) => {
    setCustomizationData(data);
    setStep(step + 1);
  };

  return (
    <>
      <div className="h-[20rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <LetterPullup
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
            words="Crea tu propio perfume"
            delay={0.05}
          />
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Crea en tan solo unos pasos un perfume a tu medida, con tus acordes
            favoritos.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Progress
          aria-label="Loading..."
          value={step === 1 ? 33 : step === 2 ? 66 : 100}
          className="max-w-md my-4"
        />
        <div>
          {step === 1 && <Step1 onNext={handleNextStep} />}
          {step === 2 && <Step2 onCustomize={handleCustomize} />}
          {step === 3 && (
            <div>
              <Confetti width={window.innerWidth} height={window.innerHeight} />
              <h2 className="text-xl font-semibold mb-4">¡Perfume Creado!</h2>
              <Button
                className="mt-4"
                onClick={() => {
                  // Lógica para añadir al carrito
                  console.log(
                    "Añadido al carrito:",
                    selectedNotes,
                    customizationData
                  );
                  alert("Perfume añadido al carrito");
                }}
              >
                Añadir al Carrito
              </Button>
              <Button
                className="mt-4"
                onClick={() => {
                  setStep(1);
                  setSelectedNotes({});
                  setCustomizationData({});
                }}
              >
                Crear Otro Perfume
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Personalize;
