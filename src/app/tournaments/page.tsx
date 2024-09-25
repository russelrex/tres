'use client';

import Image from "next/legacy/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { useRouter } from "next/navigation";

export default function Tournaments() {
  
    const router = useRouter();
    return (
        <>
        <Header />
        <div className="relative pt-32 px-4"
          style={{
          backgroundColor: 'rgb(99, 139, 179)'
        }}>
              <div className="fixed inset-0 overflow-hidden">
    <Image
      className="opacity-10"
      src="/bg-01.png"
      alt="Pickleball"
      width={1600}
      height={2000}
      style={{ zIndex: -1 }}
    />
  </div>
          {/* <Image
            className="inset-0 opacity-10"
            src="/bg-01.png"
            alt="Pickleball"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div data-aos="flip-right" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[70px] md:mr-[-70px]">
              <div className="relative w-full md:w-4/6 h-[25rem] md:h-[40rem] 2xl:w-4/6 2xl:h-[80rem] border border-4 border-white">
                <Image
                  src="/reg-01.jpeg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSeke9uAHTSqHjx2sV3etfGuW2baszv0AfovztWCiEayKalf4Q/viewform')} className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              REGISTER NOW!
              </button>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[-70px] md:mr-[70px]">
              <div className="relative w-full md:w-4/6 h-[25rem] md:h-[40rem] 2xl:w-4/6 2xl:h-[80rem]  border-4 border-white">
                <Image
                  src="/reg-02.jpg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSdosQcfShEseOc9IiVtlUFiX_E_w3QxM6cTUKlmVCDW8wp1tw/viewform')} className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                REGISTER NOW!
              </button>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[70px] md:mr-[-70px]">
              <div className="relative w-full h-[25rem] md:w-4/6 md:h-[40rem] 2xl:w-4/6 2xl:h-[80rem] border-4 border-white">
                <Image
                  src="/reg-03.jpg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSd0bni5e_u52CIe6MTglw37A9C7yKSY1WYy1gAs5OqDlgwltQ/viewform')} className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              REGISTER NOW!
              </button>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="2000" className="z-10">
            <div className="flex flex-col items-center mt-16 ml-0 mr-0 md:ml-[-70px] md:mr-[70px]"
            >
              <div className="relative w-full h-[25rem] md:w-4/6 md:h-[40rem] 2xl:w-4/6 2xl:h-[80rem] border-4 border-white">
                <Image
                  src="/reg-04.jpg"
                  alt="Pickleball"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <button onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSd73eGgpKC1TQXqn1-X55hK8ZAzIcpejhF0RVA23Czih7uqGQ/viewform')} className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              REGISTER NOW!
              </button>
            </div>
          </div>

        </div>
        <div className="py-16">
          <Footer />
        </div>
      </div>
        </>
    )
}