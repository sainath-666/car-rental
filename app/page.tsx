"use client";
import CarFiltersOption from "@/components/Home/CarFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any[]>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    try {
      const cars = await getCarsList();
      setCarsList(cars || []);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setCarsList([]);
    }
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarFiltersOption />
      <CarsList carsList={carsList} />
    </div>
  );
}
