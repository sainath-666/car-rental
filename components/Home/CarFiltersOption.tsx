import React, { useEffect, useState } from "react";

interface Car {
  carBrand: string;
  price: number;
}

interface CarFiltersOptionProps {
  carsList?: Car[];
  setBrand: (brand: string) => void;
  orderCarList: (order: number) => void;
}

function CarFiltersOption({
  carsList,
  setBrand,
  orderCarList,
}: CarFiltersOptionProps) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsList?.length) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const brandSet = new Set<string>();
    carsList?.forEach((element: Car) => {
      brandSet.add(element.carBrand);
    });
    setBrandList(Array.from(brandSet));
  };

  const handlePriceOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "lowToHigh") {
      orderCarList(1);
    } else if (value === "highToLow") {
      orderCarList(-1);
    }
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setBrand(value);
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px]">Car Catalog</h2>
        <h2>Explore Our Cars You Might Like</h2>
      </div>
      <div className="flex gap-5">
        <select onChange={handlePriceOrder} defaultValue="" className="select">
          <option value="" disabled>
            Price
          </option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <select
          onChange={handleBrandChange}
          defaultValue=""
          className="select hidden md:block"
        >
          <option value="" disabled>
            Manufacturer
          </option>
          {brandList.map((brand: string) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CarFiltersOption;
