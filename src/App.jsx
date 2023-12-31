import React from 'react'
import Navb from './Components/Navbar';
import Footer from './Components/Footer';
import CountUp from "react-countup";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const App = () => {
   
      const posts = [
        {
          id: 1,
          title: 'பெட்ரோல், பேட்டரி மூலம் இயங்கும் வாகனம்: ஸ்ரீ ராமகிருஷ்ணா கல்லூரி மாணவர்கள் சாதனை',
          href: 'https://www.covaimail.com/?p=53397',
          description:
            'ஸ்ரீ ராமகிருஷ்ணா தொழில்நுட்பக் கல்லூரியின் இயந்திரவியல் மற்றும் மின்னியல், மற்றும் தொடர்பியல் துறை சார்ந்த இறுதி ஆண்டு மற்றும் முன்னாள் மாணவர்கள் பேட்டரி மற்றும் பெட்ரோல் மூலமாக இயங்கக்கூடிய இருசக்கர வாகனத்தை தயாரிக்கும் முயற்சியில் வெற்றி கண்டு சாதனை படைத்துள்ளனர்.',
          date: 'Nov 06, 2021',
          datetime: '2021-11-06',
          category: { title: 'Marketing', href: '#' },
          author: {
            name: 'Covai Mail',
            role: 'Newspaper',
            href: '#',
            imageUrl:'https://pbs.twimg.com/profile_images/841202864336732160/WpjQxv0c_400x400.jpg'
          },
        },
        {
            id: 2,
            title: 'Tamil Nadu government opens doors for electric vehicle makers',
            href: 'https://www.business-standard.com/article/companies/tamil-nadu-government-opens-doors-for-electric-vehicle-makers-121100400043_1.html',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Oct 04, 2021',
            datetime: '2021-10-04',
            category: { title: 'Marketing', href: '#' },
            author: {
              name: 'Business-Standard',
              role: 'Co-Founder / CTO',
              href: 'https://www.business-standard.com/',
              imageUrl:
                'https://www.business-standard.com/assets/web-assets/images/business-standard-logo-placeholder.jpg',
            },
          },
        {
            id: 3,
            title: 'கோவையில் கலக்கும் ஸ்டார்ட் அப்; பெட்ரோல் ஸ்கூட்டருக்கு தீர்வு காணும் கிட்!',
            href: 'https://tamil.samayam.com/latest-news/state-news/coimbatore-start-up-has-created-an-electric-conversion-kit-that-will-convert-petrol-scooter-to-hybrid/articleshow/85865857.cms',
            description:
              'கோவையை சேர்ந்த ஸ்டார்ட் அப் நிறுவனம் ஒன்று பெட்ரோல் ஸ்கூட்டரை எலக்ட்ரிக்-ஹைபிரிட் ஸ்கூட்டராக மாற்றும் கிட் ஒன்றை கண்டுபிடித்துள்ளது',
            date: 'Sep 03, 2021',
            datetime: '2021-09-03',
            category: { title: 'Marketing', href: '#' },
            author: {
              name: 'The Times of India- Samayam',
              role: 'Newspaper',
              href: 'https://tamil.samayam.com/',
              imageUrl:
                'https://play-lh.googleusercontent.com/k8eIgpF1iXamn64rd6w_kxpsmEO2VqVGhupV5oSAynhgtPNq56gvTnr4WG8mhBKFYjLX',
            },
          },
          
        
      ]
  return (
    <div>
      
      <div className=" relative ">
        {/* Navbar */}
      <Navb  />
   
      {/* Header */}
      <div className="max-w-[1640px] mx-auto font-Lato mt-[5rem]">
      <div className="max-h-[650px] relative ">
        <div className=" absolute w-full h-full pl-10 pt-[31rem] max-h-[650px] bg-black/60 ">
        <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-900" >Team Mechatrons</h1>
          
          <h3 className="text-2xl ml-2 mt-3 text-gray-300 font-semibold">Ready To Race  !</h3>
         
        </div>
        <img src='src/assets/2.jpg' className=" object-cover w-screen h-[39rem] " alt=""/>
      </div>
    </div>
    {/* About */}
    <div className="bg-transparent py-10 bg-blur">
        <div className="mx-auto w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-2">
            <div className="bg-gray-50  flex items-center  px-16">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="m-8 relative space-y-4">
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4 text-center items-center">
                    <dt className="text-base leading-7 text-gray-600">
                      Thank u
                    </dt>
                    <dd className="order-first text-3xl pt-10 font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      About Us
                    </dd>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt- grid max-w-screen-lg grid-cols-1 flex-col gap-x-8 gap-y-2 lg:grid-cols-2">
              <div className="relative group">
                <div className="absolute -inset-1 h-[12rem] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative border-violet-800 border-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start m-px">
                  <div className="pr-5 flex flex-col w-full items-center text-center justify-between  rounded-lg bg-white p-10 lg:w-[15rem]">
                    <h1 className="text-base leading-7 text-gray-600">
                      International Events
                    </h1>
                    <h4 className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-5">
                      <CountUp start={0} end={50} duration={10}></CountUp> 
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 h-[12rem] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative border-violet-800 border-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start m-px">
                  <div className="pr-5 flex flex-col w-full items-center text-center justify-between  rounded-lg bg-white p-10 lg:w-[15rem]">
                    <h1 className="text-base leading-7 text-gray-600">
                      National Events
                    </h1>
                    <h4 className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-5">
                    
                    <CountUp start={0} end={100} duration={10}></CountUp>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 h-[12rem] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative border-violet-800 border-2   bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start m-px">
                  <div className="pr-5 flex flex-col w-full items-center text-center justify-between  rounded-lg bg-white p-10 lg:w-[15rem]">
                    <h1 className="text-base leading-7  text-gray-600">
                      Cash Award
                    </h1>
                    <h4 className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-5">
                    
                      <CountUp start={0} end={1000000} duration={10}></CountUp>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 h-[12rem] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative border-violet-800 border-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start m-px">
                  <div className="pr-5 flex flex-col w-full items-center text-center justify-between  rounded-lg bg-white p-10 lg:w-[15rem]">
                    <h1 className="text-base leading-7 text-gray-600">
                      Projects
                    </h1>
                    <h4 className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-5">
                    <CountUp start={0} end={10} duration={10}></CountUp>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News */}
      <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex relative bg-[white] border-2 px-5 py-5 border-violet-900 rounded-xl max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-black">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-black px-3 py-1.5 font-medium text-white "
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-900">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-900" />
                <div className="text-sm leading-6">
                  <p className="font-bold text-black ">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-black">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="text-center p-5">
        <h1 className="text-3xl uppercase font-bold">Testimonials</h1>
        <h4 className="text-md leading-7 my-3 text-lg font-light opacity-75">Learn how to grow your business with our expert advice.</h4>
        <div className="flex max-w-5xl mx-auto gap-8">
          <Swiper
      // install Swiper modules
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      // slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className=""
    >
           <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white border-2 px-5 py-5 border-violet-900 text-center p-8 rounded-xl">
              <img
                className="h-20 rounded-full mx-auto"
                src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg"
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">NAncy Doe</h4>
              <h5 className="font-bold opacity-75">Front end engineer</h5>
              <p className="text-md leading-7 my-3 font-light  text-slate-800">
                And because these are real people, customers trust them to be
                unbiased and truthful. · A testimonial is effectively a review
                or recommendation from a client, letting other people know how
                your products or services benefitted them.
              </p>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Footer */}
    <Footer/>
    </div>

    
    </div>
  )
}

export default App
