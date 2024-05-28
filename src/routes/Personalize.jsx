import { Button, Tooltip } from "@nextui-org/react";
import { Select } from "@nextui-org/react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Spotlight } from "../components/ui/Spotlight";
import { Progress } from "@nextui-org/react";

// Componente de selección de notas
function Step1({ onNext }) {
  const [headNote, setHeadNote] = useState("");
  const [heartNote, setHeartNote] = useState("");
  const [baseNote, setBaseNote] = useState("");

  return (
    <>
      <div className="h-[20rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Crea <br /> tu propio perfume
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Crea en tan solo unos pasos un perfume a tu medida, con tus acordes
            favoritos.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Progress
          aria-label="Loading..."
          value={60}
          className="max-w-md my-6"
        />
        <h2 className="text-xl font-semibold mb-4">
          Paso 1: Selección de Notas
        </h2>
        <div className="w-full max-w-md">
          <Select
            placeholder="Selecciona una nota de cabeza"
            selectionMode="multiple"
            className="mt-4"
          />
          <Select
            placeholder="Selecciona una nota de corazón"
            selectionMode="multiple"
            className="mt-4"
          />
          <Select
            placeholder="Selecciona una nota de base"
            selectionMode="multiple"
            className="mt-4"
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
      </div>
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-semibold mb-4">
        Paso 2: Personalización del Perfume
      </h2>
      <div className="w-full max-w-md">
        <Select
          value={selectedBottle}
          selectionMode="multiple"
          className=" mt-4"
          onChange={(value) => setSelectedBottle(value)}
          placeholder="Selecciona un frasco"
          options={[
            { label: "Frasco 1", value: "frasco1" },
            { label: "Frasco 2", value: "frasco2" },
            { label: "Frasco 3", value: "frasco3" },
          ]}
        />
        <Input
          value={size}
          className=" mt-4"
          onChange={(e) => setSize(e.target.value)}
          placeholder="Ingrese el tamaño en ml"
          type="number"
        />
        <Input
          value={name}
          className=" mt-4"
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese el nombre"
        />
        <Select
          value={bottleShape}
          className=" mt-4"
          onChange={(value) => setBottleShape(value)}
          label="Forma del Frasco"
          placeholder="Seleccionar"
          options={[
            { label: "Spray", value: "spray" },
            { label: "Gotero", value: "gotero" },
            { label: "Otro", value: "otro" },
          ]}
        />
        <Checkbox
          checked={refillable}
          onChange={() => setRefillable(!refillable)}
          label="Opción a Recargable"
        />
      </div>
      <Button
        onClick={() =>
          onCustomize({ selectedBottle, size, name, bottleShape, refillable })
        }
        className="mt-4"
      >
        Siguiente
      </Button>
    </div>
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
    <div>
      {step === 1 && <Step1 onNext={handleNextStep} />}
      {step === 2 && <Step2 onCustomize={handleCustomize} />}
      {/* Agregar más pasos según sea necesario */}
      {/* Componente de recomendación de perfumes */}
      {/* Componente de confirmación y finalización */}
    </div>
  );
}

export default Personalize;
