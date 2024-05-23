import React from "react";
import Sidebar from "../components/small_components/Accordion";
import Banner from "../components/small_components/Banner";
import Products from "../components/main_pages/Products";
import perfumes from "../assets/final.json";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState } from "react";

export default function ProductsPage() {
  const [filteredValues, setFilteredValues] = useState(perfumes);

  return (
    <>
      <Banner />
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 ml-64">
          <div id="producto">
            <Products />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="cards-parfum">CATÁLOGO</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col catalog-grid">
              {filteredValues.map((item, index) => (
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
    </>
  );
}
