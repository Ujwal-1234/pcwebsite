import { React, useState} from 'react'
import pclogo from '../assets/pl.png'
export default function Nav() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (id) => {
        setActiveLink(id);
    };

    const isActive = (id) => {
        return activeLink === id ? 'overline' : '';
    };
  return (
    <div class=" ">
        <nav class=" fixed top-0 left-0 z-50 lg:p-1 shadow-primary-sm w-full hidden lg:block ">
            <div class="flex justify-between h-full align-middle items-center text-secondary">
                <div class="lg:ml-10 ">
                    <img src={pclogo} style={{width: "220px"}} />
                </div>
                <div class="font-bold text-lg bg-white shadow-md bg-opacity-90 mr-10 rounded-2xl flex items-center ">
                    <div class="">
                    <div className="flex items-center">
                        <h2 className={`p-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('home')}`} onClick={() => handleLinkClick('home')}>
                            <a href="#home" className=' text-teal-800'> Home</a>
                        </h2>
                        <h2 className={`p-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('services')}`} onClick={() => handleLinkClick('services')}>
                            <a href="#services" className=' text-teal-800'>Services</a>
                        </h2>
                        <h2 className={`p-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('products')}`} onClick={() => handleLinkClick('products')}>
                            <a href="#products" className=' text-teal-800'>Products</a>
                        </h2>
                        
                        <h2 className={`p-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('about')}`} onClick={() => handleLinkClick('about')}>
                            <a href="#about" className=' text-teal-800'>About US</a>
                        </h2>
                        
                        <h2 className={`p-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('contact')}`} onClick={() => handleLinkClick('contact')}>
                            <a href="#contact" className=' text-teal-800'>Contact US</a>
                        </h2>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}
