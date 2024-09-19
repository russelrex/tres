import Footer from "../components/footer/page";
import Header from "../components/header/page";
import Image from "next/image";

export default function ContactUs() {
    return (
        <>
        <Header />
            <div className="relative min-h-screen grid-cols-1 pt-24"
            style={{
            backgroundColor: 'rgb(99, 139, 179)'
            }}>
                <Image
                    className="inset-0 opacity-20"
                    src="/bg-02.png"
                    alt="Pickleball"
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                />
                <div className="pt-16">
                <div data-aos="zoom-in" className="text-center">
                    <div className="relative inline-block">
                    <p className="relative text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                        CONTACT US
                    </p>
                    <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-56 mt-8 gap-4">
                    <div className="flex flex-col">
                    <p className="text-white text-xl font-bold mb-2">Name (Required)</p>
                    <input 
                        type="text" 
                        placeholder="First" 
                        className="z-10 w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    </div>
                    <div className="flex flex-col justify-end">
                    <input 
                        type="text" 
                        placeholder="Last" 
                        className="z-10 w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    </div>
                    <div className="flex flex-col">
                    <p className="text-white text-xl font-bold mb-2">Email (Required)</p>
                    <input 
                        type="text" 
                        placeholder="" 
                        className="z-10 w-full h-12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    </div>
                    <div className="flex flex-col">
                    <p className="text-white text-xl font-bold mb-2">Phone (Required)</p>
                    <input 
                        type="text" 
                        placeholder="" 
                        className="z-10 w-full h-12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 mx-4 lg:mx-56 mt-4">
                    <div className="flex flex-col">
                    <p className="z-10 text-white text-xl font-bold mb-2">Message (Required)</p>
                    <textarea
                        id="message"
                        name="message"
                        className="z-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={4}
                        cols={50}
                        placeholder="Enter your message here..."
                    ></textarea>
                    </div>
                </div>
                <div className="flex z-10 mx-4 lg:mx-56 mt-4">
                    <button className="z-10 mt-4 px-12 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                    SUBMIT
                    </button>
                </div>

                <div className="text-center mt-8">
                    <div className="relative inline-block">
                    <p className="relative text-white text-2xl font-bold inline z-10">
                        * * HOURS OF OPERATION * *
                    </p>
                    <br />
                    <p className="relative text-white text-2xl font-bold inline z-10">
                        Octor - May: Every Day 7:00AM to 8:00PM
                    </p>
                    <br />
                    <p className="relative text-white text-2xl font-bold inline z-10">
                        (summer hours may change)
                    </p>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        </>
    )
}