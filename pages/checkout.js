import React from 'react'
import Link from 'next/link'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Checkout = ({ cart, subTotal, removeFromCart, addToCart }) => (
    <div className='container m-auto'>
        <h1 className='font-bold text-3xl mt-8 text-center'>Checkout</h1>
        <div className="container p-6 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <div className="justify-center w-full mx-auto">
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="Last Name" type="text" placeholder="Last Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="Last Name" type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                                className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                (Optional)</label><textarea name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full ml-auto md:ml-12 lg:w-2/5">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <h2 className="text-xl font-bold">Order Summary
                        </h2>
                        <div className="w-full sideCart bg-gray-100 p-6 my-2">
                            <ol className='font-semibold list-decimal border-b border-gray-500 '>
                                {Object.keys(cart).length === 0 &&
                                    <div className='my-4 font-normal'>
                                        Your cart is empty
                                    </div>
                                }
                                {cart && Object.keys(cart).map(key => {
                                    let element = cart[key]
                                    return (
                                        <li key={key}>
                                            <div className="flex item my-3">
                                                <div className=''>
                                                    {element.name}
                                                </div>
                                                <div className='w-1/3 flex justify-center items-center text-gray-500'>
                                                    <AiFillMinusCircle onClick={() => { removeFromCart(key, 1) }} className='cursor-pointer text-gray-500 text-lg' />
                                                    <span className='mx-2 text-md'>
                                                        {element.qty}
                                                    </span>
                                                    <AiFillPlusCircle onClick={() => { addToCart(key, 1, element.price, element.name, element.size, element.variant) }} className='cursor-pointer text-gray-500 text-lg' />
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ol>
                            {/* <div className="flex py-4 mt-4">
                                <h2 className="text-xl font-bold">ITEMS: {}</h2>
                            </div> */}
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span className="ml-2">₨{subTotal}</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax<span className="ml-2">₨100</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span className="ml-2">₨{subTotal + 100}</span></div>
                        </div>
                        <div className="mx-4">
                            <Link href={'/checkout'}>
                                <button className="flex mr-2 text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded text-sm"><BsFillBagCheckFill className='mr-2' />Pay ₨{subTotal + 100}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Checkout