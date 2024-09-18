'use client';

import Image from "next/image";
import Header from "./components/header/page";
import { useEffect } from "react";
// @ts-expect-error: This error is expected due to XYZ reason
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <div className="grid flex items-center opacity-90 justify-items-center py-16 gap-8"
        style={{
          backgroundColor: 'rgb(99, 139, 99)'
        }}
      >
        <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/bg-02.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              opacity: 0.2,
            }}
          />
        <div className="container text-center mt-20 xs:ml-72 sm:text-start">
          <div data-aos="fade-left" className="relative inline-block">
            <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
              THE ORIGINAL
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
          </div>
          <br />
          <div data-aos="fade-right" className="relative inline-block">
            <p className="relative text-white text-xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
              PICKLEBALL DESTINATION
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div data-aos="flip-left" className="relative w-80 h-80 sm:w-[25rem] border border-4 border-white">
          <Image
            src="/header-01.jpg"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ 
              backgroundColor: 'rgb(99, 139, 99)', opacity: 0.5 }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <p className="text-2xl font-extrabold text-white mb-2">
              MAJOR TRES PICKLEBALL EXPERIENCE
            </p>
            <p className="text-medium text-white mb-2">
              (All inclusive package)
            </p>
            <p className="text-medium font-extrabold text-white">
              7 nights / <span className="font-normal text-xs">starting at</span> $1,294 per person
            </p>
            <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              RESERVE NOW!
            </button>
          </div>
        </div>
        <div data-aos="flip-up" className="relative w-80 h-80 sm:w-[25rem] border border-4 border-white">
          <Image
            src="/header-02.jpg"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ 
              backgroundColor: 'rgb(99, 139, 99)', opacity: 0.5 }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <p className="text-2xl font-extrabold text-white mb-2">
              MAJOR TRES PICKLEBALL EXPERIENCE
            </p>
            <p className="text-medium text-white mb-2">
              (All inclusive package)
            </p>
            <p className="text-medium font-extrabold text-white">
              7 nights / <span className="font-normal text-xs">starting at</span> $1,294 per person
            </p>
            <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              RESERVE NOW!
            </button>
          </div>
        </div>
        <div data-aos="flip-right" className="relative w-80 h-80 sm:w-[25rem] border border-4 border-white">
          <Image
            src="/header-03.jpg"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ 
              backgroundColor: 'rgb(99, 139, 99)', opacity: 0.5 }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <p className="text-2xl font-extrabold text-white mb-2">
              MAJOR TRES PICKLEBALL EXPERIENCE
            </p>
            <p className="text-medium text-white mb-2">
              (All inclusive package)
            </p>
            <p className="text-medium font-extrabold text-white">
              7 nights / <span className="font-normal text-xs">starting at</span> $1,294 per person
            </p>
            <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              RESERVE NOW!
            </button>
          </div>
        </div>
        </div>

        <div>
          <div className="text-center">
            <div data-aos="flip-left" className="relative inline-block">
              <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                EVERYONE IS WELCOME!
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <div data-aos="flip-right" className="block md:flex mt-4 text-white gap-4">
            <p className="text-xl font-extrabold">ALL INCLUSIVE PACKAGES &#x2714;</p>
            <p className="text-xl font-extrabold">HOURLY PAY &#x2714;</p>
            <p className="text-xl font-extrabold">BAJA TRAVELERS &#x2714;</p>
            <p className="text-xl font-extrabold">LOCALS &#x2714;</p>
          </div>
          <div className="video-container flex justify-center mt-8">
            <div className="relative w-full h-80 sm:w-4/5 lg:w-2/3 border border-4 border-white">
              <iframe
              height="315"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_fAi1i5KNfM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2"
      style={{
        backgroundColor: 'rgb(99, 139, 179)'}}>
        <div className="relative h-[40rem] sm:h-auto">
          <Image
            src="/pickle-ss-01.jpg"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
            className="opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-left text-left m-5 mt-20 sm:m-10">
          <div>
            <div data-aos="zoom-in-left" className="relative inline-block">
              <p className="relative text-white text-5xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                MTP
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
          <div>
            <div data-aos="zoom-in-right" className="relative inline-block">
              <p className="relative text-white text-5xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                Experience
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
            <button data-aos="flip-left" className="mt-4 p-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400 w-52">
              VIEW SCHEDULE
            </button>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/bg-01.png")',
              backgroundSize: 'auto',
              backgroundPosition: 'center',
              opacity: 0.2,
            }}
          />
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" className="relative">
            <p className="m-10 mt-20 sm:m-10 lg:m-20 lg:mt-40 text-base lg:text-xl text-white">
              Experience the ultimate pickleball getaway with our
              all-inclusive travel package. Enjoy hassle-free airport
              transfers, comfortable lodging, daily shuttles to and
              from the resort, and our curated foodie tour for every
              breakfast, lunch and dinner.
              <br /><br />
              Focusing on pickleball as your main course, the
              highlight of your trip will be Major Tres Pickleball
              (MTP), our exciting team-based event running Monday
              to Friday. Engage in MTP social play, draft night, team
              matches, and championship games with prizes for
              winning teams.
              <br /><br />
              Additionally, participate in our skill-based open play,
              ladder league, and unique game day events such as
              &quot;Lefty/Righty&quot; and &quot;Vegas Jackpot.&quot; Whether you&apos;re a
              beginner or advanced player, our diverse pickleball
              programming ensures non-stop fun and improvement
              throughout your unforgettable stay.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative" style={{ 
                backgroundColor: 'rgb(99, 139, 99)'}}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/pickle-ss-05.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
              }}
            />
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" className="relative">
              <p className="m-10 mt-20 sm:m-10 lg:m-20 lg:mt-40 text-base lg:text-xl text-white">
                Experience the ultimate pickleball evolution at our
                innovative all-inclusive 5-day Immersion Camp. This
                comprehensive program is designed to up your game
                through a unique blend of technique/strategic
                development and implement a growth mindset to lay
                the foundation for future self-improvement
                <br /><br />
                Our expert instructor will guide you through our
                carefully crafted curriculum that builds progressively
                from foundational skills to advanced strategies. Our
                innovative drills and exercises seamlessly integrate
                multiple skills while constantly reinforcing previous
                learnings, ensuring a holistic improvement in your
                pickleball prowess
                <br /><br />
                Whether you&apos;re an intermediate player looking to
                build on a solid foundation or an advanced player
                aiming to refind your skills, our camp caters to varying
                abilities with tailored instruction. Join us for an
                unforgettable pickleball experience that will fuel your
                passion for continuous improvement.
              </p>
            </div>
          </div>
          <div className="relative bg-green-300 h-[50rem]">
            <Image
              src="/pickle-ss-02.jpg"
              alt="Pickleball"
              objectFit="cover"
              layout="fill"
              className="opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-left text-left m-10 sm:m-10">
            <div>
              <div data-aos="zoom-in-right" className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  TRES
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <div>
              <div data-aos="zoom-in-right" className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  PALAPAS
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <div>
              <div data-aos="zoom-in-left" className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  IMMERSION
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <div>
              <div data-aos="zoom-in-left" className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  CAMPS
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <button data-aos="flip-right" className="mt-4 p-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400 w-52">
              VIEW SCHEDULE
            </button>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative h-[50rem]" style={{ 
                backgroundColor: 'rgb(99, 139, 179)'}}>
          <Image
              src="/pickle-ss-03.jpg"
              alt="Pickleball"
              objectFit="cover"
              layout="fill"
              className="opacity-50"
            />
          <div className="absolute inset-0 flex flex-col items-left text-left m-20 sm:m-10">
          <div>
            <div data-aos="fade-up-right" className="relative inline-block">
              <p className="relative text-white text-3xl sm:text-3xl lg:text-6xl font-extrabold inline z-10">
                PRO-SERIES
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
          <div>
            <div data-aos="fade-up-left" className="relative inline-block">
              <p className="relative text-white text-3xl sm:text-3xl lg:text-6xl font-extrabold inline z-10">
                CAMPS
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
            <button data-aos="flip-up" className="mt-4 p-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400 w-52">
              VIEW SCHEDULE
            </button>
          </div>
        </div>
        <div className="relative" style={{ 
                backgroundColor: 'rgb(99, 139, 179)'}}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/bg-02.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
              }}
            />
            <div data-aos="fade-up" data-aos-duration="2000" className="relative">
              <p className="m-10 mt-20 sm:m-10 lg:m-20 lg:mt-40 text-base lg:text-xl text-white">
                Elevate your pickleball game with our exclusive
                Pro-Series Camp experience. This all-inclusive travel
                package offers an intensive 9-hour training over 3 days
                with a top professional player, maintaining an intimate
                8:1 player-to-pro ratio for personalized instruction.
                <br /><br />
                Hone your skills, learn advanced strategies, and
                receive expert feedback to take your game to the next
                level. Outside camp hours, enjoy skill-based open play
                and our competitive Ladder League tailored to your
                skill level. 
                <br /><br />
                Your stay includes comfortable lodging, airport
                transfers, daily shuttles, and our curated foodie tour for
                every breakfast, lunch and dinner, allowing you to
                focus solely on improving your pickleball prowess in a
                supportive, immersive environment. 
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
