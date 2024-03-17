
import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
            <ul>
                <p className='text-ray-800 font-bold text-3xl pb-6'>
                    Stream<span className='text-blue-600'>Line</span>
                </p>
                <div className='flex gap-6 pb-5'>
                    {/* section for icons */}
                    <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'/>
                    <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600'/>
                    <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600'/>
                    <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
                    <FaFacebook className='text-2xl cursor-pointer hover:text-red-600'/>
                </div>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Product</p>
                <li className='text-gray-500 last:text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks</li>
                <li className='text-gray-500 last:text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futures & Options</li>
                <li className='text-gray-500 last:text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutual Funds</li>
                <li className='text-gray-500 last:text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed Deposit</li>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Products</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Pricing</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Career</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Press & media</li>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contact</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Support Port</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>List of char</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Downloads</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Videos</li>
            </ul>
        </div>
    </div>

    <div className='flex flex-col justify-center items-center p-5 bg-gray-50'>
        <h1 className='text-gray-800 font-semibold'>0 2023-2024 All rights reserved | Builed  with love  y {""} <span className='hover:text-blue-600 font-semibold cursor-pointer'>
            Reliable
        </span> {""}

          </h1>
    </div>
    </>
  )
}

export default Footer