import React, { useState } from "react"
// import logo from "../assets/logo.png";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<header className='bg-white shadow-sm'>
			<div className='container mx-auto flex items-center justify-between py-4 px-6'>
				{/* Logo + Title */}
				<div className='flex items-center space-x-4'>
					<img src='/logo.png' alt='Logo' className='h-8 w-auto' />
					<h1 className='text-xl font-bold text-gray-800'>
						Investment Calculator
					</h1>
				</div>

				{/* Hamburger for mobile */}
				<button
					className='md:hidden text-gray-800 focus:outline-none'
					onClick={toggleMenu}
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						{isOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>

				{/* Navigation */}
				<nav className={`space-x-4 md:flex ${isOpen ? "block" : "hidden"}`}>
					<a
						href='/about'
						className='block md:inline text-gray-800 hover:text-gray-500'
					>
						About
					</a>
					<a
						href='/services'
						className='block md:inline text-gray-800 hover:text-gray-500'
					>
						Services
					</a>
					<a
						href='/contact'
						className='block md:inline text-gray-800 hover:text-gray-500'
					>
						Contact
					</a>
				</nav>
			</div>
		</header>
	)
}
