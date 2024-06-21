// 'use client';
// import React from 'react';
// import { FaLink } from "react-icons/fa";
// import { BiArrowBack } from "react-icons/bi";
// import Navbar from './Navbar';
   
// export default function Project(){    

//   return(
//     <main id='project' className='min-h-screen'>
//       <Navbar />
//       <div className='md:p-24 p-8'>
//       {/* <a href='/'><BiArrowBack className="text-4xl hover:text-blue-500 hover:scale-125 transform transition-all duration-150 ease-in-out" /></a>  */}
//       {/* Course Projects */}
//       <h1 className='flex italic justify-center font-extrabold xl:text-6xl md:text-2xl sm:text-lg pb-8'>Course Projects</h1>
      
//         {/* Projects */}
//         <div className='xl:flex  text-center items-center justify-between border-2 border-black overflow-aut'>

//           {/* Capstone */}
//           <div className='flex justify-center m-2 border-2 border-black '>
//           <div className="flex flex-col items-center justify-center border-2 bg-gray-800 rounded-full text-white p-4 xl:w-[30rem] xl:h-[30rem]  shadow-custom  hover:scale-105 transform transition-all duration-150 ease-in-out">    
//             <h2 className=' p-1 mb-6 text-white font-bold xl:text-5xl md:text-lg text-xs rounded-full border-b-2 border-white'>Capstone</h2> 
//             <a href="https://sswd-capstone-app.vercel.app/">
//               <div className='flex flex-col md:p-6 p-1 bg-white items-center justify-center rounded-full xl:w-[9rem] xl:h-[9rem]'>            
//                 <div className='flex italic font-normal items-center justify-center text-black xl:text-lg text-xs mt-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'>SSWD <br/>Web-App</div><br/>          
//               </div>
//             </a>
//             <div className='md:p-2'>
//                <p className='xl:text-lg'>Role-based Quoting and Ordering Web Application for Southern Shade Windows and Doors Company.</p>        
//             </div>                                 
//           </div>
//           </div>

//           {/* B2M MusePlayer */}
//           <div className='flex justify-center m-2 border-2 border-black '>
//           <div className="flex flex-col items-center justify-center border-2 bg-gray-800 rounded-full text-white p-4 xl:w-[30rem] xl:h-[30rem] shadow-custom  hover:scale-105 transform transition-all duration-150 ease-in-out">    
//             <h2 className='w-max p-1 mb-6 text-white font-bold xl:text-5xl md:text-lg text-xs rounded-full border-b-2 border-white'>Project </h2> 
//             <a href="https://sswd-capstone-app.vercel.app/">
//               <div className='flex flex-col md:p-6 bg-white rounded-full xl:w-[9rem] xl:h-[9rem] shadow-custom-main'>            
//                 <div className='flex italic font-normal text-black items-center justify-center xl:text-lg text-xs mt-2 hover:text-blue-500'>B2M<br/>MusePlayer</div><br/>          
//               </div>
//             </a>
//             <div className='px-2'>
//               <p className='p-2 xl:text-lg text-xs '>React Native Mobile Application for a Music Playing. React Native Mobile Application for a Music Playing</p>
//             </div>                                     
//           </div>
//           </div>

//           {/* BasuNews */}
//           <div className='flex justify-center m-2 border-2 border-black  '>
//           <div className="flex flex-col items-center justify-center border-2 bg-gray-800 rounded-full  text-white p-4  xl:w-[30rem] xl:h-[30rem] shadow-custom  hover:scale-105 transform transition-all duration-150 ease-in-out">    
//             <h2 className='w-max p-1 mb-6  text-white font-bold xl:text-5xl md:text-lg text-xs rounded-full border-b-2 border-white'>Project </h2> 
//             <a href="https://sswd-capstone-app.vercel.app/">
//               <div className='flex flex-col md:p-6 p-1 bg-white items-center justify-center rounded-full xl:w-[9rem] xl:h-[9rem] shadow-custom-main'>             
//                 <div className='flex italic font-normal items-center justify-center text-black xl:text-lg text-xs mt-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'>BasuNews</div><br/>          
//               </div>
//             </a>
//             <div className='p-2'>
//                 <p className='p-2 xl:text-lg text-xs'>React Web Application for a News. React Web Application for a News.</p>                            
//             </div>          
//           </div> 
//           </div>                                 
//         </div>
//       </div>  
//     </main>
//   )
// }
   


