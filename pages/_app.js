import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const [cart, setCart] = useState({})
    const [subTotal, setSubTotal] = useState(0)

    const calculateSubTotal = myCart => {
        let subt = 0;
        for (const key in myCart) {
            if (Object.hasOwnProperty.call(myCart, key)) {
                const element = myCart[key]
                subt += element.price * element.qty
            }
        }
        setSubTotal(subt)
    }

    const addToCart = (itemCode, qty, price, name, size, variant) => {
        let myCart = cart;
        if (itemCode in myCart) {
            myCart[itemCode].qty = myCart[itemCode].qty + qty
        } else {
            myCart[itemCode] = { qty: qty, price, name, size, variant }
        }
        updateCart(myCart)
    }

    const removeFromCart = (itemCode, qty) => {
        let myCart = cart;
        if (itemCode in myCart) {
            myCart[itemCode].qty = myCart[itemCode].qty - qty
        }
        if (myCart[itemCode]["qty"] <= 0) delete myCart[itemCode]
        updateCart(myCart)
    }

    const saveCart = newCart => {
        localStorage.setItem("cart", JSON.stringify(newCart))
        calculateSubTotal(newCart)
    }

    const clearCart = () => {
        updateCart({})
    }

    const updateCart = myCart => {
        setCart(myCart)
        saveCart(myCart)
    }

    useEffect(() => {
        try {
            if (localStorage.getItem("cart")) {
                let savedCart = JSON.parse(localStorage.getItem("cart"))
                updateCart(savedCart)
                calculateSubTotal(savedCart)
            }
        } catch (error) {
            console.error(error);
            localStorage.clear();
        }
    }, [])

    return <>
        <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
        <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
        <Footer />
    </>
}

export default MyApp
