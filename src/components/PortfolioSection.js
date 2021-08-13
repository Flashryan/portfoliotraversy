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
import UXUIProjects from './UXUIProjects'
import SimpleReactLightbox from 'simple-react-lightbox'

export default function PortfolioSection(){

    return (
        <main className='' id="portfolio">
        <section className="container mx-auto w-full text-center w-full mx-auto px-4 sm:px-6 lg:py-16 lg:px-8 z-20" >
        <h2 class="text-3xl font-header font-bold text-black dark:text-white sm:text-4xl">
        <div class=" w-full flex flex-wrap justify-center items-center text-center  text-3xl font-header font-bold text-black dark:text-white sm:text-4xl">
     <span className={"position relative top-0 text-8xl text-gray-200"}>03</span>
            <span class="position top-2 uppercase grid-col-1">
            Portfolio
            </span>
        </div>
        </h2>
            <div className="w-full container mx-auto flex flex-col justify-center items-center py-8">
            <SimpleReactLightbox>
      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="h-12 px-12 transition-colors duration-150 font-body"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Digital
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="h-12 px-12 transition-colors duration-150 font-body"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Print
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="h-12 px-12 transition-colors duration-150 font-body"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Motion
          </TabGroup.Tab>
          <TabGroup.Tab
            index={3}
            className="h-12 px-12 transition-colors duration-150 font-body"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            UX/UI
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="w-full transition-all transform "
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <DigitalProjects />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="w-full transition-all transform flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <label className="font-semibold mb-1" htmlFor="input">
          <PrintProjects />
          </label>
          
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className="w-full transition-all transform"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <MotionProjects />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={3}
          className="w-full transition-all transform"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <UXUIProjects />
        </TabGroup.TabPanel>
      </TabGroup>
      </SimpleReactLightbox>
    </div>
            
            </section>
            </main>
    )
}