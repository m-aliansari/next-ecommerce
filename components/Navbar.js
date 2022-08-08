import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Navbar = () => {
    const ref = useRef(null)

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    return (
        <>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-md">
                <Link href="/">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src="/favicon.ico" alt='' height={40} width={40} />
                        <span className="ml-3 text-xl">CODESWEAR.COM</span>
                    </a>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link href={"/tshirts"}><a className="mr-5 hover:text-gray-900">Tshirts</a></Link>
                    <Link href={"/hoodies"}><a className="mr-5 hover:text-gray-900">Hoodies</a></Link>
                    <Link href={"/stickers"}><a className="mr-5 hover:text-gray-900">Stickers</a></Link>
                    <Link href={"/mugs"}><a className="mr-5 hover:text-gray-900">Mugs</a></Link>
                </nav>
                <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl cursor-pointer' />
                <div ref={ref} className="w-72 h-full sidebar absolute top-0 right-0 bg-gray-100 px-8 py-10 transition-transform transform translate-x-full">
                    <h2 className='font-bold text-xl mb-4'>Shopping Cart</h2>
                    <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-gray-500"><AiFillCloseCircle /></span>
                    <ol className='font-semibold list-decimal'>
                        <li>
                            <div className="flex item my-3">
                                <div className='w-2/3'>
                                    T-shirt - Wear the code
                                </div>
                                <div className='w-1/3 flex justify-center items-center text-gray-500'>
                                    <AiFillMinusCircle className='cursor-pointer text-gray-500 text-lg' />
                                    <span className='mx-2 text-md'>
                                        1
                                    </span>
                                    <AiFillPlusCircle className='cursor-pointer text-gray-500 text-lg' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex item my-3">
                                <div className='w-2/3'>
                                    T-shirt - Wear the code
                                </div>
                                <div className='w-1/3 flex justify-center items-center text-gray-500'>
                                    <AiFillMinusCircle className='cursor-pointer text-gray-500 text-lg' />
                                    <span className='mx-2 text-md'>
                                        1
                                    </span>
                                    <AiFillPlusCircle className='cursor-pointer text-gray-500 text-lg' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex item my-3">
                                <div className='w-2/3'>
                                    T-shirt - Wear the code
                                </div>
                                <div className='w-1/3 flex justify-center items-center text-gray-500'>
                                    <AiFillMinusCircle className='cursor-pointer text-gray-500 text-lg' />
                                    <span className='mx-2 text-md'>
                                        1
                                    </span>
                                    <AiFillPlusCircle className='cursor-pointer text-gray-500 text-lg' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex item my-3">
                                <div className='w-2/3'>
                                    T-shirt - Wear the code
                                </div>
                                <div className='w-1/3 flex justify-center items-center text-gray-500'>
                                    <AiFillMinusCircle className='cursor-pointer text-gray-500 text-lg' />
                                    <span className='mx-2 text-md'>
                                        1
                                    </span>
                                    <AiFillPlusCircle className='cursor-pointer text-gray-500 text-lg' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex item my-3">
                                <div className='w-2/3'>
                                    T-shirt - Wear the code
                                </div>
                                <div className='w-1/3 flex justify-center items-center text-gray-500'>
                                    <AiFillMinusCircle className='cursor-pointer text-gray-500 text-lg' />
                                    <span className='mx-2 text-md'>
                                        1
                                    </span>
                                    <AiFillPlusCircle className='cursor-pointer text-gray-500 text-lg' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex item my-3">
                                <div className='w-2/3'>
                                    T-shirt - Wear the code
                                </div>
                                <div className='w-1/3 flex justify-center items-center text-gray-500'>
                                    <AiFillMinusCircle className='cursor-pointer text-gray-500 text-lg' />
                                    <span className='mx-2 text-md'>
                                        1
                                    </span>
                                    <AiFillPlusCircle className='cursor-pointer text-gray-500 text-lg' />
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="flex">
                        <button className="flex mr-3 text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded text-sm"><BsFillBagCheckFill className='mr-2' />Checkout</button>
                        <button className="flex text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded text-sm">Clear Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar