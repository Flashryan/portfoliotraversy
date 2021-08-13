import React from 'react'

export default function Header(){
    return (
       
<div class="bg-white dark:bg-gray-800 " id="about">
    <div class="text-center w-full mx-auto py-20 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
    <div class=" w-full flex flex-wrap justify-center items-center text-center  text-3xl font-header font-bold text-black dark:text-white sm:text-4xl">
     <span className={"position relative top-0 text-8xl text-gray-200"}>02</span>
            <span class="position top-2 uppercase grid-col-1">
            About Me
            </span>
        </div>
        <p class="text-xl h-48 max-h-full sm:max-h-32 mt-4 max-w-3xl mx-auto text-gray-800 font-body overflow-scroll">
        I have been involved in design for several years, be it through more traditional graphic design, or later with interaction/ digital design, through formal educational years, a few years freelancing, and also a solid professional thus accumulating in a full, varied and well-balanced understanding of a range design aspects including branding, typography, layout, colour theories, and balance. I am able to execute this knowledge through a variety of disciplines, primarily digital, understanding the user, implementing user-centred design, creating low, medium, and high fidelity wireframes, fleshing these out with colour, type, balance, and repetition, to create an empathetic, and focused design which works well for both user and client. Fundamentally putting the user at the heart of everything I do has become more and more apparent, as vitally we're designing for our end users, nobody wants that red 'X' in the corner to clicked, Ive always thought of the user experience as a joke...if you need to explain it, it cant be very good!
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 container mx-auto rounded-md shadow">
            <div class="grid grid-cols-2 gap-4">
  <div><div>
    <div class="bg-white rounded-lg  block p-4 m-auto">
        <div>
            <span class="font-body text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-white bg-crimson">
                UX/UI
            </span>
        </div>
        <div class=" font-body w-full h-4 bg-gray-200 rounded-full mt-3">
            <div class="w-4/5 h-full text-center text-xs text-white bg-crimson rounded-full">
                90%
            </div>
        </div>
    </div>
</div></div>
  <div><div>
    <div class="font-body bg-white rounded-lg  block p-4 m-auto">
        <div>
            <span class="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-white bg-crimson">
                Design
            </span>
        </div>
        <div class="font-body w-full h-4 bg-gray-200 rounded-full mt-3">
            <div class="w-4/5 h-full text-center text-xs text-white bg-crimson rounded-full">
                90%
            </div>
        </div>
    </div>
</div></div>
  <div><div>
    <div class="bg-white rounded-lg  block p-4 m-auto">
        <div>
            <span class="font-body text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-white bg-crimson">
            Marketing
            </span>
        </div>
        <div class="w-full h-4 bg-gray-200 rounded-full mt-3">
            <div class="font-body w-3/4 h-full text-center text-xs text-white bg-crimson rounded-full">
                80%
            </div>
        </div>
    </div>
</div></div>
  <div><div>
    <div class="bg-white rounded-lg block p-4 m-auto">
        <div>
            <span class="font-body text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-white bg-crimson">
            Development
            </span>
        </div>
        <div class="font-body w-full h-4 bg-gray-200 rounded-full mt-3">
            <div class="w-1/2 h-full text-center text-xs text-white bg-crimson rounded-full">
                50%
            </div>
        </div>
    </div>
</div></div>
</div> 
        </div>
    </div>
</div>
</div>
    )
}