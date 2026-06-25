"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'

export default function CustomButton({title,
    containerStyles,
    handleClick,
    btnType}:CustomButtonProps) {
  return (
    <button 
    type={btnType||'button'}
    disabled={false}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
<span className='flex-1'>
    {title}
</span>
    </button>
  )
}
