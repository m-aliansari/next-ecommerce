import React from 'react'
import Link from 'next/link'

const Tshirts = ({ products }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center -m-4">
                        {
                            Object.keys(products).map(key => {
                                let product = products[key]
                                return (
                                    <Link passHref={true} key={product._id} href={`/product/${product.slug}`}><div className="lg:w-1/4 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-5">
                                        <a className="block relative rounded overflow-hidden">
                                            <img alt="ecommerce" className="m-auto w-auto block h-[26vh]" src={product.img} />
                                        </a>
                                        <div className="mt-4 text-center md:text-left">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{product.category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                            <p className="mt-1">₨{product.price}</p>
                                            <div className="mt-3">
                                                {product.size.includes("S") && <span className='border border-gray-600 px-1 mx-1'>S</span>}
                                                {product.size.includes("M") && <span className='border border-gray-600 px-1 mx-1'>M</span>}
                                                {product.size.includes("L") && <span className='border border-gray-600 px-1 mx-1'>L</span>}
                                                {product.size.includes("XL") && <span className='border border-gray-600 px-1 mx-1'>XL</span>}
                                                {product.size.includes("XXL") && <span className='border border-gray-600 px-1 mx-1'>XXL</span>}
                                            </div>
                                            <div className="mt-2 flex">
                                                {
                                                    product.color.map(c => <button key={c} className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none" style={{backgroundColor: c}}></button>)
                                                }
                                            </div>
                                        </div>
                                    </div></Link>

                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

import { connections, connect } from "mongoose";
import Product from "../models/Product";

export async function getServerSideProps(context) {
    if (!connections[0].readyState) {
        connect(process.env.MONGO_URI)
    }
    let products = await Product.find({ category: "tshirt" })
    let tshirts = {}
    for (let item of products) {
        if (item.title in tshirts) {
            if (!tshirts[item.title].color.includes(item.color.toLowerCase()) && item.availableQty > 0)
                tshirts[item.title].color.push(item.color.toLowerCase())
            if (!tshirts[item.title].size.includes(item.size.toUpperCase()) && item.availableQty > 0)
                tshirts[item.title].size.push(item.size.toUpperCase())
        } else {
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0) {
                tshirts[item.title].color = [item.color.toLowerCase()]
                tshirts[item.title].size = [item.size.toUpperCase()]
            }
        }
    }
    return {
        props: { products: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
    }
}

export default Tshirts