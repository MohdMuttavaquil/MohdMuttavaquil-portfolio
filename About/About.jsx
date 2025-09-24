"use client"
import { useInView } from '@/utils/Scroll'
import Link from 'next/link'

const About = () => {

  const [ref1, inView1] = useInView(0.5)
  const [ref2, inView2] = useInView(0.5)

  return (
    <div className='w-[80%] mx-auto'>

      {/*About section*/}
      <div ref={ref1} id='about' className='my-[8rem] flex justify-around'>

        <div className={`info ${inView1 ? "card1 opacity-100" : "opacity-0"} w-[50%]`}>
           
          <p className='text-[1rem]'>Hello it's me </p>
          <h1 className='bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] bg-clip-text text-transparent text-[2rem] inline-block mt-1'>MOHD MUTTAVAQUIL</h1>
          <h2 className='text-[2rem]'>Full Stack Web <br></br>Developer</h2>
          <h2 className='text-[1rem] mt-2 w-[75%]'>Full Stack Web Developer. I building modern, scalable, and user-friendly web applications. I have hands-on experience building responsive websites and projects.</h2>
          
            <Link href="#contact"><button className='bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] px-3 py-1 rounded-lg text-white cursor-pointer mt-6'>Contect Me</button></Link>
          

          <div className='flex gap-6 mt-6'>
            <a href='https://github.com/MohdMuttavaquil' target='_blank'><i className="devicon-github-original-wordmark text-[3rem] rounded-full"></i> </a>
            <a href='https://www.linkedin.com/in/mohd-muttavaquil/' target='_blank'>
              <img className='h-[3rem] rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
            </a>
          </div>

        </div>

        <img src='./profile.jpeg' className={`${inView1 ? "card4 opacity-100" : "opacity-0"} shadow h-[20rem] rounded-full bg-red-400`}></img>

      </div>

      {/*Skills Section */}

      <div id='skills' className='my-[2rem]'>

        <div ref={ref2} className={`text-[2rem] text-center opacity-0 ${inView2 ? "fadeIn" : ""}`}>Technical Skills</div>

        <div ref={ref2} className='flex flex-wrap justify-evenly'>

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />


          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />

          <i className={`devicon-express-original ${inView2 ? "card5 opacity-100" : "opacity-0"} text-[7rem] rounded-full mx-10 my-6`}></i>

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

          <img className={`${inView2 ? "card5 opacity-100" : "opacity-0"} h-[8rem] rounded-full mx-10 my-6`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

        </div>

      </div>

    </div>
  )
}

export default About