"use client"
import React from 'react'
import { useState,Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox,Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'

export default function CustomFilters({
  title,
  options
}:
 CustomFilterProps
) {
  return (
    <div>CustomFilters</div>
  )
}
