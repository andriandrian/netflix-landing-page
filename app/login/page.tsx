import Image from "next/image";
import backgroundImage from "../../public/backgroundImage.jpg";

export default function Page() {
    return (
        <div className="h-screen w-full"> 
            <Image src={backgroundImage} alt="bg" layout="fill" objectFit="cover" />
            <div className="bg-black opacity-60 h-full w-full absolute"></div>
            <div className="flex justify-center items-center h-full relative ">
                <div className="bg-black bg-opacity-70 py-8 px-10">

                    <h1 className="text-3xl font-extrabold">Sign In</h1>
                    <form className="flex flex-col gap-4 mt-4">
                        <input type="text" placeholder="Email or mobile numbere" className="bg-transparent px-4 py-2 rounded-md border-fill border-white border-[1px] border-opacity-45 w-[314px]" />
                        <input type="password" placeholder="Password" className="bg-transparent px-4 py-2 rounded-md border-fill border-white border-[1px] border-opacity-45 w-[314px]" />
                        <button className="bg-[#e50914] text-white font-semibold py-2 rounded-md opacity-100">Sign In</button>
                        <button className="bg-gray-300 bg-opacity-30 text-white font-medium py-2 rounded-md opacity-100">Use a Sign-In Code</button>
                    </form>
                </div>
            </div>
        </div>
    )
}