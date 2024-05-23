import { CheckTreePicker } from "rsuite";
import { useEffect, useState } from "react";
import perfumes from "../assets/final.json";

export default function Personalize() {
  const fragances = [];
  const headNotes = [];
  const alreadyFragances = [];
  const alreadyHeadNotes = [];

  const [finalHeadNotes, setFinalHeadNotes] = useState();
  const [finalFragances, setFinalFragances] = useState();

  useEffect(() => {
    perfumes.map((item) => {
      item.fraganceType.map((fragance) => {
        fragances.push(fragance.trim());
      });
    });

    perfumes.map((item) => {
      item.headNotes.map((headNote) => {
        headNotes.push(headNote.trim());
      });
    });

    const x = headNotes
      .map((item) => {
        if (alreadyHeadNotes.includes(item)) {
          return null;
        } else {
          if (item === "") return null;
          alreadyHeadNotes.push(item);
          return {
            label: item,
            value: item,
          };
        }
      })
      .filter((item) => item !== null)
      .sort((a, b) => a.label.localeCompare(b.label));

    setFinalHeadNotes(x);

    const y = fragances
      .map((item) => {
        if (alreadyFragances.includes(item)) {
          return null;
        } else {
          if (item === "") return null;
          alreadyFragances.push(item);
          return {
            label: item,
            value: item,
          };
        }
      })
      .filter((item) => item !== null)
      .sort((a, b) => a.label.localeCompare(b.label));

    setFinalFragances(y);
  }, []);

  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-5xl font-extrabold dark:text-white">
        Flowbite
        <small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          This is secondary text
        </small>
      </h1>
      <CheckTreePicker
        style={{ width: 150 }}
        defaultExpandAll
        data={[
          {
            label: "Fragancia",
            value: "fraganceType",
            children: finalFragances,
          },
          {
            label: "Notas de Salida",
            value: "headNotes",
            children: finalHeadNotes,
          },
          {
            label: "Notas de Corazón",
            value: "heartNotes",
            children: finalHeadNotes,
          },
          {
            label: "Notas de Fondo",
            value: "baseNotes",
            children: finalHeadNotes,
          },
        ]}
        placement={"rightStart"}
        placeholder={"rightStart"}
        height={320}
      />
    </div>
  );
}
