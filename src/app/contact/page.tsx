
"use client"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FcSalesPerformance} from 'react-icons/fc';
import {BsFillPatchQuestionFill} from 'react-icons/bs';
import {RiCustomerService2Fill} from 'react-icons/ri';

import Footer from "components/Footer"

export default function Contact(){


    const notify = () => toast("Success : we contact You Shortly");


    return(
        <>
    <div className="relative contact-page ">
        <a href="/about"  className="overflow-hidden">
        <img className="w-screen "src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt="..." />
        <h1 className="absolute text-lg md:text-3xl text-white font-bold uppercase bottom-16 md:bottom-24 left-1/2  -translate-x-1/2 "> Tell us , We Fit to your Frame . </h1>
         <p className="absolute text-base md:text-2xl tracking-tight text-bold text-blue-600 bottom-0 md:bottom-4 left-1/2  -translate-x-1/2 "> Thank you for try to reach us ...</p>
        </a>
   </div>
   {/* //contact from 2nd section */}
    <div className="contactForm bg-bmuve bg-no-reapet bg-center bg-cover ">

    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-xl md:text-3xl text-white font-bold uppercase">Tell  Us</h1>
      <p className="text-sm md:text-xl text-white font-medium">Dont'worry We Promise to take care of your data..</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-300">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-red-600 border-0  py-2 px-8 focus:outline-none hover:bg-black rounded-2xl text-lg"  onClick={notify} >Submit</button>
          <ToastContainer className='text-black' />
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-orange-300">dtechfly@gmail.com</a>
          <p className="leading-normal text-white my-5">Okhla,South Delhi.
            <br />New delhi , Delhi 110025
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* Another section of contact page  */}


<div className="flex justify-center ">

<div className="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl  ">
    <div className="flex flex-col justify-center items-center text-center">
        <div className="text-xl md:text-3xl text-white font-bold uppercase">Contact Us</div>
        <div className="text-sm md:text-xl text-white font-medium">Get in touch and let us know how we can help.
        </div>

    </div>
    <div className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
        <div
            className="bg-white shadow-2xl shadow-white hover:shadow-black flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
            <div className="-mt-10 ">
            <FcSalesPerformance/>
            </div>
            <div className="font-semibold text-2xl">Sales</div>
            <p className="text-center text-lg p-5">We would love to talk about how we can work together.</p>
            <p
                className="text-center text-sm px-6 bg-red-600 py-2 rounded-3xl hover:bg-black p-5 text-white font-medium">
                <a href="#">Contact Sales</a>
            </p>

        </div>
        <div
            className="bg-white shadow-2xl shadow-white hover:shadow-black flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
            <div className="-mt-10  ">
           < BsFillPatchQuestionFill/>


            </div>
            <div className="font-semibold text-2xl">Help & Support</div>
            <p className="text-center text-lg p-5">We are here to help with any questions or code.</p>
            <p
                className="text-center text-sm px-6 bg-red-600 py-2 rounded-3xl hover:bg-black p-5 text-white font-medium">
                <a href="#">Get Support</a>
            </p>

        </div>
        <div
            className="bg-white shadow-2xl shadow-white hover:shadow-black flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
            <div className="-mt-10  ">
               <RiCustomerService2Fill  />


            </div>
            <div className="font-semibold text-2xl ">Media & Press</div>
            <p className="text-center text-lg p-5">Get Stripe news, company info, and media resources.</p>
            <p
                className="text-center text-sm px-6 bg-red-600 py-2 rounded-3xl hover:bg-black p-5 text-white font-medium">
                <a href="#">Visit Newsroom</a></p>

        </div>
    </div>
</div>
</div> 






    </div>
      

    <Footer />


</>
    )




    
}


