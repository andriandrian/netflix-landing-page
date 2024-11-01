'use client';

import Image from "next/image";
import netflixBg from "../public/netflix-bg.jpg";
import Card from "./ui/components/card";
import iconSatu from "../public/1.png";
import iconDua from "../public/2.png";
import iconTiga from "../public/3.png";
import iconEmpat from "../public/4.png";
import { useState, useRef } from "react";
import Link from "next/link";
import TrendingNowCard from "./ui/components/trendingNowCard";
import * as React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { OutlinedInputProps } from "@mui/material";
import Navbar from "./ui/navbar";


const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    slotProps={{
      input: { disableUnderline: true } as Partial<OutlinedInputProps>,
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    border: '1px solid',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: '#b4b6b9',
    color: '#ffffff',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      // backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      // backgroundColor: 'transparent',
      borderColor: '#ffffff',
    },
    '& label.Mui-focused': {
      color: '#ffffff',
    },
    '&:hover fieldset': {
      borderColor: '#ffffff',
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastOpen, setLastOpen] = useState(0);
  const containerRef = useRef<HTMLInputElement>(null)
  const [itemWidth, setItemWidth] = useState(0);


  const indonesiaContent = [
    {
      label: "Movies",
      value: "idn1"
    },
    {
      label: "TV Shows",
      value: "idn2"
    }
  ]

  const globalContent = [
    {
      label: "Movies - English",
      value: "global1"
    },
    {
      label: "Movies - Other Languages",
      value: "global2"
    },
    {
      label: "TV Shows - English",
      value: "global3"
    },
    {
      label: "TV Shows - Other Languages",
      value: "global4"
    }
  ]

  const handleScroll = (scrollAmount: number) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);
    containerRef.current!.scrollLeft = newScrollPosition;
  }

  const [region, setRegion] = useState("Indonesia");
  const [content, setContent] = useState("Movies");
  const [contentList, setContentList] = useState(indonesiaContent)
  const [currentCategory, setCurrentCategory] = useState("idn1")

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1920) {
        setItemWidth(700);
      } else if (window.innerWidth >= 1536) {
        setItemWidth(900);
      } else if (window.innerWidth >= 1280) {
        setItemWidth(800);
      } else if (window.innerWidth >= 1024) {
        setItemWidth(700);
      } else if (window.innerWidth >= 640) {
        setItemWidth(500);
      } else {
        setItemWidth(350);
      }
    };

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function handleRegionSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(e.target.value)
    setScrollPosition(0);
    containerRef.current!.scrollLeft = 0;

    if (e.target.value === "Indonesia") {
      setContentList(indonesiaContent)
      setContent("idn1")
      setCurrentCategory("idn1")
    }
    if (e.target.value === "Global") {
      setContentList(globalContent)
      setContent("global1")
      setCurrentCategory("global1")
    }
  }

  function handleContentSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setContent(e.target.value)
    const content = e.target.value
    setScrollPosition(0);
    containerRef.current!.scrollLeft = 0;

    if (content == "idn1") {
      setCurrentCategory("idn1")
    } else if (content == "idn2") {
      setCurrentCategory("idn2")
    } else if (content == "global1") {
      setCurrentCategory("global1")
    } else if (content == "global2") {
      setCurrentCategory("global2")
    } else if (content == "global3") {
      setCurrentCategory("global3")
    } else if (content == "global4") {
      setCurrentCategory("global4")
    }
  }

  function handleOpenDetail(index: number) {
    const id = index + 1;

    const answer = document.getElementById(`answer${id}`);
    const icon = document.getElementById(`icon${id}`);

    if (lastOpen === id) {
      answer!.classList.remove("visible");
      answer!.style.height = "0";
      icon?.classList.remove("rotate-45");
      setLastOpen(0);
      return;
    }

    if (!answer!.classList.contains("visible")) {
      answer!.classList.add("visible");
      answer!.style.height = "auto";
      icon!.classList.add("rotate-45");
    } else {
      answer!.classList.remove("visible");
      answer!.style.height = "0";
      icon?.classList.remove("rotate-45");
    }

    if (lastOpen !== 0) {
      const lastAnswer = document.getElementById(`answer${lastOpen}`);
      const lastIcon = document.getElementById(`icon${lastOpen}`);
      if (lastAnswer) {
        lastAnswer.classList.remove("visible");
        lastAnswer.style.height = "0";
      }
      lastIcon?.classList.remove("rotate-45");
    }
    setLastOpen(id);
  }

  return (
    <div className="mx-auto relative" >
      <main className="relative w-full 2xl:max-w-[1920px] mx-auto">
        <div className="absolute z-40 w-full mx-auto">
          <Navbar />
        </div>
        <Image src={netflixBg} alt="Netflix Background" className="absolute w-full z-0 h-screen object-cover 2xl:max-h-[996px]" />
        <div className="absolute bg-black opacity-70 z-2 w-full h-screen 2xl:max-h-[996px]"></div>
        <div className="relative h-screen w-full flex items-center justify-center flex-col px-8 max-h-[996px]">
          <h1 className="text-3xl md:text-[32px]  lg:text-[56px] font-black text-center md:leading-[3rem] lg:leading-[5rem] max-w-[420px] md:max-w-[432px]  lg:max-w-[610px] mt-48 indent-px">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="mt-6 sm:w-[432px] md:w-[432px] lg:w-[588px] text-base md:text-xl md:font-bold text-center">Starts at IDR 54,000. Cancel anytime.</p>
          <p className="mt-8 sm:w-[432px] md:w-[432px] lg:w-[588px] text-base text-center ">Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="flex flex-col md:flex-row w-full gap-2 sm:w-[432px] md:w-[432px] lg:w-[588px] justify-center items-center mt-4">
            <div className="w-full">
              <RedditTextField
                label="Email address"
                defaultValue=""
                id="email-input"
                variant="filled"
                // style={{ marginTop: 11 }}
                InputLabelProps={{
                  style: { color: '#b3b3b3' },
                }}
                className="bg-transparent w-full rounded-sm none"
              />
            </div>
            <button className="bg-red-600 text-white font-bold px-4 h-[60px] rounded-sm ml-2 flex flex-row items-center gap-3">
              <p className="text-lg md:text-base  lg:text-xl text-nowrap">Get Started</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </form>
        </div>

        <div className="custom-gradient relative w-full h-[100px]">

          <div className="custom-parent absolute w-full h-full z-10">
            <div className="custom-child h-1 ">
            </div>
          </div>
        </div>

        <section className="px-6 md:px-8  lg:px-36 2xl:px-[354px] relative">
          <div className="">
            <h1 className="text-[18px] lg:text-[24px] font-bold">Trending Now</h1>
            <div className="flex flex-col md:flex-row md:gap-5">
              <select onChange={handleRegionSelect} value={region} className="bg-transparent text-white text-base rounded-md border border-solid border-[0.5x] mt-4 py-4 lg:py-3 pl-3 pr-6 w-full md:w-fit">
                <option className="text-black">Indonesia</option>
                <option className="text-black">Global</option>
              </select>
              <select onChange={handleContentSelect} value={content} className="bg-transparent text-white text-base rounded-md border border-solid border-[0.5x] mt-4 py-4 lg:py-3 pl-3 pr-6 w-full md:w-fit">
                {contentList && (contentList.map((item, index) => (
                  <option key={index} value={item.value} className="text-black">{item.label}</option>
                )))}
                {/* <option className="text-black">Movies</option>
                <option className="text-black">TV Shows</option> */}
              </select>
            </div>

            <div className="relative">

              <div id="trendCaraosell" className="mt-7 px-5 py-3 gap-5 lg:gap-11 flex flex-row overflow-x-hidden overflow-y-hidden transition-all ease-in-out scroll-smooth" ref={containerRef}>
                {
                  <TrendingNowCard category={currentCategory} />
                }
              </div>

              <div className={`${scrollPosition > 0 ? 'translate-x-0' : '-translate-x-6 opacity-0'} transition ease-in-out delay-500 absolute duration-500 left-0 top-0 transform bg-black h-full flex flex-col justify-center pr-3`}>
                <button onClick={() => { handleScroll(-itemWidth) }} className={`bg-[#1a1a1a] w-6 h-[120px] flex justify-center rounded-md items-center hover:bg-[#333333]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
              </div>

              <div className={`${scrollPosition < 900 ? 'translate-x-0' : 'translate-x-6 opacity-0'} transition ease-in-out delay-500 absolute duration-500  right-0 top-0 transform bg-black h-full flex flex-col justify-center pl-3`}>
                <button onClick={() => { handleScroll(itemWidth) }} className={`bg-[#1a1a1a] w-6 h-[120px] flex justify-center rounded-md items-center hover:bg-[#333333]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

          <div className="mt-16 w-full">
            <h1 className="text-[18px]  lg:text-2xl font-bold">More Reasons to Join</h1>
            <div className="w-full flex flex-col xl:flex xl:flex-row mt-4 gap-3 md:w-full md:grid md:grid-cols-2">
              <Card
                title="Watch on your TV"
                description="Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                icon={iconSatu}
                iconAlt="TV Icon"
              />
              <Card
                title="Download your shows to watch offline"
                description="Save your favorites easily and always have something to watch."
                icon={iconDua}
                iconAlt="Download Icon"
              />
              <Card
                title="Watch everywhere"
                description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                icon={iconTiga}
                iconAlt="Icon Watch"
              />
              <Card
                title="Create profiles for kids"
                description="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
                icon={iconEmpat}
                iconAlt="Icon Profile"
              />
            </div>
          </div>

          <div className="mt-48 w-full">
            <h1 className="text-lg md:text-3xl font-bold mb-4">Frequently Asked Question</h1>
            <ul className="flex flex-col gap-2">
              {question.map((item, index) => (
                <li id={`question${index + 1}`} onClick={() => handleOpenDetail(index)} key={index} className="flex flex-col gap-1 cursor-pointer text-white">
                  <div className="flex flex-row justify-between items-center p-6 bg-[#2d2d2d] hover:bg-[#414141]">
                    <p className="text-lg md:text-2xl">{item.question}</p>
                    <svg id={`icon${index + 1}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 duration-200 ease-in-out">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <div id={`answer${index + 1}`} className="bg-[#2d2d2d] h-0 mt-0.5 transform transition-[height] overflow-hidden duration-500 ease-in-out">
                    <p className={`text-lg md:text-2xl p-6`}>{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Email */}
          <div className="w-full flex flex-col items-center mt-8">
            <p className="mt-8 text-base">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex flex-col md:flex-row  w-full lg:w-[783px] max-w-full justify-center md:items-center mt-4 gap-4">
              <input type="email" placeholder="Email address" className="bg-transparent w-full lg:w-[561px] px-6 py-4 rounded-sm border-solid border-white border" />
              <button className="bg-red-600 text-white w-fit font-bold px-4 h-[60px] rounded-sm flex flex-row items-center gap-2 md:w-auto"><p className="text-lg md:text-nowrap lg:text-xl">Get Started</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </form>
          </div>
        </section>

        <section className="px-6 md:px-8 lg:px-36 2xl:px-[354px] mt-12 pb-36 text-[#FFFB3] opacity-70">
          <p className="text-base">Questions? Call <Link href="tel:0800-917-0650" className="text-base font-bold underline">0800-917-0650</Link></p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-8 text-sm underline">
            <Link href="/login"><p className="">FAQ</p></Link>
            <Link href="/login"><p className="">Help Center</p></Link>
            <Link href="/login"><p className="">Account</p></Link>
            <Link href="/login"><p className="">Media Center</p></Link>
            <Link href="/login"><p className="">Investor Relations</p></Link>
            <Link href="/login"><p className="">Jobs</p></Link>
            <Link href="/login"><p className="">Redeem Gift Cards</p></Link>
            <Link href="/login"><p className="">Buy Gift Cards</p></Link>
            <Link href="/login"><p className="">Ways to Watch</p></Link>
            <Link href="/login"><p className="">Terms of Use</p></Link>
            <Link href="/login"><p className="">Privacy</p></Link>
            <Link href="/login"><p className="">Cookie Preferences</p></Link>
            <Link href="/login"><p className="">Corporate Information</p></Link>
            <Link href="/login"><p className="">Contact Us</p></Link>
            <Link href="/login"><p className="">Speed Test</p></Link>
            <Link href="/login"><p className="">Legal Notices</p></Link>
            <Link href="/login"><p className="">Only on Netflix</p></Link>
          </div>

          <select className="mt-14 px-4 py-2 text-white text-sm bg-transparent rounded-md border border-solid mr-3 opacity-100">
            <option className='text-black'>English</option>
            <option className='text-black'>Bahasa Indonesia</option>
          </select>

          <p className="mt-14 text-sm">Netflix Indonesia</p>
        </section>
      </main>
    </div>
  );
}

const question = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There`s always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR 54,000 to IDR 186,000 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  }
]