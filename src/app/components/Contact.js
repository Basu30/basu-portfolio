'use client';
import React, { useState, useEffect } from 'react';
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
import emailjs from '@emailjs/browser';




export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Change the value 
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    // Email sending function 
    useEffect(() => {
        emailjs.init("TTneCFS9mLStBu8of")
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('All fields are required');
            return;
        }

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            };

            await emailjs.send('service_n0k9eut', 'template_9ayfc9q', templateParams);

            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Message failed to send');
        }
    };


    return (      
        <main id='contact' className='min-h-screen'>
            <Navbar />
            <div className='xl:px-24 py-14 bg-gray-30'>
            <h1 className='md:text-6xl text-3xl font-bold text-center italic xl:pb-10 mb-6'>Contact Me</h1>
            <div className='xl:flex w-full p-2 items-center justify-center'>
                <div className='xl:flex border-2 border-black rounded-xl bg-gray-800 p-1'>

                
                {/* Contact */}
                <div className="xl:flex flex-col rounded-l-md bg-gray-300 hidden">
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
                <div className='xl:w-max min-h-96 xl:p-8 bg-gray-500 rounded-xl p-4 xl:m-6 shadow-custom-main'>
                    <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                        <label htmlFor="name" className='text-white'>Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className='rounded-lg xl:p-2 p-2 m-2 ' placeholder='Please type your name here'/>
                        <label htmlFor="email" className='text-white xl:mt-2'>Email:</label>
                        <input type="email" id="email" name="email" value={formData.email}  onChange={handleChange} className='rounded-lg xl:p-2 p-2 m-2'  placeholder='Please put your email here'/>
                        <label htmlFor="message" className='text-white mt-4'>Message:</label>
                        <textarea type='message' id='message' name='message' value={formData.message} onChange={handleChange}   className='resize  rounded-lg xl:p-4 p-3 m-2 xl:w-96 h-48 text-black' placeholder='I would greatly appreciate your valuable advice, a job offer, or constructive criticism regarding any shortcomings I may have. Whether I receive a new job offer or not, all of this would be immensely helpful in enhancing my proficiency.'></textarea>
                        <div className='flex items-center justify-center w-full xl:mt-6'>
                            <button type="submit" className='bg-blue-800 hover:bg-blue-500 xl:p-3 p-2 xl:px-4 px-4 xl:mx-[4rem] xl:w-[6rem] rounded-lg text-white hover:scale-105 transform transition-all duration-150 ease-in-out'>Send</button>
                        </div>
                    </form> 
                    {status && <p className='text-center text-white mt-4'>{status}</p>}  
                    </div>                           
                </div>
            </div>
            
            </div>
        </main>
    )
}