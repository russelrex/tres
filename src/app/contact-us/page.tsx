'use client';

import { useState } from "react";
import Footer from "../components/footer/page";
import Header from "../components/header/page";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const handleChange = (e: any) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const handleSubmit = (e: any) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, message } = formData;
    
        const mailtoLink = `mailto:info@trespalapasbaja.com?subject=Contact from ${encodeURIComponent(firstName + ' ' + lastName)}&body=Name: ${encodeURIComponent(firstName + ' ' + lastName)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
    
        window.location.href = mailtoLink;
      };

    return (
        <>
        <Header />
            <div className="relative pt-24 px-4 min-h-screen"
            style={{
            backgroundColor: 'rgb(99, 139, 179)'
            }}>
                   <div
          className="fixed opacity-10 inset-0 w-[1000px] h-auto sm:w-[1500px] lg:w-auto"
          style={{
            backgroundImage: 'url("/bg-02.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* <div className="fixed inset-0 overflow-hidden w-[1500px] h-[2500px]">
            <Image
            className="opacity-10"
            src="/bg-02.png"
            alt="Pick0leball"
            layout="fill"
            style={{ zIndex: -1 }}
            />
        </div> */}
                <div className="pt-16">
                <div data-aos="zoom-in" className="text-center">
                    <div className="relative inline-block">
                    <p className="relative text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                        CONTACT US
                    </p>
                    <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-56 mt-8 gap-4">
                        <div className="flex flex-col">
                        <p className="text-white text-xl font-bold mb-2">Name (Required)</p>
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First" 
                            value={formData.firstName}
                            onChange={handleChange}
                            className="text-black z-10 w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        </div>
                        <div className="flex flex-col justify-end">
                        <input 
                            type="text" 
                            name="lastName"
                            placeholder="Last" 
                            value={formData.lastName}
                            onChange={handleChange}
                            className="text-black z-10 w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        </div>
                        <div className="flex flex-col">
                        <p className="text-white text-xl font-bold mb-2">Email (Required)</p>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleChange}
                            className="text-black z-10 w-full h-12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        </div>
                        <div className="flex flex-col">
                        <p className="text-white text-xl font-bold mb-2">Phone (Required)</p>
                        <input 
                            type="text" 
                            name="phone" 
                            placeholder="Phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="text-black z-10 w-full h-12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mx-4 lg:mx-56 mt-4">
                        <div className="flex flex-col">
                        <p className="z-10 text-white text-xl font-bold mb-2">Message (Required)</p>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="text-black z-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={4}
                            cols={50}
                            placeholder="Enter your message here..."
                            required
                        />
                        </div>
                    </div>

                    <div className="flex z-10 mx-4 lg:mx-56 mt-4">
                        <button type="submit" className="z-10 mt-4 px-12 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                        SUBMIT
                        </button>
                    </div>
                </form>

                <div className="text-center mt-8">
                    <div className="relative inline-block">
                    <p className="relative text-white text-2xl font-bold inline z-10">
                        HOURS OF OPERATION
                    </p>
                    <br />
                    <p className="relative text-white text-2xl font-bold inline z-10">
                        Oct - May **BUSY SEASON** : Every Day 7:00AM to 8:00PM
                    </p>
                    <br />
                    <p className="relative text-white text-2xl font-bold inline z-10">
                        (summer hours may change)
                    </p>
                    </div>
                </div>
                </div>
                <div className="pb-16 pt-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}