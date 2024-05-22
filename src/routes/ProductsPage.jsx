import Products from "../components/main_pages/Products";
import perfumes from "../assets/final.json";
import Banner from "../components/small_components/Banner";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CheckTree } from "rsuite";

export default function ProductsPage() {
  const alreadyMarks = [];
  const fragances = [];
  const headNotes = [];
  const alreadyFragances = [];
  const alreadyHeadNotes = [];

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

  let finalHeadNotes = headNotes
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

  let finalFragances = fragances
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

  let marcas = perfumes
    .map((item) => {
      const brand = item.brand;
      if (alreadyMarks.includes(brand)) {
        return null;
      }
      alreadyMarks.push(brand);
      return {
        label: brand,
        value: brand,
      };
    })
    .filter((item) => item !== null)
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div>
      <Banner />
      <div id="producto">
        <Products />
      </div>
      <div className="grid grid-cols-2">
        <div>
          <CheckTree
            data={[
              {
                label: "Género",
                value: "sex",
                children: [
                  { label: "Hombre", value: "Hombre" },
                  { label: "Mujer", value: "Mujer" },
                ],
              },
              {
                label: "Marca",
                value: "Brand",
                children: marcas,
              },
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
            searchable
            showIndentLine
          />
        </div>
        <div>
          <div className="flex items-center justify-center">
            <h1 className="cards-parfum">CATÁLOGO</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col catalog-grid">
              {perfumes.map((item, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  className="w-[200px]"
                  onClick={() => console.log("item pressed")}
                >
                  <CardBody className="p-0">
                    <div className="flex items-center justify-center py-1">
                      <b>{item.brand}</b>
                    </div>
                    <div className="flex justify-center items-center p-1">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        className="object-cover h-[200px] z-[0]"
                      />
                    </div>
                  </CardBody>
                  <CardFooter className="text-small">
                    <div className="flex flex-col">
                      <div className="flex gap-2 justify-evenly items-center">
                        <div className="flex flex-col gap-2">
                          <b>{item.name}</b>
                          <p>{item.description}</p>
                          <p className="text-default-500">${item.price}</p>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
