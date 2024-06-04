'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'; 
import Navbar from './Navbar';


const handleDownload = () => {
  const fileUrl = 'https://drive.google.com/file/d/1CxEC5F50DtladoAkFEcJCXo33kvp3pqk/view?usp=sharing';

  // Create a temporary anchor element
  const anchorElement = document.createElement('a');
  anchorElement.href = fileUrl;
  anchorElement.download = 'downloaded-file.pdf'; // Specify the filename
  anchorElement.style.display = 'none';

  // Append the anchor element to the body
  document.body.appendChild(anchorElement);

  // Trigger a click event on the anchor element
  anchorElement.click();

  // Remove the anchor element from the body
  document.body.removeChild(anchorElement);
  }; 

const Home = () => {
  return (
    <section id="home" className='min-h-screen'> 
    <Navbar />
    <div className='xl:p-24 xl:px-40 xl:pr-72 p-8'>
      <div className="xl:flex w-full rounded-xl xl:mr-8 "> 

        {/* Intro */}      
        <div className='w-full xl:pt-32 xl:pr-20'>
          <h2 className='md:text-[3rem] font-bold'>Hey, I&apos;m Basu <br/><span className="justify-center xl:text-[2rem] text-center">Software Developer | Full Stack Developer</span></h2>
          <p className='rounded italic xl:text-xl md:pt-4 w-full text-x'>
            I&apos;m a Full Stack Developer, passionate and dedicated to my work. 
            With a solid foundation in IT support and a deep-seated enthusiasm for technology and coding, 
            I possess the skills and knowledge necessary to ensure your project&apos;s success.
          </p>

          {/* Buttons */}
          {/* <div className='xl:flex w-full items-center justify-center border-2 border-black'> */}
            <div className='flex w-full justify-center md:my-8'>
              <div className='flex px-8 w-max'>
              <button 
                className='rounded-lg xl:p-3 p-2 xl:px-4 px-1 truncate xl:text-x text-white bg-gray-800 hover:bg-gray-600 hover:scale-125 transform transition-all duration-150 ease-in-out mx-[rem]'>
                <Link href='/pages/about'>About me</Link></button>
                </div>
                <div  className='flex w-max px-8'>
              <button 
                className='bg-blue-800 hover:bg-blue-500 xl:p-3 p-2 xl:px-4 px-1 xl:text-x mx-[rem] rounded-lg text-white hover:scale-125 transform transition-all duration-150 ease-in-out' 
                onClick={handleDownload} >Resume</button>
                </div>
            </div> 
          {/* </div> */}

           {/* Contacts  */}
          <div className="flex xl:pt-36 ">        
            <p className='items-center italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-125 transform transition-all duration-150 ease-in-out'><Link href='callTo:587-973-0508'><FontAwesomeIcon icon={faPhone} className='text-2xl text-green-500'/> </Link></p>
            <p className='items-center italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-125 transform transition-all duration-150 ease-in-out'><Link href="mailto:Batsurenb30@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='text-2xl text-blue-300'/> </Link></p>
            <p className='items-center italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-125 transform transition-all duration-150 ease-in-out'><Link href="https://www.linkedin.com/in/batsuren-d-94837222a/"><FontAwesomeIcon icon={faLinkedin} className='text-2xl bg-white rounded text-blue-600'/></Link></p> 
            <p className='items-center italic p-2 m-2 pb-1 hover:scale-125 transform transition-all duration-150 ease-in-out'><Link href="https://github.com/Basu30"><FontAwesomeIcon icon={faGithub} className='text-2xl'/> </Link></p>
          </div>       
        </div> 

         {/* Image  */}
        <div className='xl:w-[60rem] '>
          <img src='/image/BD3.jpg' alt='Basu' className='rounded-xl xl:p-14 shadow-custom-main scale-100'/>  
        </div>                 
      </div> 
      </div>    
    </section>
  );
};

export default Home;
