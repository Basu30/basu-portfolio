'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FaLink } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import Navbar from './Navbar';
import Image from 'next/image';




export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate
        if(!formData.name || !formData.email || !formData.message) {
            alert('All fields are required');
            return;
        }
        
        // Send form data to the server
        try {
            
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                
            });
            console.log(response);
          
            if(response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                alert('Message failed to send');
                console.log(response)
            } 
            // setFormData("")
        }
        catch (error) {
            console.error(error);
            alert('Message failed to send');
        }
    };


    return (      
        <main id='contact' className='min-h-screen'>
            <Navbar />
            <div className='xl:px-24 py-14 bg-gray-30'>
            <h1 className='md:text-6xl text-3xl font-bold text-center italic xl:pb-10'>Contact Me</h1>
            <div className='xl:flex w-full p-2 items-center justify-center'>
                <div className='xl:flex border-2 border-black rounded-xl bg-gray-800'>

                
                {/* Contact */}
                <div className="xl:flex flex-col rounded-xl bg-gray-300">
                    <Image  
                        src='/image/BD.jpg' 
                        alt='Basu'
                        width={500}
                        height={300}  
                        className='xl:w-96 rounded-xl scale-90' 
                    />     
                    <p className='italic p-2 m-2 pb-1 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href='callto:587-973-0508'><FontAwesomeIcon icon={faPhone} className='text-3xl text-green-500'/> +1 (587) 973-0508</a></p>
                    <p className='italic p-2 m-2 pb-1 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href="mailto:Batsurenb30@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='text-3xl text-blue-300'/> Batsurenb30@gmail.com</a></p>
                    <p className='italic p-2 m-2 pb-1 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href="https://www.linkedin.com/in/batsuren-d-94837222a/"><FontAwesomeIcon icon={faLinkedin} className='text-3xl bg-white rounded text-blue-600'/> Batsuren.D</a></p>
                    <p className='italic p-2 m-2 pb-2 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href="https://github.com/Basu30"><FontAwesomeIcon icon={faGithub} className='text-3xl'/> Basu30</a></p>
                </div>
                {/* Message */}
                <div className='xl:w-max xl:p-16 bg-gray-500 rounded-xl p-2 xl:m-14 shadow-custom-main'>
                    <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                        <label htmlFor="name" className='text-white'>Full Name:</label>
                        <input type="text" id="name" name="name" value={formData.name}  onChange={handleChange}  className='rounded-lg xl:p-2 m-2 '/>
                        <label htmlFor="email" className='text-white'>Email:</label>
                        <input type="email" id="email" name="email" value={formData.email}  onChange={handleChange}  className='rounded-lg xl:p-2 m-2'/>
                        <label htmlFor="message" className='text-white'>Message:</label>
                        <textarea type='message' id='message' name='message' value={formData.message}  onChange={handleChange}  className='resize rounded-lg xl:p-2 m-2 xl:w-96 text-black'></textarea>
                        <div className='flex items-center justify-center w-full'>
                            <button type="submit" className='bg-blue-800 hover:bg-blue-500 xl:p-3 xl:px-4 xl:mx-[4rem] xl:w-[6rem] px-2 rounded-lg text-white hover:scale-105 transform transition-all duration-150 ease-in-out'>Send</button>
                        </div>
                    </form> 
                    {status && <p>{status}</p>}  
                    </div>                           
                </div>
            </div>
            
            </div>
        </main>
        // <main id='contact' className='min-h-screen bg-orange-200'>         
        //     <div className='flex flex-row min-h-screen p-4'> 
        //             {/* Name / Intro / Contact */}
        //         <div className="flex flex-col justify-start bg-gray-600 py-2 border-white m-2 w-[30rem] shadow-custom" style={{borderRadius: '300px 300px  9999px 0'}}>
        //             <div className='flex w-full items-center justify-normal'>                 
        //                 <header className='text-center text-bold text-white text-5xl mb-8 mt-2 h-max'>Batsuren Damdinsuren</header>
        //             </div>
        //             <div className="flex w-full items-center">
        //                 <div className="flex items-center top-10 justify-center rounded-r-3xl bg-orange-200 border-2 h-[2rem] w-full"></div>                   
        //                 <img src="/image/BD.jpg" alt="Basu" className="rounded-full h-40 w-40 "/>                 
        //                 <div className="flex items-end justify-center rounded-l-3xl bg-orange-200 border-2 h-[2rem] w-full"></div>
        //             </div>

        //             {/* Intro */}
        //             <div className="rounded-xl p- m-2 text-white">
        //               <h2 className="text-lg text-center">Hey, I'm Basu, <br/>Software Developer</h2>
        //               <p className="rounded italic text-md p-2 w-full">
        //                 My journey started with early experiences in IT support, 
        //                 which sparked my passion for technology and coding. 
        //                 Recently, I completed a Software Developer program at SAIT and 
        //                 am now excited to apply my technical skills in the dynamic world of software development. 
        //                 This path reflects my dedication to continuous learning and my eagerness to contribute to exciting technological advancements.</p>
        //             </div>

        //             {/* Contact */}
        //             <div className="rounded-xl p-2 m-2 text-white flex flex-col">
        //                 <h1 className='text-2xl text-center italic pb-1'>Contact Me</h1>
        //                 <p className='italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'><a href='callto:587-973-0508'><FontAwesomeIcon icon={faPhone} className='text-2xl text-green-500'/> +1 (587) 973-0508</a></p>
        //                 <p className='italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'><a href="mailto:Batsurenb30@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='text-2xl text-blue-300'/> Batsurenb30@gmail.com</a></p>
        //                 <p className='italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'><a href="https://www.linkedin.com/in/batsuren-d-94837222a/"><FontAwesomeIcon icon={faLinkedin} className='text-3xl bg-white rounded text-blue-600'/> Batsuren.D</a></p>
        //                 <p className='italic p-2 m-2 pb-1 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'><a href="https://github.com/Basu30"><FontAwesomeIcon icon={faGithub} className='text-2xl'/> Basu30</a></p>
        //             </div>
        //         </div>

        //         {/* Profile */}
        //         <section className="relative border-2 m-2 rounded-xl bg-white w-full shadow-2xl shadow-slate-600">

        //             <div className="flex rounded-t-xl text-gray-800 bg-gray-600 w-full">
        //                 <a href='/'><BiArrowBack className="text-5xl p-2 text-white hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out"/></a>
        //                 <h1 className="text-6xl text-center w-full text-white py-4 ">Profile</h1>                      
        //             </div>

        //             <h1 className='font-bold italic pt-6'>Skills:</h1>
        //             <div className="flex flex-col bg-green rounded-xl w-full ">      
        //                 <div className='flex flex-row'>  

        //                     {/* Programming Languages */}
        //                     <div className='flex flex-col w-1/3 m-6 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out'>
        //                         <h1 className='font-bold bg-orange-200 text-center text-black text-xl rounded'>Programming Languages</h1>
        //                         <div className='flex mt-2'>
        //                             <ul className='w-max p-2 px-5'>
        //                                 <li className='mb-2'>Js / Ts <br/>                                           
        //                                     <FontAwesomeIcon icon={faClipboardCheck} className='text-green-500'/> <span className='text-xs'>Advanced</span>
        //                                 </li>
        //                                 <li className='mb-2'> Python / Java / C# <br/>                                                                               
        //                                     <FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span>
        //                                 </li>                                    
        //                             </ul>
        //                             <ul className='w-max p-1 px-5'>                                    
        //                                 <li className='mb-2'>  HTML5 / CSS  <br/>                                                                                  
        //                                     <FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span>
        //                                 </li >                                     
        //                                 <li className='mb-2'>SQLPlus & PL/SQL  <br/>
        //                                     <FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span>
        //                                 </li>                                                                                        
        //                             </ul>
        //                         </div>
        //                     </div>

        //                     {/* Frameworks */}
        //                     <div className='flex flex-col w-1/3 m-6 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out'>                        
        //                         <h1 className='font-bold bg-orange-200 text-center text-black text-xl rounded'>Frameworks</h1>
        //                         <div className='flex mt-2'>
        //                             <ul className='flex flex-col p-2 px-5'>
        //                                 <li className='mb-2'>React.js <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                                 <li className='mb-2'>Node.js <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                             </ul>
        //                             <ul className='flex flex-col p-2 px-5'>
        //                                 <li className='mb-2'>React Native <br/><FontAwesomeIcon icon={faClipboardCheck} className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                                 <li className='mb-2'>Express.js <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                             </ul>
        //                         </div>
        //                     </div>
                      
        //                     {/* Databases */}
        //                     <div className='flex flex-col w-1/3 m-6 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out'>
        //                         <h1 className='font-bold bg-orange-200 text-center text-black text-xl  rounded'>Databases</h1>
        //                         <div className='flex mt-2'>
        //                             <ul className='flex flex-col p-2 px-5 '>
        //                                 <li className='mb-2'>MySQL  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                                 <li className='mb-2'>Oracle  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                             </ul>
        //                             <ul className='flex flex-col p-2 px-5'>
        //                                 <li className='mb-2'>MongoDB  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                                 <li className='mb-2'>Firebase  <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                             </ul>
        //                         </div>
        //                     </div>

        //                     {/* Tools */}
        //                     <div className='flex flex-col w-1/3 m-6 border-2 shadow-custom rounded-lg bg-gray-900 text-white hover:scale-105 transform transition-all duration-150 ease-in-out'>
        //                         <h1 className='font-bold bg-orange-200 text-center text-black text-xl  rounded'>Tools</h1>
        //                             <div className='flex mt-2'>
        //                             <ul className='flex flex-col p-2 px-5'>
        //                                 <li className='mb-2'>Git <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span> </li>
        //                                 <li className='mb-2'>GitHub <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                             </ul>
        //                             <ul className='flex flex-col p-2 px-5'>
        //                                 <li className='mb-2'>Visual Studio Code <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                                 <li className='mb-2'>Eclipse <br/><FontAwesomeIcon icon={faClipboardCheck}  className='text-green-500'/> <span className='text-xs'>Advanced</span></li>
        //                             </ul>
        //                         </div>
        //                     </div>                       
        //                 </div>
        //             </div>
                
                               
        //             {/* Course Projects */}
        //             <h1 className='font-bold italic'>Course Projects</h1>
        //             <div className='flex p-2 w-full'>
        //                 <div className="flex flex-row border-2 border-black bg-blue-900 rounded-xl text-white m-2 mx-6 w-96 shadow-custom  hover:scale-105 transform transition-all duration-150 ease-in-out">    
        //                     <div className='flex flex-col p-2 bg-orange-200 rounded-xl'>
        //                         <h2 className='w-full p-2 mb-2 bg-orange-200 text-black font-bold text-2xl rounded-xl border-b-2 border-black'>Capstone </h2> 
        //                         <div className='flex italic font-normal text-black text-lg mt-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'><FaLink /><a href="https://sswd-capstone-app.vercel.app/">SSWD <br/> Web-App</a></div><br/>          
        //                     </div>
        //                     <p className='p-2'>Role-based Quoting and Ordering Web Application for Southern Shade Windows and Doors Company.</p>
        //                     <p className='p-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'></p>                        
        //                 </div>

        //                 <div className="flex flex-row border-2 border-black bg-blue-900 rounded-xl text-white m-2 mx-6 w-96 shadow-custom  hover:scale-105 transform transition-all duration-150 ease-in-out">    
        //                     <div className='flex flex-col p-2 bg-orange-200 rounded-xl'>
        //                         <h2 className='w-full p-2 mb-2 bg-orange-200 text-black font-bold text-2xl text-center rounded-2xl border-b-2 border-black'>Project </h2> 
        //                         <div className='flex italic font-normal text-black text-lg mt-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'><FaLink /><a href="https://sswd-capstone-app.vercel.app/">B2M MusePlayer</a></div><br/>          
        //                     </div>
        //                     <p className='p-2'>React Native Mobile Application for a Music Playing.</p>
        //                     <p className='p-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'></p>                        
        //                 </div>

        //                 <div className="flex flex-row border-2 border-black bg-blue-900 rounded-xl text-white m-2 mx-6 w-96 shadow-custom  hover:scale-105 transform transition-all duration-150 ease-in-out">    
        //                     <div className='flex flex-col p-2 bg-orange-200 rounded-xl'>
        //                         <h2 className='w-full p-2 mb-2 bg-orange-200 text-black font-bold text-2xl text-center rounded-2xl border-b-2 border-black'>Project </h2> 
        //                         <div className='flex italic font-normal text-black text-lg mt-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'><FaLink /><a href="https://sswd-capstone-app.vercel.app/">BasuNews</a></div><br/>          
        //                     </div>
        //                     <p className='p-2'>React Web Application for a News.</p>
        //                     <p className='p-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'></p>                        
        //                 </div>
                                     
        //             </div>
                 
        //         </section>                     
           
        //     </div>
        // </main>
    );
}


// My career includes early experiences in IT support, which ignited my passion for technology and coding. 
// I have recently completed a Software Developer program at SAIT and am now poised to leverage my technical skills in the innovative realm of software development. 
// This journey reflects my commitment to continuous learning and my enthusiasm for contributing to dynamic technological advancements.