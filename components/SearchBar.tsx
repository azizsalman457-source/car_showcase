
'use client';
import { format } from 'path'
import React from 'react'
import SearchManufacturer from "./SearchManufacturer"
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
      return (
      <button
       type='submit'
       className={`-ml-3 z-10 ${otherClasses}`}
       >
        <Image
         src="/magnifying-glass.svg"
         alt="magnifying glass"
         width={40}
         height={40}
         className='object-contain'
         ></Image>
       </button>)
    };

export default function SearchBar() 
{
    const[manufacturer,setManufacturer]=useState('');
    const[model ,setModel]=useState('');
    const router=useRouter();
    
    const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>
    {
      e.preventDefault();
      if(manufacturer===''&& model===''){
        return alert('please fill in the search bar')
      }
      updateSearchParams(model,manufacturer)
    };
    const updateSearchParams=(model:string,manufacturer:string)=>
 {
  const searchParams= new URLSearchParams(window.location.search);
  if(model){
    searchParams.set('model',model)

  } else{
    searchParams.delete('model')
  } 
  if(manufacturer){
    searchParams.set('manufacturer',manufacturer)

  } else{
    searchParams.delete('manufacturer')
  }
  const newPathname=`${window.location.pathname}?${searchParams.toString()}`;
  router.push(newPathname,{scroll:false});
};
  return (
    <form 
      className='searchbar'
      onSubmit={handleSearch}>
        <div
          className='search__item'>
            <SearchManufacturer
             manufacturer={manufacturer}
             setManufacturer={setManufacturer}/>

             <SearchButton otherClasses="sm:hidden" />
        </div>
        <div
          className='search__item'
          >
            <Image
              src="/model-icon.png"
              alt="car model"
              className='absolute w-[20px] h-[20px] ml-4'
              width={25}
              height={25}
              />
              <input type="text"
              name='model'
              value={model}
              onChange={(e)=>setModel(e.target.value)}
              placeholder='tiguan'
              className='searchbar__input' />
              <SearchButton otherClasses='sm:hidden'/>

        </div>
        <SearchButton otherClasses='sm:hidden'/>
      </form>
     
  )
    
}
