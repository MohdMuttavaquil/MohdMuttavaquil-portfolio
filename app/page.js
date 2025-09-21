"use client"
import About from "@/About/About";
import Project from "@/Project/Project";
import { useInView } from "@/utils/Scroll";


export default function Home() {

  const [ ref1, inView1 ] = useInView(0.5)

  return (
    <>
      <div className="card5 text-[5rem] h-[70vh] flex justify-center text-center items-center"><p><span className="bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] bg-clip-text text-transparent">WELCOME</span> TO MY <br></br>POPTFOLIO<span className="bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] bg-clip-text text-transparent"> WEBSITE</span></p></div>

      <About />
      <Project />


      <p className="text-[2rem] text-center mt-[7rem]">Education</p>
      <div ref={ref1} className={`${inView1? "fadeIn": "opacity-0"} my-[2rem] w-[80%] flex mx-auto justify-evenly`}>

        <div className="bg-[#222222] rounded-xl w-[20rem] ">

          <p className="text-[1.25rem] font-semibold mt-4 ml-6">B.Sc.</p>
          <p className="w-[90%] mx-auto mt-2">Bachelor of Science in Computer Science, Mathematics, and Physics from Gurukul Kangri University, Haridwar <br></br>
            Year: 2024</p>
          <p className="w-[90%] mx-auto mt-2 mb-6">Learned fundamentals of computer science and gained skills in web development including HTML, CSS, and JavaScript.</p>

        </div>

        <div className="bg-[#222222] rounded-xl w-[20rem]">

          <p className="text-[1.25rem] font-semibold ml-6 mt-4">XII</p>
          <p className="w-[90%] mx-auto mt-2 mb-6">Class 12 (PCM  Physics, Chemistry, Mathematics) <br></br>
            Uttarakhand Board of School Education <br></br>
            Year: 2021 <br></br>
            Grade: 81% <br></br>
            Gained a strong foundation in core science subjects.</p>

        </div>

        <div className="bg-[#222222] rounded-xl w-[20rem]">
          <p className="text-[1.25rem] font-semibold ml-6 mt-4">X</p>
          <p className="w-[90%] mx-auto mt-2 mb-6">class 10 <br></br>
           Uttarakhand Board of School Education <br></br>
            Year: 2019 <br></br>
            Grade: 73.8% <br></br>
          Learned Mathematics, Science and English, problem-solving and communication skills.</p>
        </div>

      </div>

    </>
  );
}
