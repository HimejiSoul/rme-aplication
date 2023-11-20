import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
	return (
		<div className="flex w-screen h-screen bg-white justify-center items-center overflow-hidden">
			<img
				src="/assets/loginPage/eclipse-3.svg"
				className="absolute w-[200px] h-[200px] top-0 left-0"
			/>
			<img
				src="/assets/loginPage/rectangle-1.svg"
				className="absolute w-[200px] h-[200px] bottom-7 right-7"
			/>
			<img
				src="/assets/loginPage/vector-1.svg"
				className="absolute w-[600px] h-[500px] top-0 right-0 z-0"
			/>
			<img
				src="/assets/loginPage/vector-2.svg"
				className="absolute w-[600px] h-[500px] bottom-0 left-0 z-0"
			/>
			<div className="flex flex-col w-[400px] rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] px-7 py-12 z-10 bg-white">
				<div className="flex flex-col gap-0 text-center mb-12 text-[#393939] font-urbanist">
					<p className="text-lg font-semibold">Selamat Datang</p>
					<p className="text-3xl font-bold">
						Masuk untuk Melihat Rekam Medis Anda
					</p>
				</div>
				<div className="flex flex-col gap-4 text-black text-opacity-30 mb-3 font-inter text-sm">
					<div className="flex shadow appearance-none border w-full px-3 py-2 focus:outline-none rounded-lg text-black gap-2">
						<Image
							src="/assets/loginPage/usernameFace.svg"
							width={20}
							height={20}
						/>
						<input
							id="username"
							type="text"
							placeholder="Username"
							className="w-full focus:outline-none"
						/>
					</div>
					<div className="flex shadow appearance-none border w-full px-3 py-2 rounded-lg text-black gap-2">
						<Image src="/assets/loginPage/passKey.svg" width={20} height={20} />
						<input
							id="password"
							type="password"
							placeholder="Password"
							className="w-full focus:outline-none"
						/>
						<Image src="/assets/loginPage/passEye.svg" width={20} height={20} />
					</div>
				</div>
				<p className="text-black text-opacity-30 text-right mb-6 font-medium text-[10px] font-inter">
					Lupa Password?
				</p>
				<div className="bg-[#1479FF] w-full rounded-md px-3 py-2 text-center mb-12 text-sm">
					Masuk
				</div>
				<p className="text-black text-opacity-30 text-center text-sm font-semibold">
					Belum punya akun?{" "}
					<Link
						href="/pages/register"
						className="text-[#1479FF] font-bold hover:underline hover:underline-offset-2"
					>
						Buat Akun
					</Link>
				</p>
			</div>
		</div>
	);
}
