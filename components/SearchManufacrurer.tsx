"use client"
import React from 'react'
import { Combobox,ComboboxButton,ComboboxInput,Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image'
import { useState } from 'react'

export default function SearchManufacrurer
    (
        { manufacturer,
          setManufacturer}:SearchManufacturerProps) 
{
    const [query,setQuery]=useState("second")
  

    return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='realative w-full'>
                <ComboboxButton className="absolute top-[14px]">
                    <Image
                      src="/car-logo.svg"
                      width={20}
                      height={20}
                      className='ml-4'
                      alt='car-logo'
                      />

                </ComboboxButton>
                <ComboboxInput
                 className="saerch-manufacturer__input"
                 placeholder='Volkswagon'
                 displayValue={(manufacturer:string)=>(
                    manufacturer)
                 }
                 onChange={(e)=>setQuery(e.target.value)}>    
                </ComboboxInput>


            </div>
        </Combobox>

    </div>
  )
}
