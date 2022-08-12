import React from 'react'

const Order = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CodeSwear.com</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #89777</h1>
                        <p className="leading-relaxed mb-4">
                            Your order has been successfully placed
                        </p>
                        <div className="flex mb-4">
                            <a className="flex-grow text-gray-500 py-2 text-lg px-1">Item Description</a>
                            <a className="flex-grow border-gray-300 py-2 text-lg pl-20 text-center">Quantity</a>
                            <a className="flex-grow border-gray-300 py-2 text-lg px-1 text-right">Item Total</a>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the Code (Xl/Black)</span>
                            <span className="ml-auto text-gray-900">1</span>
                            <span className="ml-auto text-gray-900">₨700</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the Code (Xl/Blue)</span>
                            <span className="ml-auto text-gray-900">1</span>
                            <span className="ml-auto text-gray-900">₨700</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Wear the Code (Xl/Red)</span>
                            <span className="ml-auto text-gray-900">1</span>
                            <span className="ml-auto text-gray-900">₨700</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₨58.00</span>
                            <div className="my-6">
                                <button className="flex mx-0 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">Track Order</button>
                            </div>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                </div>
            </div>
        </section>
    )
}

export default Order