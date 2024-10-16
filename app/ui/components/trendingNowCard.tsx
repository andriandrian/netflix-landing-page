'use client'

import Image, { StaticImageData } from 'next/image';
import { open_sans } from "@/app/ui/fonts";
import { useState } from 'react';
import Link from "next/link";

const trendingData = [
    {
        id: "1",
        title: 'DO YOU SEE WHAT I SEE',
        description: 'After Mawar falls for her very first boyfriend, her friends joy turns into suspicion as they realize he may not be who he seems.',
        tag: ['2024', '13+', 'Movie', 'Horror']
    },
    {
        id: "2",
        title: 'SOSOK KETIGA',
        description: 'After Mawar falls for her very first boyfriend, her friends joy turns into suspicion as they realize he may not be who he seems.',
        tag: ['2023', '16+', 'Movie', 'Horror']
    },
    {
        id: "3",
        title: 'RESPATI',
        description: 'Tormented by the real-life deaths that he sees in his nightmares, a teenager sets out to stop the spree before more victims fall prey to the killer.',
        tag: ['2024', '18+', 'Movie', 'Horror', 'Thrillers', 'Fantasy']
    },
    {
        id: "4",
        title: 'THE GARFIELD MOVIE',
        description: 'After a midnight snack raid with Odie goes awry, Garfield and his long-lost dad must pull off a daring dairy heist to settle the score with an angry cat.',
        tag: ['2024', '7+', 'Movie', 'Comedies', 'Kids']
    },
    {
        id: '5',
        title: 'THE PLATFORM 2',
        description: 'After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.',
        tag: ['2024', '18+', 'Movie', 'Thrillers']
    },
    {
        id: '6',
        title: 'SMILE',
        description: `A psychiatrist's life unravels when a disturbing encounter with a patient exposes her to a relentless evil presence marked by a terrifying grin.`,
        tag: ['2022', '18+', 'Movie', 'Horror']
    },
    {
        id: '7',
        title: 'RED 2',
        description: `Ex-CIA agent Frank Moses and his crew return for another high-stakes mission, scouring the globe for a missing nuclear device.`,
        tag: ['2013', '16+', 'Movie', 'Comedies', 'Action']
    },
    {
        id: '8',
        title: 'SMILE',
        description: `When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.`,
        tag: ['2024', '18+', 'Movie', 'Action', 'Thrillers']
    },
    {
        id: '9',
        title: 'MISS PEREGRINES HOME FOR PECULAR CHILDREN',
        description: `When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.`,
        tag: ['2016', '13+', 'Movie', 'Sci-Fi', 'Fantasy', 'Adventure']
    },
    {
        id: '8',
        title: 'TROUBLE',
        description: `Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.`,
        tag: ['2024', '16+', 'Movie', 'Comedies', 'Action']
    },
]

type TrendingNowCardProps = {
    id: string;
    image: StaticImageData;
    index: string;
    onClick?: () => void;
}

export default function TrendingNowCard({ id, image, index }: TrendingNowCardProps) {
    const [openModal, setOpenModal] = useState(false);
    const [currentData, setCurrentData] = useState([]);

    function handleOpenModal(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        setOpenModal(!openModal);

        const id = e.currentTarget.id

        function fillData() {
            const data = trendingData[id - 1]
            setCurrentData([])
            setCurrentData(data)
        }

        fillData()
    }

    if (openModal) {
        document.body.classList.add("overflow-y-hidden")
    } else {
        document.body.classList.remove("overflow-y-hidden")
    }

    return (
        <>
            <div id={index} className={`relative ${open_sans.className} hover:scale-105 h-[264px] w-[300px] transition-opacity ease-in-out delay-150 duration-1000`} onClick={(e) => handleOpenModal(e)}>
                <Image src={image} alt={`Trending Now ${index}`} className="relative rounded-xl shadow-md h-full w-[300px] min-w-[117px] sm:min-w-[140px] xl:min-w-[180px] object-scale-down" />
                <p className='absolute text-outline bottom-[40px] lg:bottom-[-10px] left-[-10px] lg:left-[-20px] text-black font-extrabold text-[70px] lg:text-[100px]'>{index}</p>
            </div>
            {openModal && (
                <div onClick={() => setOpenModal(false)} className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#161616] rounded-xl p-4 transition-all ease-in-out visible">
                        {currentData && (
                            <>
                                <div key={currentData?.id} className='w-[651px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 absolute top-4 right-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    <div className='relative h-[366px]'>

                                        <p className="absolute text-2xl font-bold px-10 bottom-0">{currentData?.title}</p>
                                    </div>
                                    <div className='flex flex-col pt-4 pb-10 px-10'>
                                        <div className='flex flex-row gap-2 mt-3'>
                                            {currentData?.tag.map((tag) => (
                                                <div key={tag}>
                                                    <p className='text-sm bg-[#414141] px-1 py-[3px] rounded-md text-[#fffb3] text-opacity-70'>{tag}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className='text-base mt-4'>{currentData?.description}</p>

                                        <Link href="/login" className="flex flex-row text-lg gap-2 bg-[#e50914] text-white rounded-md w-fit px-3 py-2 mt-10">
                                            <p>
                                                Get Started
                                            </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                        }
                    </div>
                </div>
            )}
        </>
    )
}