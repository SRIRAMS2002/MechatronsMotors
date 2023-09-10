import React from 'react'
import Navbar from '../Components/Navbar'
const Achievements = () => {

  
  return (
    <div className='relative  pb-28'>
      <Navbar/>

      <div className="mx-auto max-w-7xl px-6  lg:px-8">
      <div className="mx-auto mt-[8rem] max-w-7xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl">ACHIEVEMENTS</h2>
        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      </div>
      </div>

     
   
      <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-5 sm:py-5  lg:max-w-none lg:py-0">
         

          <div className="mt-6 space-y-2 gap-y-20 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
           
              <div className="group relative">
              <a href="/Achievements/AchPages1">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://w0.peakpx.com/wallpaper/93/388/HD-wallpaper-digital-world-digital-technology-digital-earth-coordinates-neon-light-earth-technology-world-map-navigation-concepts-internet-concepts-networks-thumbnail.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                
                </h3>
                <p className="text-3xl font-semibold text-gray-900">INTERNATIONAL EVENTS</p>
                </a>
              </div>

              <div className="group relative">
              <a href="/Achievements/AchPages2">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://img.freepik.com/premium-photo/subcontinent-map-india-pakistan-nepal-bhutan-bangladesh-sri-lanka-maldives-3d-illustration_394271-3360.jpg?w=996"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                
                </h3>
                <p className="text-3xl font-semibold text-gray-900">NATIONAL EVENTS</p>
                </a>
              </div>

              <div className="group relative">
              <a href="/Achievements/AchPages3">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://c4.wallpaperflare.com/wallpaper/882/33/201/scooter-gogoro-electric-buy-smartscooter-wallpaper-preview.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                
                </h3>
                <p className="text-3xl font-semibold text-gray-900">E-BIKE EVENTS</p>
                </a>
              </div>

              <div className="group relative">
              <a href="/Achievements/AchPages4">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://c4.wallpaperflare.com/wallpaper/704/729/134/bike-dirt-dirtbike-extreme-wallpaper-preview.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                
                </h3>
                <p className="text-3xl font-semibold text-gray-900">DIRT BIKE EVENTS</p>
                </a>
              </div>

              <div className="group relative">
              <a href="/Achievements/AchPages5">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://imagedelivery.net/K11gkZF3xaVyYzFESMdWIQ/934d10be-719b-4ab6-853f-825767668a00/full"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                
                </h3>
                <p className="text-3xl font-semibold text-gray-900">HACKATHON EVENTS</p>
                </a>
              </div>

     

           
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Achievements