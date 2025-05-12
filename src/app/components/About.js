'use client';
import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FaLink } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image'; 
import Navbar from './Navbar';



export default function About() {
    return (
        <main id='about' className="min-h-screen w-screen">
        <Navbar /> 
        <div className='w-full xl:p-24 p-2'> 
            <div className="w-full items-center">
                {/* <a href='/'><BiArrowBack className="text-4xl hover:text-blue-500 hover:scale-125 transform transition-all duration-150 ease-in-out" /></a>  */}

                {/* Image and 2 borders */}
                <div className="flex w-full items-center rounded-full">
                    <div className="flex items-center top-10 justify-center rounded-r-3xl bg-gray-800 border-2 h-[2rem] w-full"></div>                   
                        <Image 
                            src="/image/BD.jpg" 
                            alt="Basu"
                            width={500}
                            height={300} 
                            className="rounded-full h-40 w-40" />                 
                    <div className="flex items-end justify-center rounded-l-3xl bg-gray-800 border-2 h-[2rem] w-full"></div>
                </div>

                {/* About me / Skills */}
                <div className='xl:flex w-full items-center justify-center'>

                    {/* About me */}
                    <div className='xl:flex flex-col w-full text-left xl:px-6'> 

                        <div className='text-center'>
                            <h1 className='xl:mb-3 font-bold md:text-5xl'>About Me</h1>  
                        </div>
                            {/* Typing */}
                            <div className='xl:flex flex-col xl:w-full pb-4 p-2 items-center'>  
                               
                                {/* <div className='flex    border-2 border-black items-center'> */}
                                <p className="rounded italic md:text-2xl xl:px-2 text-xs">
                                My journey into technology began in Mongolia, where I studied IT Engineering and gained hands-on experience in systems management and troubleshooting. 
                                I worked on setting up local file-sharing systems and explored early cloud-based backup solutions—skills that helped me adapt quickly to evolving technologies.
                                In 2015, I moved to Canada and faced the challenge of learning English while supporting my family. I spent winters studying and summers working, determined to stay on the path toward a career in tech. After completing my English program, I enrolled in the Software Development diploma program at SAIT and graduated in 2024.
                                Now, with a solid foundation in full-stack development, cloud tools like AWS, and test automation, I’m excited to contribute to meaningful software projects. I believe in continuous learning, clean code, and building solutions that make a difference.
                                </p>
                                {/* </div> */}
                            </div>
                       
                        {/* Buttons for My Projects */}
                        <div className='w-full p-2'>
                            <button className='bg-green-800 rounded-full xl:w-[6rem] xl:h-[6rem] border-2 border-green-500 p-3 xl:p-2 text-white xl:text-sm text-xs hover:bg-green-70 hover:scale-105 transform transition-all duration-150 ease-in-out sm:mx-[2rem] shadow-custom-main'>
                                <Link href='/pages/project'>My Projects</Link></button>
                        </div>
                        
                    </div>
                              
                    {/* Skills */}
                    <div className="xl:flex flex-col xl:mx-8 border-4 rounded-xl shadow-custom-main">
                        <h1 className='font-bold sm:text-xl italic pt-6 pl-4'>Skills:</h1>      
                        
                        <div className='xl:flex w-full flex-col items-center justify-between'>  

                          <div className='xl:flex items-center justify-center md:m-2'>

                            {/* Programming Languages */}
                            <div className='xl:flex flex-col md:m-6 m-10 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out shadow-custom-bottom'>
                                <h1 className='font-bold bg-white text-center text-black md:text-xl rounded'>Languages</h1>
                                <div className='flex w-full items-center justify-between mt-2'>
                                    <div className='flex w-max'>
                                    <ul className='w-max p-1 sm:px-5 text-xs'>
                                        <li className='mb-2'>Js / Ts <br/>                                           
                                            <FontAwesomeIcon icon={faClipboardCheck} className='text-green-500'/> <span className='text-xs'>Advanced</span>
                                        </li>
                                        <li className='mb-2'>Python/Java/C#<br/>                                                                               
                                            <FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Beginner</span>
                                        </li>                                    
                                    </ul>
                                    </div>
                                    <div className='flex w-max'>
                                    <ul className='w-max p-1 sm:px-5 text-xs'>                                    
                                        <li className='mb-2'>HTML5/CSS<br/>                                                                                  
                                            <FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span>
                                        </li >                                     
                                        <li className='mb-2'>SQLPlus/PL/SQL<br/>
                                            <FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Intermediate</span>
                                        </li>                                                                                        
                                    </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Frameworks */}
                            <div className='xl:flex flex-col md:m-6 m-10 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out shadow-custom-bottom'>                        
                                <h1 className='font-bold bg-white text-center text-black text-xl rounded'>Frameworks</h1>
                                <div className='flex w-full items-center justify-between mt-2'>
                                    <div className='flex w-max'>
                                    <ul className='flex flex-col p-2 sm:px-5 text-xs'>
                                        <li className='mb-2'>React.js <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
                                        <li className='mb-2'>Node.js <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Intermediate</span></li>
                                    </ul>
                                    </div>
                                    <div className='flex w-max'>
                                    <ul className='flex flex-col p-2 sm:px-5 text-xs'>
                                        <li className='mb-2'>React Native <br/><FontAwesomeIcon icon={faClipboardCheck} className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
                                        <li className='mb-2'>Express.js <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Intermediate</span></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:flex items-center justify-center w-full'>
                      
                            {/* Databases */}
                            <div className='xl:flex flex-col xl:w-72 md:m-6 m-10 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out shadow-custom-bottom'>
                                <h1 className='font-bold bg-white text-center text-black text-xl  rounded'>Databases</h1>
                                <div className='flex w-full items-center justify-between mt-2'>
                                    <div className='flex w-max'>
                                        <ul className='flex flex-col p-2 sm:px-5 text-xs'>
                                            <li className='mb-2'>MySQL  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500 '/> <span className='text-xs'>Intermediate</span></li>
                                            <li className='mb-2'>Oracle  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Intermediate</span></li>
                                        </ul>
                                    </div>
                                    <div className='flex w-max'>
                                        <ul className='flex flex-col p-2 sm:px-5 text-xs'>
                                            <li className='mb-2'>MongoDB  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Intermediate</span></li>
                                            <li className='mb-2'>Firebase  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Tools */}
                            <div className='xl:flex flex-col xl:w-1/2 md:m-6 m-10 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out shadow-custom-bottom'>
                                <h1 className='font-bold bg-white text-center text-black text-xl  rounded'>Tools</h1>
                                <div className='flex w-full items-center justify-between mt-2'>
                                    <div className='flex w-max'>
                                    <ul className='flex flex-col p-2 sm:px-5 text-xs'>
                                        <li className='mb-2'>Git <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span> </li>
                                        <li className='mb-2'>GitHub <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
                                    </ul>
                                    </div>
                                    <div className='flex w-max'>
                                    <ul className='flex flex-col p-2 sm:px-5 text-xs'>
                                        <li className='mb-2'>Visual Studio Code <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
                                        <li className='mb-2'>Eclipse <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>                       
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div> 
        </main>
    );
}