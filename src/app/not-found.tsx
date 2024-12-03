import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center min-h-screen justify-center">
            <h1 className="text-9xl">404</h1>
            <h2 className="text-xl mb-5">Yo man! page not found</h2>
            <Link href='/' className='bg-blue-700 text-white p-3'>Back to Home</Link>
        </div>
    )
}