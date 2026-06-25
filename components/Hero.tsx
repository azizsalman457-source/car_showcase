// "use client"
// import React from 'react';
// import Image from 'next/image';
// import CustomButton from './CustomButton';

// export default function Hero() {
//   const handleScroll=()=>{}; 
//   return (
//     <div className='hero'>
//         <div className='flex-1 pt-36 padding-x'>
//          <h1 className='hero__title'>
//             Find ,book , or rent a car 
//          </h1 >
//          <h1 className='hero__title'>- Quickly and Easily!</h1>
//          <p>
//           Streamline your car rental experience
//            with our effortless booking process
//          </p>
//          <CustomButton
//          title="explore cars"
//          containerStyles="bg-primary-blue
//          text-white rounded-full mt-10"
//          handleClick={handleScroll}
//          />
//         </div>
//         <div className='hero__image-container'>
//           <div className='hero__image'>
//             {/* Right Image Container Column */}
// <div className='flex w-full items-end justify-end xl:h-screen xl:flex-[1.5]'>
//   <div className='relative h-[590px] w-[90%] z-0 xl:h-full xl:w-full'>
    
//     {/* 1. The Car Image (z-20 sits on top) */}
//     <Image 
//       src="/hero.png" 
//       alt="hero car"
//       fill 
//       className='object-contain z-20'
//     />

//     {/* 2. The Background Graphic (z-10 sits behind) */}
//     <div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 z-10 w-full xl:h-screen h-[590px] overflow-hidden'>
//       <Image 
//         src="/hero-bg.png" 
//         alt="hero background"
//         fill
//         className="object-cover" /* Adjusts image to fill the layout shape properly */
//       />
//     </div>
    
//   </div>
// </div>
//           </div>
//         </div>
//     </div>
//   )
// }
"use client"
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

export default function Hero() {
  const handleScroll = () => {}; 

  return (
    <div className="relative flex flex-col xl:flex-row items-center justify-between w-full min-h-screen z-0">
        
        {/* LEFT COLUMN: Text Box (Responsive paddings keep it bounded) */}
        <div className="flex-1 pt-36 md:pt-40 px-6 sm:px-16 flex flex-col justify-center items-start w-full z-20">
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-[#2B2C35] leading-[1.1] tracking-tight">
            Find, book, or rent a car — quickly and easily!
          </h1>
          
          <p className="text-[27px] text-gray-600 font-light mt-5 leading-[1.3]">
            Streamline your car rental experience with our effortless booking process.
          </p>
          
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-[#2B59FF] text-white rounded-full mt-20 px-10 py-90 min-w-[200px] font-semibold shadow-md hover:bg-blue-700 transition-all "
            handleClick={handleScroll}
          />
        </div>

        {/* RIGHT COLUMN: Car Graphic + Blue Shape Boundary Container */}
        <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen min-h-[450px] md:min-h-[600px] relative z-10">
          
          {/* Relative container wrapper holding both elements together */}
          <div className="relative w-full h-full flex justify-end items-center overflow-visible">
            
            {/* The Car Asset Container (Sits safely on top) */}
            <div className="relative w-full xl:w-[95%] h-[80%] md:h-[85%] z-20 transition-all">
              <Image 
                src="/hero.png" 
                alt="hero car"
                fill 
                className="object-contain"
                priority
              />
            </div>

            {/* The Blue Polygonal Background - Matches the tutorial positioning exactly */}
            <div 
              style={{ backgroundImage: "url('/hero-bg.png')" }}
              className="absolute -top-20 md:-top-24 -right-[25%] xl:-right-[35%] bg-no-repeat bg-contain z-10 w-[100vw] h-[500px] md:h-[600px] xl:h-[115%] overflow-hidden transition-all" 
            />
            
          </div>
        </div>
    </div>
  );
}