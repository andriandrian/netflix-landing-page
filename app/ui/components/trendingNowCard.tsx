'use client'

import Image from 'next/image';
import { open_sans } from "@/app/ui/fonts";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { trendingData, TrendingDataItem } from '@/app/data/trendingData';

type TrendingNowCardProps = {
    category: string;
}

export default function TrendingNowCard({ category }: TrendingNowCardProps) {
    const [openModal, setOpenModal] = useState(false);
    const [currentData, setCurrentData] = useState<TrendingDataItem | null>(null);
    const [list, setList] = useState<TrendingDataItem[]>([]);

    useEffect(() => {
        const filteredData = trendingData.filter((data) => data.category === category);
        setList(filteredData);
    }, [category]);

    function handleOpenModal(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        setOpenModal(!openModal);
        const id = e.currentTarget.id;

        const data = trendingData.find((data) => data.id === id);
        setCurrentData(data || null);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (openModal) {
                document.body.classList.add("overflow-y-hidden");
            } else {
                document.body.classList.remove("overflow-y-hidden");
            }

            return () => {
                document.body.classList.remove("overflow-y-hidden");
            };
        }
    }, [openModal]);

    return (
        <>
            {
                list.map((data, index) => (
                    <div id={`${data.id}`} key={data.id} className={`relative ${open_sans.className} cursor-pointer hover:scale-105 h-[264px] w-[300px] transition-opacity ease-in-out delay-150 duration-1000`} onClick={(e) => handleOpenModal(e)}>
                        <Image src={data.image} alt={`Trending Now ${index}`} width={300} height={100} className="relative rounded-xl shadow-md h-full w-[300px] min-w-[117px] sm:min-w-[140px] xl:min-w-[180px] object-scale-down" />
                        <p className='absolute text-outline bottom-[40px] lg:bottom-[-10px] left-[-10px] lg:left-[-20px] text-black font-extrabold text-[70px] lg:text-[100px]'>{++index}</p>
                    </div>
                ))

            }

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
                                            {currentData?.tag?.map((tag) => (
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