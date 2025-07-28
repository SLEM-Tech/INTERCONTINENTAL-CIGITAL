"use client";
import React from "react";
import Picture from "../picture/Picture";
import { flowerImg, furnitureImg, headsetImg, heroImg } from "@public/images";
import { MdCheckCircle } from "react-icons/md";
import { FEATURES } from "@constants";
import { FaLock, FaExchangeAlt, FaHeadset, FaTruck } from "react-icons/fa";

import Link from "next/link";

const AllCategorySection = () => {
	const heroImages = [
		{
			id: 1,
			icon: <FaLock />,
			title: "Secure Payment",
			description: "100% secure payment",
		},
		{
			id: 2,
			icon: <FaExchangeAlt />,
			title: "30 Days Return",
			description: "If goods have problems",
		},
		{
			id: 3,
			icon: <FaHeadset />,
			title: "24/7 Support",
			description: "Dedicated support",
		},
		{
			id: 4,
			icon: <FaTruck />,
			title: "Free Delivery",
			description: "For all orders over $80",
		},
	];

	return (
		<>
			<section className='flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-12 items-center px-3 lg:px-6 gap-6 lg:min-h-screen overflow-hidden max-w-[1256px] mx-auto'>
				{/* LEFT TEXT CONTENT */}
				<div className='lg:col-span-6 z-10 text-black space-y-2 lg:space-y-8 h-full text-center lg:text-start flex flex-col justify-center'>
					<h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold lg:text-7xl tracking-tight leading-tight md:leading-8 max-w-sm lg:max-w-md'>
						Brand New Collection
					</h3>

					<p className='text-sm font-extralight lg:font-medium leading-6 text-primary max-w-sm lg:max-w-lg'>
						Mauris vitae ultricies leo integer malesuada tempor orci dapibus
						ultrices diam in arcu cursus euismod purus viverra accumsan.
					</p>

					<div className='flex flex-wrap justify-center lg:justify-start items-center gap-y-4 lg:gap-y-0 gap-x-4 lg:gap-x-8'>
						{FEATURES.map((feature) => (
							<div
								key={feature?.id}
								className='flex items-center gap-2 lg:gap-3'
							>
								<feature.icon className='text-primary text-xl' />
								<h5 className=''>{feature?.text}</h5>
							</div>
						))}
					</div>

					<Link
						href='/category'
						className='bg-primary shadow-md text-sm lg:text-base px-4 lg:px-6 py-3 flex items-center mx-auto lg:mx-0 rounded-md lg:rounded-none gap-2 text-white w-fit transition-[.3] hover:scale-105 font-semibold'
					>
						<span className='capitalize'>Explore Shop</span>
					</Link>
				</div>

				{/* RIGHT IMAGE CONTENT */}
				<div className='lg:col-span-6 relative flex justify-end items-center h-full'>
					{/* Main phone image */}
					<Picture
						src={heroImg}
						alt='hero-img'
						className='relative z-10 w-[90%] lg:w-[1200px] object-cover'
					/>
				</div>
			</section>
			<div className='bg-dark relative'>
				<div className='w-full space-y-4 lg:space-y-8 mt-8 lg:mt-0 pt-7 lg:py-14 lg:px-5 max-w-[1256px] mx-auto'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
						{heroImages.map((feature) => (
							<div
								key={feature.id}
								className='flex flex-col items-center gap-4 p-4'
							>
								<div className='mt-1 text-white text-2xl lg:text-4xl'>
									{feature.icon}
								</div>
								<div className='text-center'>
									<h3 className='font-semibold text-white'>{feature.title}</h3>
									<p className='text-white/80 text-sm font-light'>
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default AllCategorySection;
