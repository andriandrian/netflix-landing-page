import Image from 'next/image';
import Link from 'next/link';
import netflixLogo from '../../public/netflix-logo.svg';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-20 px-[354px] shadow-md absolute">
            <div className="flex items-center gap-8">
                <Image src={netflixLogo} alt="Netflix Logo" width={147} />
            </div>
            <div>
                <Link href="/login" className="px-4 py-2 text-white text-sm font-bold bg-red-600 rounded-md">Sign In</Link>
            </div>
        </nav>
    );
}