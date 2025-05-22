"use client";
import CarFiltersOption from "@/components/Home/CarFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

interface Car {
  id: string;
  name: string;
  carBrand: string;
  price: number;
  carType: string;
  carAvg: number;
  seat: number;
  image?: {
    url: string;
  };
}

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [carsOrgList, setCarsOrgList] = useState<Car[]>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    try {
      const cars = await getCarsList();
      setCarsList(cars || []);
      setCarsOrgList(cars || []);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setCarsList([]);
      setCarsOrgList([]);
    }
  };

  const filterCarList = (brand: string) => {
    if (!brand) {
      setCarsList(carsOrgList);
      return;
    }
    const filterList = carsOrgList.filter((item) => item.carBrand === brand);
    setCarsList(filterList);
  };

  const orderCarList = (order: number) => {
    const sortedData = [...carsList].sort((a, b) =>
      order === 1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider value={{showToastMsg, setShowToastMsg}}>
        <Hero />
        <SearchInput />
        <CarFiltersOption
          carsList={carsOrgList}
          orderCarList={orderCarList}
          setBrand={filterCarList}
        />
        <CarsList carsList={carsList} />
        {showToastMsg?<ToastMsg msg={'Booking Created Successfully!'} />:null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
