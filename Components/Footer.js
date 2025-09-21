import React from 'react'

const Footer = () => {
  return (
    <>
    <div id='contact' className='w-[80%] mx-auto mt-[3rem] flex justify-evenly'>
        <div>
            <p className="text-[2rem] text-center">Contect Me</p>

            <div className='flex gap-6 mt-6'>
            <a href='https://github.com/MohdMuttavaquil' target='_blank'><i className="devicon-github-original-wordmark text-[3rem] rounded-full"></i> </a>
            <a href='https://www.linkedin.com/in/mohd-muttavaquil/' target='_blank'>
              <img className='h-[3rem] rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
            </a>
          </div>

        </div>
    </div>
    </>
  )
}

export default Footer