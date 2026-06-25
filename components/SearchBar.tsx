
'use client';
import { format } from 'path'
import React from 'react'
import SearchManufacturer from "./SearchManufacrurer"
import { useState } from 'react';

export default function SearchBar() {
    const[manufacturer,setManufacturer]=useState('');
    const handleSearch =()=>{};
  return (
    <form 
      className='searchbar'
      onSubmit={handleSearch}>
        <div
          className='search__item'>
            <SearchManufacturer/>

        </div>
      </form>
  )
}
