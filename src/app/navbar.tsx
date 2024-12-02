import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const pathName = usePathname();
    const { data: session, status }: {data: any; status: string} = useSession();

    return(
        <nav className="flex bg-gray-800 py-4 px-5 justify-between">
            <div className="flex items-center h-100">
            <h1 className="text-white">This Navbar</h1>
            <ul className="flex ml-10">
                <Link href='/'>
                <li className={`mr-6 ${pathName == '/' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Home</li>
                </Link>
                <Link href='/about'>
                <li className={`mr-6 ${pathName == '/about' ? 'text-blue-300' : 'text-white'}  cursor-pointer`}>About</li>
                </Link>
                <Link href='/about/profile'>
                <li className={`mr-6 ${pathName == '/about/profile' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Profile</li>
                </Link>
            </ul>
            </div>
            <div>
                {status === 'authenticated' ? (
                    <div className="flex justify-center items-center">
                        <Image src='/images/profile.png' width={200} height={200} alt='profile.png' className="w-10 h-10 rounded-full"/>
                        <h4 className="text-white mr-5">{session?.user?.fullname}</h4>
                        <button className="bg-white rounded-md px-5 text-sm h-5 cursor-pointer mr-3"
                    onClick={() => signOut()}>Logout</button>
                    </div>
                ) : (
                    <button className="bg-white rounded-md px-5 text-sm h-5 cursor-pointer"
                onClick={() => signIn()}>Login</button>
                ) }
            </div>
        </nav>
    )
}