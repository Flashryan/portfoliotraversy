import React from 'react'

export default function SkillsSection(){
    return (
        
<div class="sm:flex flex-wrap justify-center items-center text-center py-20 gap-8 flex grid" id="skills">
 <div class=" w-full flex flex-wrap justify-center items-center text-center  text-3xl font-header font-bold text-black dark:text-white sm:text-4xl">
     <span className={"position relative top-0 text-8xl text-gray-200"}>01</span>
            <span class="position top-2 uppercase grid-col-1">
            What Do I Do?
            </span>
        </div>
    <div class="sm:w-1/3 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-800 mt-6 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-crimson text-white">
                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="text-4xl sm:text-2xl text-crimson font-semibold dark:text-white py-4 font-body">
            Print
        </h3>
        <p class="text-lg text-white dark:text-gray-300 py-4 font-body">
            <ul>
                <li>Brochure</li>
                <li>Flyers</li>
                <li>Technical Documents</li>
                <li>Brand Identity</li>
            </ul>
        </p>
    </div>
    <div class="sm:w-1/3 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-800 mt-6 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-crimson text-white">
                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="text-4xl sm:text-2xl text-crimson font-semibold dark:text-white py-4 font-body">
            Digital
        </h3>
        <p class="text-lg text-white dark:text-gray-300 py-4 font-body">
            <ul>
                <li>App User Interfaces</li>
                <li>User Experience</li>
                <li>Website UI and Build</li>
                <li>React, Javascript, SCSS</li>
            </ul>
        </p>
    </div>
    <div class="sm:w-1/3 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-800 mt-6 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-crimson text-white">
                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="text-4xl sm:text-2xl text-crimson font-semibold dark:text-white py-4 font-body">
            Motion Design
        </h3>
        <p class="text-lg text-white dark:text-gray-300 py-4 font-body">
        <ul>
                <li>Explainer Videos</li>
                <li>Lower Thirds</li>
                <li>Marketing videos</li>
                <li>After Effects</li>
            </ul>
        </p>
    </div>
</div>

    )
}