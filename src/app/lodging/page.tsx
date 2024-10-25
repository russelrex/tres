'use client';

import Image from "next/legacy/image";
// @ts-expect-error: This error is expected due to XYZ reason
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/footer/page";
import Header from "../components/header/page";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);
  return (
    <>
      <Header />
      <div className="relative py-16 opacity-90 px-4 pt-44"
            style={{
            backgroundColor: 'rgb(99, 139, 99)'
            }}
        >
        <div
          className="-z-10 fixed opacity-10 inset-0 w-[1000px] h-auto sm:w-[1500px] lg:w-auto"
          style={{
            backgroundImage: 'url("/bg-02.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="text-center text-white">
          <h1 data-aos="fade-left" className="text-[32px] lg:text-[64px] font-bold">Guide to Tres Palapas Lodging</h1>
          <h2 data-aos="fade-right" className="text-[32px] lg:text-[32px]">As part of All-Inclusive Packages</h2>
        </div>

        <div className="mx-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-20">
                <div data-aos="fade-right" className="z-10 text-white content-center">
                    
                    <div className="justify-center text-start">
                        <h1 className="text-[32px] lg:text-[44px] font-bold mb-[-10px]">2 to 4 Bedroom Homes</h1>
                        <h2 className="text-[24px] lg:text-[30px] font-bold">Standard (2 Palms)</h2>
                        
                        <div className="text-start ms-8 mt-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    Shared home (kitchen, living room etc)
                                </li>
                                <li>
                                    Private bedroom
                                </li>
                                <li>
                                    Double or Queen bed (usually Queen)
                                </li>
                                <li>
                                    May have detached shared bathroom
                                </li>
                                <li>
                                    Clean, Mexican authentic
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-01.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-02.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-03.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-04.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-05.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-06.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-20">
                <div data-aos="fade-up" className="z-10 text-white content-center">
                    
                    <div className="justify-center text-start">
                        <h1 className="text-[32px] lg:text-[44px] mb-[-10px] font-bold">3 Palms Upgrade</h1>
                        <h2 className="text-[24px] lg:text-[30px] font-bold">(add $300 per person per week)</h2>
                        
                        <div className="text-start ms-8 mt-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    Shared home (kitchen, living room etc)
                                </li>
                                <li>
                                    Private bedroom
                                </li>
                                <li>
                                    Attached private bathroom
                                </li>
                                <li>
                                    Queen or King Bed
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-aos="fade-down" className="grid grid-cols-2 gap-4">
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-07.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-08.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-09.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-10.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-11.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-12.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-20">
                <div data-aos="flip-left" className="z-10 text-white content-center">
                    
                    <div className="justify-center text-start">
                        <h1 className="text-[32px] lg:text-[44px] mb-[-10px] font-bold">4 Palms Upgrade</h1>
                        <h2 className="text-[24px] lg:text-[30px] font-bold">(add $600 per person per week)</h2>
                        
                        <div className="text-start ms-8 mt-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    Shared home (kitchen, living room etc)
                                </li>
                                <li>
                                    Private Suite
                                </li>
                                <li>
                                    Nicer finishes
                                </li>
                                <li>
                                    May include...
                                </li>
                                <li className="list-none">
                                    - Pool <br />
                                    - Close to beach <br />
                                    - Beachfront <br />
                                    - Great views <br />
                                    - Rooftop patio <br />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-aos="flip-right" className="grid grid-cols-2 gap-4">
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-13.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-14.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-15.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-16.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-17.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-18.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-20">
                <div data-aos="zoom-in" className="z-10 text-white content-center">
                    
                    <div className="justify-center text-start">
                        <h1 className="text-[32px] lg:text-[44px] mb-[-10px] font-bold">5 Palms Upgrade</h1>
                        <h2 className="text-[24px] lg:text-[30px] font-bold">(add $1,000 per person per week)</h2>
                        
                        <div className="text-start ms-8 mt-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    Private Suite
                                </li>
                                <li>
                                    High end finishes
                                </li>
                                <li>
                                    May include...
                                </li>
                                <li className="list-none">
                                    - Emmaculate Pool <br />
                                    - Relaxing gardens <br />
                                    - Beachfront <br />
                                    - Hilltop <br />
                                    - Great views <br />
                                    - Downtown <br />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-aos="zoom-out" className="grid grid-cols-2 gap-4">
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-19.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-20.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-21.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-22.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-23.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-24.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-20">
                <div data-aos="fade-down-right" className="z-10 text-white content-center">
                    
                    <div className="justify-center text-start">
                        <h1 className="text-[32px] lg:text-[44px] mb-[-10px] font-bold">5 Palms On-site Condos</h1>
                        <h2 className="text-[24px] lg:text-[30px] font-bold">(add $1,000 per person per week)</h2>
                        
                        <div className="text-start ms-8 mt-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    Spacious (1,000 sf)
                                </li>
                                <li>
                                    King Suite
                                </li>
                                <li>
                                    Full Kitchen
                                </li>
                                <li>
                                    High end finishes
                                </li>
                                <li>
                                    Private pool & jacuzzi (on-site guests only)
                                </li>
                                <li>
                                    Gated parking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-aos="fade-down-left" className="grid grid-cols-2 gap-4">
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-25.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-26.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-27.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-28.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-29.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        <div className="relative border border-4 border-white h-64">
                            <Image
                                src="/lodging-30.png"
                                alt="Pickleball"
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-20">
                <div data-aos="fade-up-right" className="z-10 text-white content-center">
                    
                    <div className="justify-center text-start">
                        <h1 className="text-[32px] lg:text-[44px] font-bold">Private Casitas</h1>
                        <div className="text-start ms-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    Main house may be occupied by others
                                </li>
                                <li>
                                    Attached private bathroom
                                </li>
                                <li>
                                    Kitchenette or full kitchen
                                </li>
                                <li>
                                    Add $200 per week
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="justify-center text-start mt-8">
                        <h1 className="text-[32px] lg:text-[44px] font-bold">One Bedroom Home</h1>
                        <div className="text-start ms-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    Entire home is double occupancy
                                </li>
                                <li>
                                    Add $400 per week
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="justify-center text-start mt-8">
                        <h1 className="text-[32px] lg:text-[44px] font-bold">Notes</h1>
                        <div className="text-start ms-8">
                            <ul className="list-disc text-white text-[22px] lg:text-[24px]">
                                <li>
                                    All rooms are double occupancy
                                </li>
                                <li>
                                    Add $500 per week for single occupancy
                                </li>
                                <li>
                                    Additions and subtractions table<br />
                                    (all amounts are per room per week):
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div data-aos="fade-up-left" className="container">
                        <table className="table-auto border border-4 border-white w-full text-center text-white">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="border border-4 border-white p-2">2 Palms</th>
                                    <th className="border border-4 border-white p-2">3 Palms</th>
                                    <th className="border border-4 border-white p-2">4 Palms</th>
                                    <th className="border border-4 border-white p-2">5 Palms</th>
                                    <th className="border border-4 border-white p-2">Casita</th>
                                </tr>
                            </thead>
                            <tbody className="border border-4 border-white">
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-3 text-end">King bed</td>
                                    <td className="border border-4 border-white">$200</td>
                                    <td className="border border-4 border-white">$200</td>
                                    <td className="border border-4 border-white">$0</td>
                                    <td className="border border-4 border-white">$0</td>
                                    <td className="border border-4 border-white">$100</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">Queen bed</td>
                                    <td className="border border-4 border-white p-2">$0</td>
                                    <td className="border border-4 border-white p-2">$0</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                    <td className="border border-4 border-white p-2">($300)</td>
                                    <td className="border border-4 border-white p-2">$0</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">Double bed</td>
                                    <td className="border border-4 border-white p-2">($100)</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                    <td className="border border-4 border-white p-2">($300)</td>
                                    <td className="border border-4 border-white p-2">($400)</td>
                                    <td className="border border-4 border-white p-2">($100)</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">Sofa bed</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                    <td className="border border-4 border-white p-2">($400)</td>
                                    <td className="border border-4 border-white p-2">($500)</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">1 Beds 1 Room</td>
                                    <td className="border border-4 border-white p-2">$200</td>
                                    <td className="border border-4 border-white p-2">$200</td>
                                    <td className="border border-4 border-white p-2">$200</td>
                                    <td className="border border-4 border-white p-2">$200</td>
                                    <td className="border border-4 border-white p-2">$200</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">Private Bath</td>
                                    <td className="border border-4 border-white p-2">$200</td>
                                    <td className="border border-4 border-white p-2">$0</td>
                                    <td className="border border-4 border-white p-2">$0</td>
                                    <td className="border border-4 border-white p-2">$0</td>
                                    <td className="border border-4 border-white p-2">$0</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">Shared Bath</td>
                                    <td className="border border-4 border-white p-2">$</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                    <td className="border border-4 border-white p-2">($300)</td>
                                    <td className="border border-4 border-white p-2">($400)</td>
                                    <td className="border border-4 border-white p-2">n/a</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">Semi-private room</td>
                                    <td className="border border-4 border-white p-2">($100)</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                    <td className="border border-4 border-white p-2">($300)</td>
                                    <td className="border border-4 border-white p-2">($400)</td>
                                    <td className="border border-4 border-white p-2">n/a</td>
                                </tr>
                                <tr className="border border-4 border-white">
                                    <td className="border border-4 border-white p-2 text-end">No private room</td>
                                    <td className="border border-4 border-white p-2">($200)</td>
                                    <td className="border border-4 border-white p-2">($300)</td>
                                    <td className="border border-4 border-white p-2">($400)</td>
                                    <td className="border border-4 border-white p-2">($500)</td>
                                    <td className="border border-4 border-white p-2">n/a</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[10rem]">
            <Footer />
        </div>
        </div>
    </>
  )
}