import Image from 'next/image';

export default function Card({ title, description, icon, iconAlt }) {
    return (
        <div className="relative bg-gradient-to-r from-[#192144] to-[#210e17] h-fit md:h-72 lg:h-[325px] rounded-xl shadow-md w-full     md:w-full xl:w-1/4 px-2 py-4">
            <div className="p-4 lg:py-4 lg:px-2 ">
                <h1 className="text-2xl font-bold xl:max-w-[242px]">{title}</h1>
                <p className="text-base text-slate-300 mt-4">{description}</p>
                <Image src={icon} alt={iconAlt} className="float-right md:absolute bottom-4 right-4" />
            </div>
        </div>
    );
}