import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-dvh flex flex-col items-center justify-center text-center leading-loose"> 
            <h1 className="mb-4 text-7xl">404</h1>
            <p className="mb-8 text-4xl">PAGE NOT FOUND</p>
            <Link href="/" className="text-xl underline">back to home</Link>
        </div>
    );
} 

