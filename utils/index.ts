import { CarProps } from "@/types";

export async function fetchCar(){
    const response= 
    await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
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

}