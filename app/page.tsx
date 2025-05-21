"use client";
import CarFiltersOption from "@/components/Home/CarFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect } from "react";

export default function Home() {
  const [carsList,setCarsList]
  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async () => {
    const result = await getCarsList();
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarFiltersOption />
    </div>
  );
}
