'use client'

import Image from 'next/image';
import { open_sans } from "@/app/ui/fonts";
import React, { useEffect, useState } from 'react';
import Link from "next/link";

type TrendingNowCardProps = {
    category: string;
}

interface TrendingDataItem {
    category: string;
    id: string;
    title: string;
    image: string;
    description: string;
    tag: string[];
}

export default function TrendingNowCard({ category }: TrendingNowCardProps) {
    const [openModal, setOpenModal] = useState(false);
    const [currentData, setCurrentData] = useState<TrendingDataItem | null>(null);
    const [list, setList] = useState<TrendingDataItem[]>([]);

    useEffect(() => {
        const data: any = trendingData.filter((data) => data.category === category)
        setList(data)
        console.log(data)
    }, [category])

    function handleOpenModal(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        setOpenModal(!openModal);
        console.log(e.currentTarget)
        const id = e.currentTarget.id

        function fillData() {
            const data = trendingData.find((data) => data.id === id); // Gunakan find untuk mencari berdasarkan id
            setCurrentData(data || null); // Set currentData sebagai null jika tidak ditemukan
            console.log(data, "data modal")
            console.log("CURRENT DATA", currentData)
        }

        fillData()
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (openModal) {
                document.body.classList.add("overflow-y-hidden");
            } else {
                document.body.classList.remove("overflow-y-hidden");
            }

            // Cleanup function to remove the class when the component unmounts
            return () => {
                document.body.classList.remove("overflow-y-hidden");
            };
        }
    }, [openModal]);

    return (
        <>
            {
                list.map((data, index) => (
                    <div id={`${data.id}`} key={data.id} className={`relative ${open_sans.className} hover:scale-105 h-[264px] w-[300px] transition-opacity ease-in-out delay-150 duration-1000`} onClick={(e) => handleOpenModal(e)}>
                        <Image src={data.image} alt={`Trending Now ${index}`} width={300} height={100} className="relative rounded-xl shadow-md h-full w-[300px] min-w-[117px] sm:min-w-[140px] xl:min-w-[180px] object-scale-down" />
                        <p className='absolute text-outline bottom-[40px] lg:bottom-[-10px] left-[-10px] lg:left-[-20px] text-black font-extrabold text-[70px] lg:text-[100px]'>{++index}</p>
                    </div>
                ))

            }

            {openModal && (
                console.log("OPEN MODAL", currentData),
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

const trendingData: TrendingDataItem[] = [
    {
        id: "1",
        image: '/images/idn1/poster1.png',
        category: "idn1",
        title: 'DO YOU SEE WHAT I SEE',
        description: 'After Mawar falls for her very first boyfriend, her friends joy turns into suspicion as they realize he may not be who he seems.',
        tag: ['2024', '13+', 'Movie', 'Horror']
    },
    {
        id: "2",
        category: "idn1",
        image: '/images/idn1/poster2.png',
        title: 'SOSOK KETIGA',
        description: 'After Mawar falls for her very first boyfriend, her friends joy turns into suspicion as they realize he may not be who he seems.',
        tag: ['2023', '16+', 'Movie', 'Horror']
    },
    {
        id: "3",
        title: 'RESPATI',
        image: '/images/idn1/poster3.png',
        category: "idn1",
        description: 'Tormented by the real-life deaths that he sees in his nightmares, a teenager sets out to stop the spree before more victims fall prey to the killer.',
        tag: ['2024', '18+', 'Movie', 'Horror', 'Thrillers', 'Fantasy']
    },
    {
        id: "4",
        title: 'THE GARFIELD MOVIE',
        image: '/images/idn1/poster4.png',
        category: "idn1",
        description: 'After a midnight snack raid with Odie goes awry, Garfield and his long-lost dad must pull off a daring dairy heist to settle the score with an angry cat.',
        tag: ['2024', '7+', 'Movie', 'Comedies', 'Kids']
    },
    {
        id: '5',
        title: 'THE PLATFORM 2',
        image: '/images/idn1/poster5.png',
        category: "idn1",
        description: 'After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.',
        tag: ['2024', '18+', 'Movie', 'Thrillers']
    },
    {
        id: '6',
        title: 'SMILE',
        image: '/images/idn1/poster6.png',
        category: "idn1",
        description: `A psychiatrist's life unravels when a disturbing encounter with a patient exposes her to a relentless evil presence marked by a terrifying grin.`,
        tag: ['2022', '18+', 'Movie', 'Horror']
    },
    {
        id: '7',
        title: 'RED 2',
        image: '/images/idn1/poster7.png',
        category: "idn1",
        description: `Ex-CIA agent Frank Moses and his crew return for another high-stakes mission, scouring the globe for a missing nuclear device.`,
        tag: ['2013', '16+', 'Movie', 'Comedies', 'Action']
    },
    {
        id: '8',
        title: 'SMILE',
        image: '/images/idn1/poster8.png',
        category: "idn1",
        description: `When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.`,
        tag: ['2024', '18+', 'Movie', 'Action', 'Thrillers']
    },
    {
        id: '9',
        title: 'MISS PEREGRINES HOME FOR PECULAR CHILDREN',
        image: '/images/idn1/poster9.png',
        category: "idn1",
        description: `When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.`,
        tag: ['2016', '13+', 'Movie', 'Sci-Fi', 'Fantasy', 'Adventure']
    },
    {
        id: '10',
        title: 'TROUBLE',
        image: '/images/idn1/poster10.png',
        category: "idn1",
        description: `Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.`,
        tag: ['2024', '16+', 'Movie', 'Comedies', 'Action']
    },
    // IDN2
    // =============================
    {
        id: '11',
        title: 'Culinary Class Wars',
        image: '/images/idn2/1.png',
        category: "idn2",
        description: `Eighty "Black Spoon" underdog cooks with a knack for flavor face 20 elite "White Spoon" chefs in a fierce cooking showdown among 100 contenders.`,
        tag: ['2024', '13+', 'Season']
    },
    {
        id: '12',
        title: 'Love Next Door',
        image: '/images/idn2/2.png',
        category: "idn2",
        description: `A woman attempting to reboot her life returns to Korea and becomes entangled with her childhood friend — with whom she shares a complicated history.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '13',
        title: 'GyeongSeong Creature',
        image: '/images/idn2/3.png',
        category: "idn2",
        description: `In 2024 Seoul, fate-bound ties to Gyeongseong unravel when Chae-ok meets Ho-jae, a man with an uncanny resemblance to Tae-sang. What will destiny reveal?`,
        tag: ['2024', '16+', 'Season']
    },
    {
        id: '14',
        title: 'Pay Later',
        image: '/images/idn2/4.png',
        category: "idn2",
        description: `A wannabe fashion influencer winds up in debt after buying too many accessories — forcing her to become a debt collector to pay off her balance.`,
        tag: ['2024', '13+', 'Season']
    },
    {
        id: '15',
        title: 'DAN DA DAN',
        image: '/images/idn2/5.png',
        category: "idn2",
        description: `In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!`,
        tag: ['2024', '16+', 'Season']
    },
    {
        id: '16',
        title: 'Deceitful Love',
        image: '/images/idn2/6.png',
        category: "idn2",
        description: `After turning 60, a wealthy woman suddenly falls in love with an attractive and much younger man, but her family raises doubts about his intentions.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '17',
        title: 'BLUELOCK',
        image: '/images/idn2/7.png',
        category: "idn2",
        description: `After surviving the brutal Second Selection, the Blue Lock strikers face a match against the U-20 national team, which will determine the project's fate.`,
        tag: ['2024', '13+', 'Season']
    },
    {
        id: '18',
        title: 'THE AMAZING DIGITAL CIRCUS',
        image: '/images/idn2/8.png',
        category: "idn2",
        description: `A woman gets trapped in a bizarre circus-themed virtual world with five other people and forced to play games under the direction of a wacky AI.`,
        tag: ['2023', '13+', 'Season']
    },
    {
        id: '19',
        title: 'MONSTER THE ELYLYE AND ERIK MENENDEZ STORY',
        image: '/images/idn2/9.png',
        category: "idn2",
        description: `This riveting true-crime drama probes the lives of the Menendez brothers, convicted of the brutal 1989 murders of their parents in Beverly Hills.`,
        tag: ['2024', '18+', 'Season']
    },
    // GLOBAL 1
    // ==============================
    {
        id: '20',
        title: 'The Menendez Brothers',
        image: '/images/global1/1.png',
        category: "global1",
        description: `Serving life in prison for murdering their parents, Lyle and Erik Menendez speak out in this documentary examining the shocking crime and ensuing trials.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '21',
        title: 'The Predator',
        image: '/images/global1/2.png',
        category: "global1",
        description: `When a Predator ship crash-lands on Earth, an alien tracker, a secret government agency, a biologist and a group of military castoffs race to find it.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '22',
        title: 'Lonely Planet',
        image: '/images/global1/3.png',
        category: "global1",
        description: `Serving life in prison for murdering their parents, Lyle and Erik Menendez speak out in this documentary examining the shocking crime and ensuing trials.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '23',
        title: 'Bad Boys: Ride or Die',
        image: '/images/global1/4.png',
        category: "global1",
        description: `Serving life in prison for murdering their parents, Lyle and Erik Menendez speak out in this documentary examining the shocking crime and ensuing trials.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '24',
        title: `IT'S WHAT'S INSIDE`,
        image: '/images/global1/5.png',
        category: "global1",
        description: 'A pre-wedding reunion descends into a psychological nightmare for a group of college friends when a surprise guest arrives with a mysterious suitcase.',
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '25',
        title: `Venom: Let There Be Carnage`,
        image: '/images/global1/6.png',
        category: "global1",
        description: 'While Eddie Brock and Venom try to navigate their thorny relationship, a new threat rises from serial killer Cletus Kasady and a new alien symbiote.',
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '26',
        title: `Monster High 2`,
        image: '/images/global1/7.png',
        category: "global1",
        description: 'A half-wolf, half-human teen and her friends return to Monster High for sophomore year, facing a new threat to the school and their friendship.',
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '27',
        title: `Rebel Ridge`,
        image: '/images/global1/8.png',
        category: "global1",
        description: `A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.`,
        tag: ['2024', '18+', 'Movie']
    },
    // GLOBAL 2
    // ==============================
    {
        id: '28',
        title: `The Platform 2`,
        image: '/images/global2/1.png',
        category: "global2",
        description: `After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '29',
        title: `Trouble`,
        image: '/images/global2/2.png',
        category: "global2",
        description: `Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '30',
        title: `Uprising`,
        image: '/images/global2/3.png',
        category: "global2",
        description: `In the Joseon Dynasty, two friends who grew up together — one the master and one the servant — reunite post-war as enemies on opposing sides.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '31',
        title: `Khel Khel Mein`,
        image: '/images/global2/4.png',
        category: "global2",
        description: `An unhappily married couple and five friends decide to share every call or text they get over one night with each other. There's nothing to hide — right?`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '32',
        title: `The Platform`,
        image: '/images/global2/5.png',
        category: "global2",
        description: `A slab of food descends down a vertical facility. The residents above eat heartily, leaving those below starving and desperate. A rebellion is imminent.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '33',
        title: `The Boy and the Heron`,
        image: '/images/global2/6.png',
        category: "global2",
        description: `After his mother's death, young Mahito moves to her hometown, where a mysterious heron leads him into a fantastic realm shared by the living and the dead.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '34',
        title: `GOAT - The Greatest of All Time`,
        image: '/images/global2/7.png',
        category: "global2",
        description: `He was his agency's top hostage negotiator, field agent and spy — but years after retiring, one mission brings his past back to haunt him and his family.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '35',
        title: `Breaking the Silence: The Maria Soledad Case`,
        image: '/images/global2/8.png',
        category: "global2",
        description: `In 90s Argentina, the murder of a student sparked the "Silent Marches" across the country. This documentary follows her friends in their quest for justice.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '36',
        title: `CTRL`,
        image: '/images/global2/9.png',
        category: "global2",
        description: `Nella and Joe are the perfect influencer couple. But when he cheats on her, she turns to an AI app to erase him from her life — until it takes control.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '37',
        title: `In Her Place`,
        image: '/images/global2/10.png',
        category: "global2",
        description: `After Chilean writer María Carolina Geel murders her lover, the case captivates shy legal secretary Mercedes, sparking a connection between the two women.`,
        tag: ['2024', '18+', 'Movie']
    },
    // GLOBAL 3
    // ==============================
    {
        id: '38',
        title: `Outer Banks`,
        image: '/images/global3/1.png',
        category: "global3",
        description: `The Pogues return home and start living their best life, but it's not long before they're back to doing what they do best: hunting for treasure.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '39',
        title: `Nobody Wants This`,
        image: '/images/global3/2.png',
        category: "global3",
        description: `An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '40',
        title: `Monsters`,
        image: '/images/global3/3.png',
        category: "global3",
        description: `This riveting true-crime drama probes the lives of the Menendez brothers, convicted of the brutal 1989 murders of their parents in Beverly Hills.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '41',
        title: `Love Is Blind`,
        image: '/images/global3/4.png',
        category: "global3",
        description: `A new group of singles enters the pods, ready to abandon superficial judgments and face possible heartbreak to find true love and lasting commitments.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '42',
        title: `The Amazing Digital Circus`,
        image: '/images/global3/5.png',
        category: "global3",
        description: `A woman gets trapped in a bizarre circus-themed virtual world with five other people and forced to play games under the direction of a wacky AI.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '43',
        title: `Ali Wong: Single Lady`,
        image: '/images/global3/6.png',
        category: "global3",
        description: `After a whirlwind couple of years, Ali Wong returns to the stage to dish on the highs, lows and surprises of dating post-divorce.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '44',
        title: `Heartstopper`,
        image: '/images/global3/7.png',
        category: "global3",
        description: `Charlie and Nick are ready to take things to the next level. As they grow closer in every way, they face their relationship's biggest challenge yet.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '45',
        title: `The Perfect Couple`,
        image: '/images/global3/8.png',
        category: "global3",
        description: `Amelia is about to marry into one of the wealthiest families on Nantucket, until a shocking death derails the wedding — and turns everyone into a suspect.`,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '46',
        title: `Unsolved Mysteries`,
        image: '/images/global3/9.png',
        category: "global3",
        description: ``,
        tag: ['2024', '18+', 'Movie']
    },
    {
        id: '47',
        title: `Prison Break`,
        image: '/images/global3/10.png',
        category: "global3",
        description: `Determined to help his brother break out of prison, a structural engineer holds up a bank so he can get arrested and smuggle in the prison blueprints.`,
        tag: ['2024', '18+', 'Movie']
    },
    // GLOBAL 4
    // ==============================
    {
        id: '48',
        title: `Deceitful Love`,
        image: '/images/global4/1.png',
        category: "global4",
        description: `After turning 60, a wealthy woman suddenly falls in love with an attractive and much younger man, but her family raises doubts about his intentions.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '49',
        title: `DAN DA DAN`,
        image: '/images/global4/2.png',
        category: "global4",
        description: `In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '50',
        title: `The Secret of the River`,
        image: '/images/global4/3.png',
        category: "global4",
        description: `When a young boy arrives in a small Mexican village, a profound friendship blossoms with a local kid — and a dark secret seals their bond forever.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '51',
        title: `Culinary Class Wars`,
        image: '/images/global4/4.png',
        category: "global4",
        description: `Eighty "Black Spoon" underdog cooks with a knack for flavor face 20 elite "White Spoon" chefs in a fierce cooking showdown among 100 contenders.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '52',
        title: `Ranma1/2`,
        image: '/images/global4/5.png',
        category: "global4",
        description: `Akane Tendo meets her new fiancé, Ranma Saotome, a martial arts prodigy with a twist: he magically transforms into a girl upon touching cold water.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '53',
        title: `Love Next Door`,
        image: '/images/global4/6.png',
        category: "global4",
        description: `A woman attempting to reboot her life returns to Korea and becomes entangled with her childhood friend — with whom she shares a complicated history.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '54',
        title: `Gyeongseong Creature`,
        image: '/images/global4/7.png',
        category: "global4",
        description: `In 2024 Seoul, fate-bound ties to Gyeongseong unravel when Chae-ok meets Ho-jae, a man with an uncanny resemblance to Tae-sang. What will destiny reveal?`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '55',
        title: `Love Is Blind, Habibi`,
        image: '/images/global4/8.png',
        category: "global4",
        description: `Celebrity couple Khaled Saqer and Elham Ali host this social experiment, where Arab singles connect and commit to marriage — before meeting face-to-face.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '56',
        title: `Envious`,
        image: '/images/global4/9.png',
        category: "global4",
        description: `After a devastating breakup, Vicky, almost 40, embarks on a quest for new love, unaware it will lead her to a profound—and hilarious—self-discovery.`,
        tag: ['2024', '18+', 'Season']
    },
    {
        id: '57',
        title: `The Great Indian Kapil Show`,
        image: '/images/global4/10.png',
        category: "global4",
        description: `Comedian Kapil Sharma brings desi fun to an all-new season featuring celebrity guests, side-splitting gags and a dash of classic Indian charm.`,
        tag: ['2024', '18+', 'Season']
    },
]