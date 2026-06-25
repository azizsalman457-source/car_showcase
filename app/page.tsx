import Image from "next/image";
import { CustomButton,
         CustomFilters,
         Hero,
         Navbar,
         SearchBar,
         } from "@/components";


export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      {/* This outer bounds wrapper ensures nothing expands past 1440px on giant screens */}
      <div className="max-w-[1440px] mx-auto relative ">
        <Hero />
        <div className="mt-12 padding-x padding-y text-[20px]
        max-width" id="discover">
          <h1 className="text-x1 text-2xl text-[52px] font-extrabold pl-4">
            Car Catalogue
          </h1>
          <p>Explore the cars that you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div
           className="home__filter-container">
            <CustomFilters title="fuel"></CustomFilters>
            <CustomFilters title="year"></CustomFilters>

          </div>
        </div>

      </div>
    </main>
  );
}