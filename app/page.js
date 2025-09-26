"use client"
import Link from "next/link";
import About from "@/About/About";
import Education from "@/About/Education";
import Project from "@/Project/Project";
import { Inter } from "next/font/google";
import { Download, Mail  } from "lucide-react";
import Contact from "@/About/Contact";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"]
});


export default function Home() {

  return (

    <div className={`pt-[6rem] ${inter.className}`}> 

      <div className="h-[70vh] flex flex-col items-center justify-center">
        <div className="card5 text-[5rem] text-center">
          <p>
            <span className="bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] bg-clip-text text-transparent">WELCOME</span> TO MY <br />PORTFOLIO
            <span className="bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] bg-clip-text text-transparent"> WEBSITE</span>
          </p>
        </div>

        <div className="flex gap-6 mt-6 fadeIn justify-center">
          <Link href="#contact">
            <button className='flex gap-2 bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] px-3 py-1 rounded-lg text-white cursor-pointer'>
              <Mail className="w-5 h-5 pt-1" /> Contact Me
            </button>
          </Link>

          <Link href="./resume.pdf" target="_blank">
            <button className='flex gap-1.5 bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] px-3 py-1 rounded-lg text-white cursor-pointer'>
              <Download className="w-5 h-5 pt-1" /> Resume
            </button>
          </Link>
        </div>
      </div>

      <About />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}
