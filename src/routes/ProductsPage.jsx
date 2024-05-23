import Products from "../components/main_pages/Products";
import perfumes from '../assets/final.json';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {useCallback, useEffect, useMemo, useState} from "react";
import {CheckTree} from "rsuite";

export default function ProductsPage() {

    const fragances = [];
    const headNotes = [];
    const alreadyMarks = [];
    const alreadyFragances = [];
    const alreadyHeadNotes = [];

    const [finalHeadNotes, setFinalHeadNotes] = useState()
    const [finalFragances, setFinalFragances] = useState()
    const [marcas, setMarcas] = useState()


    const [selectedValue, setSelectedValue] = useState([])
    const [filteredValues, setFilteredValues] = useState(perfumes)

    useEffect(() => {
        perfumes.map((item) => {
            item.fraganceType.map((fragance) => {
                fragances.push(fragance.trim());
            })
        })

        perfumes.map((item) => {
            item.headNotes.map((headNote) => {
                headNotes.push(headNote.trim());
            })
        })

        const x = headNotes.map((item) => {
            if (alreadyHeadNotes.includes(item)) {
                return null;
            } else {
                if (item === '') return null;
                alreadyHeadNotes.push(item);
                return {
                    label: item,
                    value: item,
                }
            }
        }).filter((item) => item !== null)
            .sort((a, b) => a.label.localeCompare(b.label));

        setFinalHeadNotes(x);

        const y = fragances.map((item) => {
            if (alreadyFragances.includes(item)) {
                return null;
            } else {
                if (item === '') return null;
                alreadyFragances.push(item);
                return {
                    label: item,
                    value: item,
                }
            }
        }).filter((item) => item !== null)
            .sort((a, b) => a.label.localeCompare(b.label));

        setFinalFragances(y);

        const z = perfumes.map((item) => {
            const brand = item.brand;
            if (alreadyMarks.includes(brand)) {
                return null;
            }
            alreadyMarks.push(brand);
            return {
                label: brand,
                value: brand,
            }
        }).filter((item) => item !== null)
            .sort((a, b) => a.label.localeCompare(b.label));

        setMarcas(z);
    }, []);



    function handleOnSelect(activeNode, value) {
        if (value.length === 0) {
            return;
        } else {
            const filter =   perfumes.filter((item) => {
                const fragancesType = item.fraganceType;
                const headNotes = item.headNotes;
                const brand = item.brand;
                const fraganceMatch = fragancesType.some((fragance) => value.includes(fragance.trim()));
                const headNotesMatch = headNotes.some((headNote) => value.includes(headNote.trim()));
                const brandMatch = value.includes(brand);
                return fraganceMatch || headNotesMatch || brandMatch;
            });
            setFilteredValues(filter);
        }
    }


    return (
        <div>
            <div id="producto">
                <Products/>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <CheckTree onSelect={handleOnSelect} data={[
                        {
                            label: 'Género',
                            value: 'sex',
                            children: [
                                {label: 'Hombre', value: 'Hombre'},
                                {label: 'Mujer', value: 'Mujer'}
                            ]
                        },
                        {
                            label: 'Marca',
                            value: 'Brand',
                            children: marcas
                        },
                        {
                            label: 'Fragancia',
                            value: 'fraganceType',
                            children: finalFragances
                        },
                        {
                            label: 'Notas de Salida',
                            value: 'headNotes',
                            children: finalHeadNotes
                        },
                        {
                            label: 'Notas de Corazón',
                            value: 'heartNotes',
                            children: finalHeadNotes
                        },
                        {
                            label: 'Notas de Fondo',
                            value: 'baseNotes',
                            children: finalHeadNotes
                        }
                    ]} searchable showIndentLine/>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <h1 className="cards-parfum">CATÁLOGO</h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className="flex flex-col catalog-grid">
                            {filteredValues.map((item, index) => (
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
