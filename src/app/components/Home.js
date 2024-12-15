'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'; 
import Image from 'next/image';
import Navbar from './Navbar';


const handleDownload = () => {
  const fileUrl = 'https://drive.google.com/file/d/14P7JqnGQa22sWLWcCz27D493f09LGyEJ/view?usp=sharing';

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
      <div className="xl:flex w-full rounded-xl xl:mr-8">

        {/* Intro */}      
        <div className='w-full 2xl:pt-20 xl:pr-20'>
          <h2 className='md:text-[3rem] sm:text-xl text-lg font-bold xl:pb-10 md:pb-6'>Hey, I am Basu </h2>
          <p className="md:text-[2rem] text-md pb-6">Software Developer</p>
          <p className='rounded italic md:pt-4 w-full xl:text-xl md:text-lg text-md'>
            I’m a Software Developer with a diploma from SAIT and a background in IT systems management. 
            Skilled in JavaScript, Node.js, React.js, and Firebase, and cloud platforms like AWS and Microsoft Azure, I bring a strong technical foundation to every project. 
            <br/> My IT support experience has sharpened my problem-solving skills, allowing me to tackle challenges efficiently. 
            I’m passionate about technology and committed to delivering reliable, scalable solutions.
          </p>

          {/* Buttons */}
          {/* <div className='xl:flex w-full items-center justify-center border-2 border-black'> */}
            <div className='flex w-full justify-center md:my-8 mt-4'>
              <div className='flex px-8 w-max'>
              <button 
                className='rounded-lg xl:p-3 p-1 xl:px-4 px-1 truncate xl:text-xl text-white bg-gray-800 hover:bg-gray-600 hover:scale-125 transform transition-all duration-150 ease-in-out'>
                <Link href='/pages/about'>About me</Link></button>
                </div>
                <div  className='flex w-max px-8'>
              <button 
                className='bg-blue-800 hover:bg-blue-500 xl:p-3 p-1 xl:px-4 px-1 xl:text-xl rounded-lg text-white hover:scale-125 transform transition-all duration-150 ease-in-out' 
                onClick={handleDownload} >Resume</button>
                </div>
            </div> 
          {/* </div> */}

           {/* Contacts  */}
          <div className="flex xl:justify-start justify-center 2xl:pt-36 md:pt-10">        
            <p 
              title='587-973-0508' 
              className='items-center italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-125 transform transition-all duration-150 ease-in-out'>
              <Link href='callTo:587-973-0508'>
                <FontAwesomeIcon icon={faPhone} className='text-3xl text-green-500'/> 
              </Link>
            </p>
            <p 
              title='Batsurenb30@gmail.com' 
              className='items-center italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-125 transform transition-all duration-150 ease-in-out'>
                <Link href="mailto:Batsurenb30@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className='text-3xl text-blue-300'/> 
                </Link>
              </p>
            <p 
              className='items-center italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-125 transform transition-all duration-150 ease-in-out'>
              <Link href="https://www.linkedin.com/in/batsuren-d-94837222a/">
                <FontAwesomeIcon icon={faLinkedin} className='text-3xl bg-white rounded text-blue-600'/>
              </Link>
            </p> 
            <p 
              className='items-center italic p-2 m-2 pb-1 hover:scale-125 transform transition-all duration-150 ease-in-out'>
              <Link href="https://github.com/Basu30">
                <FontAwesomeIcon icon={faGithub} className='text-3xl'/> 
              </Link></p>
          </div>       
        </div> 

         {/* Image  */}
        <div className='xl:w-[60rem] '>
          <Image 
            title='Basu'
            src='/image/BD3.jpg' 
            alt='Basu'
            width={500}
            height={300} 
            className='rounded-xl xl:p-14 shadow-custom-main w-full' />
        </div>                 
      </div> 
      </div>    
    </section>
  );
};

export default Home;
