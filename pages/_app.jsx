import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	const [cart, setCart] = useState({});
	const [subTotal, setSubTotal] = useState(0);
	const [user, setUser] = useState({ value: null });
	const [key, setKey] = useState(0);
	const [progress, setProgress] = useState(0);
	const router = useRouter();

	const calculateSubTotal = (myCart) => {
		let subt = 0;
		for (const key in myCart) {
			if (Object.hasOwnProperty.call(myCart, key)) {
				const element = myCart[key];
				subt += element.price * element.qty;
			}
		}
		setSubTotal(subt);
	};

	const addToCart = (itemCode, qty, price, name, size, variant) => {
		let myCart = cart;
		if (itemCode in myCart) {
			myCart[itemCode].qty = myCart[itemCode].qty + qty;
		} else {
			myCart[itemCode] = { qty: qty, price, name, size, variant };
		}
		updateCart(myCart);
		toast.success("Item added to cart", {
			position: "bottom-center",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const buyNow = (itemCode, qty, price, name, size, variant) => {
		updateCart({ [itemCode]: { qty, price, name, size, variant } });
		router.push("/checkout");
	};

	const removeFromCart = (itemCode, qty) => {
		let myCart = cart;
		if (itemCode in myCart) {
			myCart[itemCode].qty = myCart[itemCode].qty - qty;
		}
		if (myCart[itemCode]["qty"] <= 0) delete myCart[itemCode];
		updateCart(myCart);
	};

	const saveCart = (newCart) => {
		localStorage.setItem("cart", JSON.stringify(newCart));
		calculateSubTotal(newCart);
	};

	const clearCart = () => {
		updateCart({});
	};

	const updateCart = (myCart) => {
		setCart(myCart);
		saveCart(myCart);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser({ value: null });
		toast.success("You are successfully logged out!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	useEffect(() => {
		router.events.on("routeChangeStart", () => setProgress(40));
		router.events.on("routeChangeComplete", () => setProgress(100));
		router.events.on("routeChangeError", () => setProgress(100));
		try {
			if (localStorage.getItem("cart")) {
				let savedCart = JSON.parse(localStorage.getItem("cart"));
				updateCart(savedCart);
				calculateSubTotal(savedCart);
			}
		} catch (error) {
			console.error(error);
			localStorage.clear();
		}
		const token = localStorage.getItem("token");
		if (token) {
			setUser({ value: token });
			setKey(Math.random());
		}
	}, [router.query]);

	return (
		<>
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navbar
				logout={logout}
				user={user}
				key={key}
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				subTotal={subTotal}
			/>
			<LoadingBar
				color="#000000"
				waitingTime={400}
				progress={progress}
                height={3}
			/>
			<Component
				toast={toast}
				buyNow={buyNow}
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				subTotal={subTotal}
				{...pageProps}
			/>
			<Footer />
		</>
	);
}

export default MyApp;
