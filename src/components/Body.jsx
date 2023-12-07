import { React, useState, useEffect } from 'react'
import img1 from '../assets/1.png'
import pclogo from '../assets/pl.png'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { AiTwotoneMail } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { FaHome, FaNetworkWired } from "react-icons/fa";
export default function Body() {
  // const textArray = ["Shaping Tomorrow's Technology with Innovation"];
  // const [textIndex, setTextIndex] = useState(0);
  // const [displayedText, setDisplayedText] = useState('');
  
  // useEffect(() => {
  //   let timer;
  //   if (textIndex < textArray.length) {
  //     timer = setTimeout(() => {
  //       const currentText = textArray[textIndex];
  //       setDisplayedText(currentText.substring(0, displayedText.length + 1));
  //     }, 100); // Adjust the speed here (milliseconds)
  //   } else {
  //     clearTimeout(timer);
  //   }
  //   return () => clearTimeout(timer);
  // }, [displayedText, textIndex, textArray]);

  // useEffect(() => {
  //   if (displayedText === textArray[textIndex]) {
  //     setTimeout(() => {
  //       setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
  //       setDisplayedText('');
  //     }, 1500); // Time to wait after finishing typing one sentence
  //   }
  // }, [displayedText, textIndex, textArray]);

  return (
    <div className='w-full min-h-screen'>
      <section id='home' className='section-background flex min-h-screen flex-wrap items-center justify-center '>
        <div className='flex flex-wrap items-center justify-center bg-black absolute bg-opacity-60 w-full h-full'>
          <div class="bg-gradient-to-br from-blue-800 shadow-black border-b-2 border-black shadow-2xl rounded-3xl via-yellow-600 to-red-500 p-1">
              <div class="bg-white rounded-3xl p-4">
                <h1 className='lg:text-8xl font-semibold bg-gradient-to-r from-red-600 via-yellow-600 text-center to-indigo-800 inline-block text-transparent bg-clip-text font-mono'>PRADNYA CONSULTANT</h1>
              </div>
            </div>
                <img src={pclogo} className='lg:hidden'/>
            <div className='w-full flex items-center justify-center'>
              <div className="lg:typewriter lg:h-24 flex items-center p-2 bg-gradient-to-l from-teal-800 to-teal-600 rounded-lg text-2xl">
                <h1 className='lg:text-5xl text-4xl text-center'>Shaping Tomorrow's Technology with Innovation</h1>
              </div>
            </div>
        </div>
      </section>
      <section id='services' className=' bg-gradient-to-tr from-teal-950 to-slate-300 flex flex-wrap items-center justify-center min-h-screen h-auto lg:p-10 w-full'>
       <div className=' lg:h-5/6 lg:absolute flex flex-wrap left-0 lg:p-10 p-2 items-center justify-center w-screen lg:w-1/2'>
        <div className=' w-full lg:absolute top-0 lg:h-1/6'>
          <h1 className=' text-6xl font-semibold p-10 w-full'>Services</h1>
        </div>
        <div className=' p-5 bg-gradient-to-br w-screen rounded-lg from-teal-200 via-slate-200 text-black to-gray-200 text-3xl font-light flex items-center justify-center'>
          At Pradnya Consultant, we take pride in offering a diverse range of services that cater to the evolving needs of our clients. Our expertise extends beyond conventional boundaries, allowing us to deliver comprehensive solutions that drive innovation and efficiency. Here's a glimpse of our multifaceted service offerings
        </div>
       </div>
       <div className=' lg:h-5/6 lg:w-1/2 lg:absolute right-0 flex overflow-auto flex-wrap lg:m-10 items-center justify-center lg:p-5'>
          <div className='md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Embedded Systems Development</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
            Proven expertise in complex system integration
            </span>
          </div>
          <div className=' md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>AI Products</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              Pioneering AI solutions for transformative experiences
            </span>
          </div>
          <div className='md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>PCB Designs</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              Mastering precision in PCB design
            </span>
          </div>
          <div className='md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Energy Management</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              Empowering energy efficiency and cost savings
            </span>
          </div>
          <div className='md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Power Factor Controller</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              Optimizing power factor for energy efficiency
            </span>
          </div>
          <div className='md:w-72 w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Energizing Communities: Clean Solutions</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              - Distribution of Cooking Stoves and Portable Biogas
              - Trained and Certified Associates
              - Training and Knowledge Sharing
              - Community Transformation
            </span>
          </div>
          
       </div>
      </section>
      
      <section id='products' className=' custom-img-3 flex flex-wrap items-center justify-center min-h-screen h-auto w-full'>
        <div className=' bg-black w-full min-h-screen lg:p-10 bg-opacity-60'>
          <div className=' lg:h-5/6 lg:absolute flex flex-wrap left-0 lg:p-10 items-center justify-center w-full'>
            <div className=' w-full lg:absolute top-0 lg:h-1/6'>
              <h1 className=' text-6xl font-semibold p-10 w-full'>Products</h1>
            </div>
            <div className='border w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Redundant Automatic Voltage Regulator</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
                Dependable voltage control safeguards critical equipment, ensuring uninterrupted operations in any condition.
              </span>
            </div>
            <div className='border w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>GPS Trackers / VTS Vehicle Tracking System</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
                Elevate operations with our real-time GPS tracking solutions for vehicles. Stay connected, stay informed, and optimize every move.
              </span>
            </div>
            <div className='border w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Drivers - BLDC Motor Drive, LED Drive</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
                Efficiently power LED solutions and industrial BLDC motors with our innovative, high-performance drivers.
              </span>
            </div>
            <div className='border w-full lg:w-72 h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>APFC Controller (Automatic Power Factor Controller)</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
                Empower efficiency and cost savings with our innovative Automatic Power Factor Controller and quality-driven solutions
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className=' bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex flex-wrap items-center justify-center min-h-screen h-auto w-full'>
        <div className=' bg-black w-full min-h-screen lg:p-10 bg-opacity-60'>
          <div className=' w-full top-0 lg:h-1/6'>
            <h1 className=' text-6xl font-semibold lg:p-10 p-5 w-full'>About US</h1>
          </div>
          <div className=' lg:h-5/6 lg:absolute flex flex-wrap left-0 lg:p-10 items-center justify-center w-full'>
            <div className='lg:w-2/3 w-full p-4 text-justify space-y-3'>
              <span className=' font-semibold text-xl'>Pradnya Consultant - Empowering Innovation since 2014.</span> At Pradnya Consultant, we are more than just a consulting firm; we are the architects of tomorrow's technology. Established in 2014 as a proprietary firm, Pradnya Consultant has earned its reputation as a trailblazer in the fields of IoT and Embedded Electronics Product Development. Our journey has been one marked by innovation, excellence, and a commitment to ethical business practices.
              <h2 className=' pt-2 font-semibold font-mono text-2xl'>
                Our Expertise
              </h2>
              Pradnya Consultant specializes in crafting cutting-edge solutions that harness the power of the Internet of Things (IoT) and Embedded Electronics. Our team of experts is passionate about bringing ideas to life, transforming concepts into reality, and developing products that shape the future.
              <h2 className=' pt-2 font-semibold font-mono text-2xl'>
                Our Valued Partners
              </h2>
              Over the years, we have had the privilege of serving as trusted consultants to numerous multinational corporations. Companies such as Cummins, ETON, TATA, Royal Enfield, and many more have benefited from our technical expertise and unwavering dedication to their success. Our collaborations have resulted in the creation of innovative and impactful solutions that have left a lasting mark on their industries.
              <h2 className=' pt-2 font-semibold font-mono text-2xl'>
                Our Ethical Commitment
              </h2>
              At Pradnya Consultant, ethics are the cornerstone of our operations. We believe in conducting our business with integrity, transparency, and a steadfast commitment to our clients' needs. Our persistent dedication to delivering high-quality work and exceeding expectations has solidified our reputation as a trustworthy partner in the ever-evolving world of technology.
              <h2 className=' pt-2 font-semibold font-mono text-2xl'>
                Beyond Technology: Empowering Rural Communities
              </h2>
              While our core expertise lies in technology, our commitment to creating positive change extends beyond the digital realm. Pradnya Consultant is also deeply involved in the distribution of stoves and biogas plants in rural areas. This initiative aligns with our belief that technology should not only benefit corporations but also uplift communities and protect the environment. At Pradnya Consultant, our mission is to continue pushing the boundaries of what's possible in IoT and Embedded Electronics while simultaneously making a meaningful impact on the world around us. We invite you to join us on this journey of innovation, ethical business, and community empowerment. Pradnya Consultant - Where Innovation Meets Integrity, Where Technology Transforms Lives.
            </div>
            {/* <div className=' p-5 bg-gradient-to-br rounded-lg from-teal-200 via-slate-200 text-black to-gray-200 text-3xl font-light flex items-center justify-center'>
              At Pradnya Consultant, we take pride in offering a diverse range of services that cater to the evolving needs of our clients. Our expertise extends beyond conventional boundaries, allowing us to deliver comprehensive solutions that drive innovation and efficiency. Here's a glimpse of our multifaceted service offerings
            </div> */}
          </div>
        </div>
      </section>
      <section id='contact' className=' bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex flex-wrap items-center justify-center min-h-screen h-auto w-full'>
        <div className=' bg-black  flex flex-wrap items-center justify-center w-full min-h-screen lg:p-10 bg-opacity-60'>
          <div className=' w-full top-0 lg:h-1/6'>
            <h1 className=' text-6xl font-semibold lg:p-10 w-full'>Contact US</h1>
          </div>
          <div className=' lg:h-5/6  lg:absolute flex flex-wrap left-0 lg:p-10 items-center justify-center w-full'>
            <form>
              <input type='text' className=' p-5 block w-full mt-5 rounded-lg' placeholder=' Full Name'/>
              <input type='text' className=' p-5 block w-full mt-5 rounded-lg' placeholder=' Email'/>
              <input type='text' className=' p-5 block w-full mt-5 rounded-lg' placeholder=' Phone'/>
              <textarea name="" id="" className='block  mt-5 w-full rounded-lg p-5 h-20' placeholder='Message ...' cols="30" rows="10"></textarea>
              <input type='button' className=' hover:cursor-pointer active:border shadow-lg bg-gradient-to-br from-slate-800 via-slate-600 to-slate-500 p-5 block w-full mt-5 rounded-lg' value={"SUBMIT"}/>
            </form>
          </div>
        </div>
      </section>
      <footer className=' flex flex-wrap items-center justify-center'>
        <div className='  lg:w-1/4 w-full lg:h-20 m-10 rounded-lg'>
          <img src={pclogo} style={{ width: '300px'}} alt='PC Logo' />
          <span className=' block text-justify font-thin' style={{width:'300px'}}>
            <b>Pradnya Consultant,</b> pioneering IoT and Embedded Electronics since 2014, architects innovative tech solutions. we epitomizes innovation, excellence, and ethical business practices.
          </span>
        </div>
        <div className=' lg:w-1/4 w-full lg:h-20 m-10 text-2xl font-semibold rounded-lg'>
          <div className=' lg:ml-20'>
            <span className=' underline'>QUICK LINKS</span>
            <span className=' block text-justify font-thin' style={{width:'300px'}}>
              <div className="">
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee`}>
                    <a href="#home" className=' text-white font-thin hover:text-white'>  <FaHome className='inline'/> Home</a>
                </h2>
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee`}>
                    <a href="#services" className=' text-white font-thin hover:text-white'>  <FaNetworkWired className='inline' /> Services</a>
                </h2>
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee `}>
                    <a href="#products" className=' text-white font-thin hover:text-white'>  <MdProductionQuantityLimits className='inline'/> Products</a>
                </h2>
                
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee `} >
                    <a href="#about" className=' text-white font-thin hover:text-white'> <FcAbout className='inline'/> About US</a>
                </h2>
                
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee`}>
                    <a href="#contact" className=' text-white font-thin hover:text-white'>  <MdContactMail className='inline'/> Contact US</a>
                </h2>
              </div>
            </span>
          </div>
        </div>
        <div className=' lg:w-1/4 w-full lg:h-20 m-10 rounded-lg'>
        <div className=' lg:ml-20 pb-10'>
            <span className=' underline text-2xl font-semibold'>STAY WITH US</span>
            <span className=' block text-justify font-thin' style={{width:'300px'}}>
              <div className=" m-2">
                <ul>
                  <li>
                    <a className='text-white font-thin hover:text-white' href='https://www.google.com/maps/place/Pradnya+Consultant/@19.9656221,73.7370278,19z/data=!4m6!3m5!1s0x3bddeca4c743e0f7:0xac0b4b9efe14ea58!8m2!3d19.9658575!4d73.7370539!16s%2Fg%2F11byyq8kqx?entry=ttu'>
                      <FaLocationDot className=' text-2xl inline text-red-500' /> Company Address :
                      <p className=' w-60 pl-10'>1st Floor, D1/20 Ambad MIDC, Nashik, Maharashtra 422010</p>
                    </a>
                  </li>
                  <li>
                    <a className='text-white font-thin hover:text-white' >
                      <FaPhone className=' text-2xl inline text-red-500' /> Phone Number:
                      <p className=' w-60 pl-10'>0253-6634176</p>
                      <p className=' w-60 pl-10'>+91 7066176352</p>
                    </a>
                  </li>
                  
                  <li>
                    <a className='text-white font-thin hover:text-white' >
                      <AiTwotoneMail className=' text-2xl inline text-red-500' /> Email:
                      <p className=' w-60 pl-10'>admin@pradnyaconsultant.in</p>
                      <p className=' w-60 pl-10'>tech.pradnya@gmail.com</p>
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
        
      </footer>
    </div>
  )
}