'use client';
import React from 'react';
import { FaLink } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import Navbar from './Navbar';

export default function Project() {
  return (
    <main id='project' className='min-h-screen'>
      <Navbar />
      <div className='md:p-24 p-8'> 
      {/* w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 */}
        {/* Course Projects */}
        <h1 className='flex italic justify-center font-extrabold xl:text-6xl md:text-4xl text-2xl pb-8'>Course Projects</h1>

        {/* Projects */}
        <div className='xl:flex text-center p-4 items-center justify-between rounded-xl bg-white border-2 border-black overflow-auto'>

          {/* Capstone */}
          <div className='flex justify-center m-2 '>
            <div className="flex flex-col items-center justify-center border-2 bg-gray-800 rounded-full text-white p-2 2xl:w-[30rem] 2xl:h-[30rem] xl:w-[25rem] xl:h-[25rem] lg:w-[20rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] shadow-custom hover:scale-105 transform transition-all duration-150 ease-in-out">
              <h2 className='hidden sm:block xl:mt-2 p-1 xl:pt-4 xl:mb-4 text-white font-bold rounded-full text-xs xl:text-4xl md:text-xl sm:text-lg border-b-2 border-white'>Capstone</h2>
              <a href="https://quoting-app-ten.vercel.app/">
                <div className='xl:flex flex-col xl:p-6 bg-white items-center justify-center rounded-full xl:h-44 xl:w-44'>
                  <div className='flex italic font-normal items-center justify-center text-black text-sm xl:text-2xl xl:mt-1 py-3 px-4 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'>SSWD <br />WebApp</div><br />
                </div>
              </a>
              <div className='xl:m-1 p-4 hidden sm:block'>
                <p className='2xl:pt-4 hidden md:block text-xs xl:text-xl md:text-xs'>Role-based Quoting and Ordering Web Application for Southern Shade Windows and Doors Company.</p>
              </div>
            </div>
          </div>

          {/* B2M MusePlayer */}
          <div className='flex justify-center m-2 '>
            <div className="flex flex-col items-center justify-center border-2 bg-gray-800 rounded-full text-white p-2 2xl:w-[30rem] 2xl:h-[30rem] xl:w-[25rem] xl:h-[25rem] lg:w-[20rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] shadow-custom hover:scale-105 transform transition-all duration-150 ease-in-out">
              <h2 className='hidden sm:block p-1 xl:pt-4 xl:mb-6 text-white font-bold rounded-full text-xs xl:text-4xl md:text-xl sm:text-lg border-b-2 border-white'>Project</h2>
              <a href="#">
                <div className='xl:flex flex-col xl:p-6 bg-white items-center justify-center rounded-full xl:h-44 xl:w-44'>
                  <div className='flex italic font-normal items-center justify-center text-black text-sm xl:text-2xl xl:mt-1 py-3 px-2 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out'>B2M <br />MusePlayer</div><br />
                </div>
              </a>
              <div className='xl:m-1 p-4 hidden sm:block'>
                <p className='2xl:p-4 hidden md:block text-xs xl:text-xl md:text-xs'>React Native Mobile Application for a Music Playing.</p>
              </div>
            </div>
          </div>

          {/* BasuNews */}
          <div className='flex justify-center m-2 '>
            <div className="flex flex-col items-center justify-center border-2 bg-gray-800 rounded-full text-white p-2 2xl:w-[30rem] 2xl:h-[30rem] xl:w-[25rem] xl:h-[25rem] lg:w-[20rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] shadow-custom hover:scale-105 transform transition-all duration-150 ease-in-out">
              
              <h2 className='hidden sm:block p-1 xl:pt-4 xl:mb-6 text-white font-bold rounded-full text-xs xl:text-4xl md:text-xl sm:text-lg border-b-2 border-white'>Project</h2>
              
              <a href="https://project-basunews.vercel.app/">             
                <div className='xl:flex flex-col  bg-white items-center justify-center rounded-full xl:h-44 xl:w-44'>
                  <div className='flex italic font-normal items-center justify-center text-black text-sm xl:text-2xl xl:mt-1 py-6 px-3 hover:text-blue-500 hover:scale-105 transform transition-all duration-150 ease-in-out truncate'>BasuNews</div><br />
                </div>
              </a>

              <div className='xl:m-1 p-4 hidden sm:block'>
                <p className='2xl:p-4 hidden md:block text-xs xl:text-xl md:text-xs'>React Web Application using NewsAPI for a News.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

 