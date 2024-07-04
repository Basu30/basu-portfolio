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
                <div className='xl:flex border-2 border-black rounded-xl bg-gray-800 p-1'>

                
                {/* Contact */}
                <div className="xl:flex flex-col rounded-xl bg-gray-300">
                    <Image  
                        src='/image/BD.jpg' 
                        alt='Basu'
                        width={500}
                        height={300}  
                        className='xl:w-96 rounded-xl scale-90' 
                    />     
                    <p className='italic p-2 ml-3 pb-2 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href='callto:587-973-0508'><FontAwesomeIcon icon={faPhone} className='text-3xl text-green-500'/> +1 (587) 973-0508</a></p>
                    <p className='italic p-2 ml-3 pb-2 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href="mailto:Batsurenb30@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='text-3xl text-blue-300'/> Batsurenb30@gmail.com</a></p>
                    <p className='italic p-2 ml-3 pb-2 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href="https://www.linkedin.com/in/batsuren-d-94837222a/"><FontAwesomeIcon icon={faLinkedin} className='text-3xl bg-white rounded text-blue-600'/> Batsuren.D</a></p>
                    <p className='italic p-2 ml-3 pb-2 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'><a href="https://github.com/Basu30"><FontAwesomeIcon icon={faGithub} className='text-3xl'/> Basu30</a></p>
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
    )
}