import React from "react";
import Products from "../components/main_pages/Products";
import perfumes from '../assets/final.json';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function ProductsPage() {
  return (
      <div>
          <div id="producto">
              <Products/>
          </div>
          <div className='flex items-center justify-center'>
              <h1 className="cards-parfum">CATÁLOGO</h1>
          </div>
          <div className='flex items-center justify-center'>
              <div className="flex flex-col catalog-grid">
                  {perfumes.map((item, index) => (
                      <Card
                          key={index}
                          shadow="sm"
                          className='w-[200px]'
                          onClick={() => console.log("item pressed")}
                      >
                          <CardBody className="p-0">
                              <div className='flex items-center justify-center py-1'>
                                  <b>{item.brand}</b>
                              </div>
                              <div className='flex justify-center items-center p-1'>
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
                                      <div className='flex flex-col gap-2'>
                                          <b>{item.name}</b>
                                          <p>{item.description}</p>
                                          <p className="text-default-500">${item.price}</p>
                                      </div>
                                  </div>
                                  {/*              <div className="flex">*/}
                                  {/*                  <div className="flex">*/}
                                  {/*                      {[...Array(5)].map((_, i) => (*/}
                                  {/*                          <svg*/}
                                  {/*                              key={i}*/}
                                  {/*                              className="h-5 w-5 text-yellow-300"*/}
                                  {/*                              fill="currentColor"*/}
                                  {/*                              viewBox="0 0 20 20"*/}
                                  {/*                              xmlns="http://www.w3.org/2000/svg"*/}
                                  {/*                          >*/}
                                  {/*                              <path*/}
                                  {/*                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>*/}
                                  {/*                          </svg>*/}
                                  {/*                      ))}*/}
                                  {/*                  </div>*/}
                                  {/*                  <span*/}
                                  {/*                      className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">*/}
                                  {/*  5.0*/}
                                  {/*</span>*/}
                                  {/*              </div>*/}
                              </div>
                          </CardFooter>
                      </Card>
                  ))}
              </div>
          </div>
      </div>
  );
}
