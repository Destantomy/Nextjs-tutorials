"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {

	const { push } = useRouter();
	const handleLogin = async (e: any) => {
		e.preventDefault();
		try {
			const res = await signIn('credentials', {
				redirect: false,
				email: e.target.email.value,
				password: e.target.password.value,
				callbackUrl: '/dashboard',
			});
			if (!res?.error) {
				push('/dashboard');
			} else {
				console.log(res.error);
			}
		} catch (error) {
			console.log(error)
		}
		// fetch('/api/auth/login', {
		// 		method: 'POST',
		// 		body: JSON.stringify({
		// 			email: e.currentTarget.email.value,
		// 			password: e.currentTarget.password.value
		// 	})
		// });
	}

    return(
        
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
		        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			        <div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Login to our platform</h1>
				</div>
					<form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
				<div className="divide-y divide-gray-200">
						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<div className="relative">
								<input autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
								<label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
							</div>
							<div className="relative">
								<input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
								<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
							</div>
							<div className="relative">
								<button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
							</div>
							<div>
								<p>Did not have any account? 
								</p>
									<Link href='/register' className="text-blue-600">Register here !</Link>
							</div>
						</div>
				</div>
					</form>
			    </div>
		    </div>
	    </div>
    </div>

    )
}