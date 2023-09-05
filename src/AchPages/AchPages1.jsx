import React from "react";
import Navbar from "../Components/Navbar";

import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import i2create from '../assets/Achievements/i2create.png';
const AchPages1 = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    
  return (
    <div >
        <Navbar/>

        
       {/* INTERNATIONAL EVENTS 1 */}

       <div className="relative mt-[8rem] border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-10 px-4 py-5 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  I2 Create 2021
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  Malaysia
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  16th September, 2021
                </div>
              </div>
                <p className="mt-10 text-gray-500">
                  International Innovation, Creativity, Technology Exhibition(
                  I2Create) is the best platform for everyone to express ideas
                  of innovation from various societal background around the
                  world.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Event Organiser</dt>
                    <dd className="mt-2 text-sm text-gray-500">Malaysia Research & Innovation Society (MyRIS) and Ministry of Education Malaysia (MOE)</dd>
                   
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Venue</dt>
                    <dd className="mt-2 text-sm text-gray-500">Universiti Malaysia Perlis (UniMAP), Malaysia. </dd>
                   
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">No of students Participated</dt>
                    <dd className="mt-2 text-sm text-gray-500">12</dd>
                   
                  </div>
              
                  
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Awards Won</dt>
                    <dd className="mt-2 text-sm text-gray-500"><span className="font-bold">Gold Award -</span> 01</dd>
                    <dd className="mt-2 text-sm text-gray-500"><span className="font-bold">Silver Award -</span> 02</dd>
                    <dd className="mt-2 text-sm text-gray-500"><span className="font-bold">Bronze Award -</span> 02</dd>
                   
                  </div>
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src={i2create}
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      3

      {/* INTERNATIONAL EVENTS 2 */}

      <div className="relative mt-[8rem] border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-10 px-4 py-5 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  In-Vide 2021
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  Malaysia
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  31st October, 2021
                </div>
              </div>
                <p className="mt-10 text-gray-500">
                International Virtual Expo of Innovation Product and System Design 2021 (In-ViDE 2021) is an innovation competition, in which, innovation products and systems related to various science and technological fields are exhibited as a solution for the presented problems
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Event Organiser</dt>
                    <dd className="mt-2 text-sm text-gray-500">Malaysian Innovation Foundation (YIM) and National planetarium</dd>
                   
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Venue</dt>
                    <dd className="mt-2 text-sm text-gray-500">Universiti Malaysia Perlis (UniMAP),Malaysia. </dd>
                   
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">No of students Participated</dt>
                    <dd className="mt-2 text-sm text-gray-500">20</dd>
                   
                  </div>
              
                  
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Awards Won</dt>
                    <dd className="mt-2 text-sm text-gray-500"><span className="font-bold">Silver Award -</span> 02</dd>
                    <dd className="mt-2 text-sm text-gray-500"><span className="font-bold">Bronze Award -</span> 02</dd>
                   
                  </div>
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://invide2021.unimap.edu.my/images/favicon.png"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


       {/*INTERNATIONAL EVENTS 3  */}

       <div className="relative mt-[8rem] border-2 border-violet-200 bg-white px-6  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div>
          
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-10 px-4 py-5 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  IEEE YESIST12
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  Thailand
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  7th and 8th September, 2019
                </div>
              </div>
                <p className="mt-10 text-gray-500">
                IEEE YESIST 12 (YOUTH ENDEAVOURS FOR SOCIAL INNOVATION USING SUSTAINABLE TECHNOLOGY)(SS12) is a platform for the students and young professionals to showcase their fresh pristine ideas to find the key to humanitarian and social issues affecting directly the community around them.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Event Organiser</dt>
                    <dd className="mt-2 text-sm text-gray-500">IEEE </dd>
                   
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Venue</dt>
                    <dd className="mt-2 text-sm text-gray-500">Stamford International University, Thailand </dd>
                   
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">No of students Participated</dt>
                    <dd className="mt-2 text-sm text-gray-500">6</dd>
                   
                  </div>
              
                  
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Awards Won</dt>
                    <dd className="mt-2 text-sm text-gray-500"><span className="font-bold">Grand Finale Event</span></dd>
                    
                   
                  </div>
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>




     

    </div>



  )
}

export default AchPages1
