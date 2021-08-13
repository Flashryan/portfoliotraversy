import React from 'react'
import headerImg from '../images/hero.jpg'

export default function Header(){
    return (
        
<div class="bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="h-2 bg-gray-800 dark:bg-white mb-12 text-4xl font-header text-crimson">
                Welcome to the portfolio of
            </span>
            <h1 class="font-header mt-8 text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-white ">
            Ryan Davies
            
            </h1>
            <p class="text-4xl font-header text-crimson dark:text-white py-10">
            Digital Creator and Print Designer ...with a smidgen of Motion Design
            </p>
            <div class="flex mt-8">
            
            </div>
        </div>
        <div class="sm:block sm:w-1/3 lg:w-3/5 relative">
            {/* <img src={headerImg} style={{mixBlendMode: "multiply"}} class="max-w-xs md:max-w-sm m-auto"/> */}
        </div>
    </div>
</div>

    )
}