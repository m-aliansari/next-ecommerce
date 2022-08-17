import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	AiOutlineShoppingCart,
	AiFillCloseCircle,
	AiFillPlusCircle,
	AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({
    logout,
	user,
	cart,
	addToCart,
	removeFromCart,
	clearCart,
	subTotal,
}) => {
	const [dropdown, setDropdown] = useState(false);
	const ref = useRef(null);

	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (!ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};

	return (
		<>
			<div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-md sticky top-0 bg-white z-10">
				<Link href="/">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
						<Image src="/favicon.ico" alt="" height={40} width={40} />
						<span className="ml-3 text-xl">CODESWEAR.COM</span>
					</a>
				</Link>
				<nav className="mt-2 md:mt-0 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
					<Link href={"/tshirts"}>
						<a className="mr-5 hover:text-gray-900">Tshirts</a>
					</Link>
					<Link href={"/hoodies"}>
						<a className="mr-5 hover:text-gray-900">Hoodies</a>
					</Link>
					<Link href={"/stickers"}>
						<a className="mr-5 hover:text-gray-900">Stickers</a>
					</Link>
					<Link href={"/mugs"}>
						<a className="mr-5 hover:text-gray-900">Mugs</a>
					</Link>
				</nav>
				<div className="flex items-center mt-3 md:mt-0">
					<a onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
						{user.value && dropdown && (
							<div className="shadow-lg absolute py-4 top-14 right-16 bg-gray-200 rounded-md px-4 w-40">
								<ul>
									<Link href={"/account"}><a><li className="text-sm py-1 hover:text-gray-500 font-bold">Account</li></a></Link>
									<Link href={"/orders"}><a><li className="text-sm py-1 hover:text-gray-500 font-bold">Orders</li></a></Link>
									<hr className="border-black my-1" />
									<a onClick={logout} className="cursor-pointer"><li className="text-sm py-1 hover:text-gray-500 font-bold">Logout</li></a>
								</ul>
							</div>
						)}
						{user.value && (
							<MdAccountCircle
								className="mx-2 text-3xl md:text-4xl md:mx-4 cursor-pointer"
							/>
						)}
					</a>
					{!user.value && (
						<Link href={"/login"}>
							<a>
								<button className="bg-gray-600 px-4 py-1 rounded-md text-sm text-white mx-2">
									Login
								</button>
							</a>
						</Link>
					)}
					<AiOutlineShoppingCart
						onClick={toggleCart}
						className="text-3xl md:text-4xl cursor-pointer"
					/>
				</div>
				<div
					ref={ref}
					className={`w-72 h-[100vh] overflow-y-scroll sideCart absolute top-0 right-0 bg-gray-100 px-8 py-10 transform transition-transform ${
						Object.keys(cart).length ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<h2 className="font-bold text-xl mb-4">Shopping Cart</h2>
					<span
						onClick={toggleCart}
						className="absolute top-5 right-2 cursor-pointer text-2xl text-gray-500"
					>
						<AiFillCloseCircle />
					</span>
					<ol className="font-semibold list-decimal">
						{Object.keys(cart).length === 0 && (
							<div className="my-4 font-normal">Your cart is empty</div>
						)}
						{cart &&
							Object.keys(cart).map((key) => {
								let element = cart[key];
								return (
									<li key={key}>
										<div className="flex item my-3">
											<div className="w-2/3">
												{element.name} ({element.size}/{element.variant})
											</div>
											<div className="w-1/3 flex justify-center items-center text-gray-500">
												<AiFillMinusCircle
													onClick={() => {
														removeFromCart(key, 1);
													}}
													className="cursor-pointer text-gray-500 text-lg"
												/>
												<span className="mx-2 text-md">{element.qty}</span>
												<AiFillPlusCircle
													onClick={() => {
														addToCart(
															key,
															1,
															element.price,
															element.name,
															element.size,
															element.variant
														);
													}}
													className="cursor-pointer text-gray-500 text-lg"
												/>
											</div>
										</div>
									</li>
								);
							})}
					</ol>
					<div className="flex items-center w-full pt-4 pb-2 font-bold lg:pt-5 lg:px-3 last:border-b-0 last:text-lg last:pb-0">
						Subtotal<span className="ml-2">₨{subTotal}</span>
					</div>
					<div className="flex">
						<Link href={"/checkout"}>
							<button className="flex mr-3 text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded text-sm">
								<BsFillBagCheckFill className="mr-2" />
								Checkout
							</button>
						</Link>
						<button
							onClick={clearCart}
							className="flex text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded text-sm"
						>
							Clear Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
