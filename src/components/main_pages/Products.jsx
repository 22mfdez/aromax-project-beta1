import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import fruit1 from "../../assets/divain1.avif";
import fruit2 from "../../assets/divain2.avif";
import fruit3 from "../../assets/divain3.avif";
import fruit4 from "../../assets/divain4.avif";
import fruit5 from "../../assets/divain5.avif";
import fruit6 from "../../assets/divain6.avif";
import fruit7 from "../../assets/divain7.avif";
import fruit8 from "../../assets/divain8.avif";

const App = () => {
  const list = [
    {
      title: "Orange",
      img: fruit1,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: fruit2,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: fruit3,
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: fruit4,
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: fruit5,
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: fruit6,
      price: "$8.00",
    },
    {
      title: "Banana",
      img: fruit7,
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: fruit8,
      price: "$12.20",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center my-4 cards-parfum">LOS MEJORES PERFUMES</h1>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card
              key={index}
              shadow="sm"
              onClick={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <div className="mb-5 mt-2.5 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    5.0
                  </span>
                </div>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
