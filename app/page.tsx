import Image from "next/image";
import netflixBg from "../public/netflix-bg.jpg";


export default function Home() {
  return (
    <div className="">
      <main className="relative">
        <Image src={netflixBg} alt="Netflix Background" className="absolute w-full z-0 h-screen" />
        <div className="absolute bg-black opacity-60 z-2 w-full h-screen"></div>
        <div className="relative h-screen w-full flex items-center justify-center flex-col">
          <h1 className="text-6xl font-black text-center leading-[5rem] max-w-[664px]">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="mt-6 text-xl font-bold">Starts at IDR 54,000. Cancel anytime.</p>
          <p className="mt-8 text-base">Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="flex w-full max-w-[664px] justify-center items-center mt-4">
            <input type="email" placeholder="Email address" className="bg-transparent w-2/3 px-6 py-4 rounded-sm border-solid border-white border" />
            <button className="bg-red-600 text-white w-fit font-bold px-4 h-[60px] rounded-sm ml-2">Get Started</button>
          </form>
        </div>
        <section className="px-[354px] h-screen">
          <h1 className="text-3xl">Trending Now</h1>
        </section>

      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
