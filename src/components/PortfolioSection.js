import React from 'react'
import sanityClient from '../client.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import Post from './Post'
import { TabGroup } from '@statikly/funk'
import DigitalProjects from './DigitalProjects'
import PrintProjects from './PrintProjects'
import MotionProjects from './MotionProjects'
import SimpleReactLightbox from 'simple-react-lightbox'

export default function PortfolioSection(){

    return (
        <main className='background-green-100 min-h-screen p-12 w-full' id="portfolio">
        <section className="container mx-auto w-full text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20" >
        <h2 class="text-3xl font-header font-bold text-black dark:text-white sm:text-4xl">
            <span class="block uppercase">
            Portfolio
            </span>
        </h2>
            <div className="w-full container mx-auto flex flex-col justify-center items-center py-8">
            <SimpleReactLightbox>
      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Digital
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Print
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="h-12 px-12 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Motion
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="w-full p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <DigitalProjects />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="w-full p-12 transition-all transform h-48 flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <label className="font-semibold mb-1" htmlFor="input">
          <PrintProjects />
          </label>
          <input
            id="input"
            type="text"
            className="border border-gray-400 px-8 h-12"
            placeholder="Focus me!"
          />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className="w-full p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <MotionProjects />
        </TabGroup.TabPanel>
      </TabGroup>
      </SimpleReactLightbox>
    </div>
            
            </section>
            </main>
    )
}