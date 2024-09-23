'use client';

import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

export default function Tournaments() {
    return (
        <>
        <Header />
        <div className="relative py-32 px-4"
          style={{
          backgroundColor: 'rgb(99, 139, 179)'
        }}>
          <Image
            className="inset-0 opacity-10"
            src="/bg-01.png"
            alt="Pickleball"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div data-aos="flip-right" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[70px] md:mr-[-70px]">
              <div className="relative w-full md:w-4/6 h-[25rem] md:h-[40rem] border border-4 border-white">
                <Image
                  src="/reg-01.jpeg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              REGISTER NOW!
              </button>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[-70px] md:mr-[70px]">
              <div className="relative w-full md:w-4/6 h-[25rem] md:h-[40rem] border-4 border-white">
                <Image
                  src="/reg-02.jpeg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                REGISTER NOW!
              </button>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[70px] md:mr-[-70px]">
              <div className="relative w-full h-[25rem] md:w-4/6 md:h-[40rem] border-4 border-white">
                <Image
                  src="/reg-03.jpeg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              REGISTER NOW!
              </button>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[-70px] md:mr-[70px]"
            >
              <div className="relative w-full h-[25rem] md:w-4/6 md:h-[40rem] border-4 border-white">
                <Image
                  src="/reg-04.jpeg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              REGISTER NOW!
              </button>
            </div>
          </div>

        </div>
        <div className="mt-24">
          <Footer />
        </div>
      </div>
        </>
    )
}