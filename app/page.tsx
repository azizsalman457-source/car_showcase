import Image from "next/image";
import { CustomButton,
         CustomFilters,
         Hero,
         Navbar,
         SearchBar,
         CarCard,
         CarDetails,
         } from "@/components";
import { SearchParams } from "next/dist/server/request/search-params";         
import { fetchCar } from "@/utils";         
import { manufacturers } from "@/constants";
import { fuels,yearsOfProduction } from "@/constants";


export default async function Home({searchParams}){
  const resolvedSearchParams = await searchParams;
  const allCars = await fetchCar(
    {
      manufacturer:resolvedSearchParams.manufacturer || '',
  year:resolvedSearchParams.year || 2022,
  fuel:resolvedSearchParams.fuel || '',
  model:resolvedSearchParams.model || '',
    }
  );
  

  console.log("Cars:", allCars);

  const isDataEmpty=!Array.isArray(allCars) || allCars.length<1|| !allCars;
  // return (
//     <main className="overflow-hidden bg-white">
//       <Navbar />
//       {/* This outer bounds wrapper ensures nothing expands past 1440px on giant screens */}
//       <div className="max-w-[1440px] mx-auto relative ">
//         <Hero />
//         <div className="mt-12 padding-x padding-y text-[20px]
//         max-width" id="discover">
//           <h1 className="text-x1 text-2xl text-[52px] font-extrabold ">
//             Car Catalogue
//           </h1>
//           <p>Explore the cars that you might like</p>
//         </div>
//         <div className="home__filters">
//           <SearchBar/>
//           <div
//            className="home__filter-container">
//             <CustomFilters title="fuel"></CustomFilters>
//             <CustomFilters title="year"></CustomFilters>
//           </div>
//         </div>

//         {!isDataEmpty?
//         (
//           <section>
//             <div className="home__cars-wrapper"></div>
//             {
//               allCars?.map((car)=>(
//               <CarCard 
//                car={car}
//                key={`${car.make}-${car.model}-${car.year}`}
//                />))
//             }
//           </section>

//         ):
//         (
//           <div className="home__error-container">
//             <h2 className="text-black text-xl">oops, no result</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }
return(
  <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilters title='fuel' options={fuels} />
            <CustomFilters title='year'  options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard 
               car={car}
               key={`${car.make}-${car.model}-${car.year}`}
               />
              ))}
            </div>
{/* 
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            /> */}
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>


)
}