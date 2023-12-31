import React from 'react'
import Navbar from '../Components/Navbar'
import sriram from '../assets/Sriram.jpg';
const Founders = () => {
 
  return (
    <div className='relative'>
      <Navbar/>

      <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Founders </h2>
          
        </div>
        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
         
            <div  className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={sriram}
                  
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-bold text-gray-900">
                    <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=web3">
                      <span aria-hidden="true" className="absolute inset-0" />
                      SRIRAM
                    </a>
                  </h3>
                  <p className="mt-1 text-md text-gray-900">SOFTWARE DEVELOPER</p>
                </div>
                <div>
                  <img src="../assets/" alt=""/>
                </div>
               
              </div>
            </div>


            <div  className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={sriram}
                  
                  className="h-fit w-fit object-cover object-center lg:h-[25rem] lg:w-[20rem]"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-bold text-gray-900">
                    <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=web3">
                      <span aria-hidden="true" className="absolute inset-0" />
                      SRIRAM
                    </a>
                  </h3>
                  <p className="mt-1 text-md text-gray-900">SOFTWARE DEVELOPER</p>
                </div>
                <div>
                  <img src="../assets/" alt=""/>
                </div>
               
              </div>
            </div>
            <div  className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={sriram}
                  
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-bold text-gray-900">
                    <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=web3">
                      <span aria-hidden="true" className="absolute inset-0" />
                      SRIRAM
                    </a>
                  </h3>
                  <p className="mt-1 text-md text-gray-900">SOFTWARE DEVELOPER</p>
                </div>
                <div>
                  <img src="../assets/" alt=""/>
                </div>
               
              </div>
            </div>
            
          
        </div>
      </div>

      </div>
    </div>
     
   
     
    </div>
  )
}

export default Founders
