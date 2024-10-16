import Image from 'next/image';
import Link from 'next/link';
import netflixLogo from '../../public/netflix-logo.svg';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-20 px-6 lg:px-[148px] shadow-md absolute">
            <div className="flex items-center gap-8">
                <Image src={netflixLogo} className='w-[89px] lg:w-[147px]' alt="Netflix Logo" />
            </div>
            <div>
                <select className="px-4 py-2 text-white text-sm bg-transparent rounded-md border border-solid mr-3 hidden md:inline">
                    <option className='text-black'>Bahasa Indonesia</option>
                    <option className='text-black'>English</option>
                </select>
                <Link href="/login" className="px-4 py-2 text-white text-sm font-bold bg-red-600 rounded-md">Sign In</Link>
            </div>
        </nav>
    );
}