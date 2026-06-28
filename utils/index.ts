
import { CarProps } from "@/types";
import { FilterProps } from "@/types";

export async function fetchCar(
    filter:FilterProps
){
    const{manufacturer,year,model,limit,fuel}=filter
    const response= 
    await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
        {headers: {
		'x-rapidapi-key': 'db5fec42damsh9feab874ba1d932p1c1904jsncf213861b168',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
		'Content-Type': 'application/json'}}
    );
    const result = await response.json();
    return result;
}
export const calculateRent=(year:number)=>{
    const city_mpg=10;
    const basePrice=50;
    const milageFactor=0.1;
    const ageFactor=0.05;

    const milageRate=city_mpg*milageFactor;
    const ageRate=(new Date().getFullYear() - year)*ageFactor;

    const rentalRatePerDay= basePrice+milageRate+ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl=(car:CarProps,angle?:string)=>{
   const url=new URL('https://cdn.imagin.studio/getimage');
   const{make, year, model}=car;

   url.searchParams.append('customer','hrjavascript-mastery');
   url.searchParams.append('make',make);
   url.searchParams.append('modelFamily',model.split('')[0]);
   url.searchParams.append('zoomType','fullscreen');
   url.searchParams.append('modelYear',`${year}`);
   url.searchParams.append('angle',`${angle}`); 
    return `${url}`;

}
export const updateSearchParams=(type:string,value:string)=>{
    const searchParams=new URLSearchParams(window.location.search);
    searchParams.set(type,value);
    const newPathname=`${window.location.pathname}?${searchParams.toString()}`
    return newPathname;
}