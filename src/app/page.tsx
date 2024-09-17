'use client';

import Image from "next/image";
import Header from "./components/header/page";
import { useState } from "react";

export default function Home() {
  const [openAccordions, setOpenAccordions] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

  const toggleAccordion = (index: any) => {
    setOpenAccordions(openAccordions.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };
  
  return (
    <>
      <Header />
      <div className="grid flex items-center bg-green-900 opacity-80 justify-items-center p-4 gap-8"
        style={{
          backgroundImage: 'url("/bg-02.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center mt-40 xs:ml-72 sm:text-start">
          <div className="relative inline-block">
            <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
              THE ORIGINAL
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
          </div>
          <br />
          <div className="relative inline-block">
            <p className="relative text-white text-xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
              PICKLEBALL DESTINATION
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-green-300 w-80 h-80 sm:w-[30rem] sm:h-96 border border-4 border-zinc-900">
            <Image
              src="/header-01.jpg"
              alt="Pickleball"
              objectFit="cover"
              layout="fill"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <p className="text-2xl font-extrabold text-white mb-2">
                MAJOR TRES PICKLEBALL EXPERIENCE
              </p>
              <p className="text-medium text-white mb-2">
                (All inclusive package)
              </p>
              <p className="text-medium font-extrabold text-white">
                8 nights / <span className="font-normal text-xs">starting at</span> $1,294 per person
              </p>
              <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                RESERVE NOW!
              </button>
            </div>
          </div>
          <div className="relative bg-green-300 w-80 h-80 sm:w-[30rem] sm:h-96 border border-4 border-zinc-900">
            <Image
              src="/header-02.jpg"
              alt="Pickleball"
              objectFit="cover"
              layout="fill"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <p className="text-2xl font-extrabold text-white mb-2">
                TRES PALAPAS IMMERSION CAMPS
              </p>
              <p className="text-medium text-white mb-2">
                (All inclusive package)
              </p>
              <p className="text-medium font-extrabold text-white">
                7 nights / <span className="font-normal text-xs">starting at</span> $1,794 per person
              </p>
              <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                RESERVE NOW!
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-green-300 w-80 h-80 sm:w-[30rem] sm:h-96 border border-4 border-zinc-900">
          <Image
              src="/header-03.jpg"
              alt="Pickleball"
              objectFit="cover"
              layout="fill"
            />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <p className="text-2xl font-extrabold text-white mb-2">
              PRO-SERIES CAMPS
            </p>
            <p className="text-medium text-white mb-2">
              (All inclusive package)
            </p>
            <p className="text-medium font-extrabold text-white">
              7 nights / <span className="font-normal text-xs">starting at</span> $2,094 per person
            </p>
            <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              RESERVE NOW!
            </button>
          </div>
        </div>

        <div>
          <div className="text-center">
            <div className="relative inline-block">
              <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                EVERYONE IS WELCOME!
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <div className="mt-4 text-white">
            <p className="text-xl font-extrabold">ALL INCLUSIVE PACKAGES</p>
            <p className="text-xl font-extrabold">HOURLY PAY</p>
            <p className="text-xl font-extrabold">BAJA TRAVELERS</p>
            <p className="text-xl font-extrabold">LOCALS</p>
          </div>
          <div className="flex justify-center mt-4">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 border border-4 border-zinc-900">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <p className="text-2xl font-extrabold text-black mb-2">
                  VIDEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-blue-400">
        <div className="relative bg-blue-300 h-[50rem]">
          <Image
            src="/pickle-ss-01.jpg"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
            className="opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-left text-left m-5 mt-20 sm:m-10">
          <div>
            <div className="relative inline-block">
              <p className="relative text-white text-5xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                MTP
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
          <div>
            <div className="relative inline-block">
              <p className="relative text-white text-5xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                Experience
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
            <button className="mt-4 p-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400 w-52">
              VIEW SCHEDULE
            </button>
          </div>
        </div>
          <div className="m-10 mt-20 sm:m-10 lg:m-20 lg:mt-40 text-base lg:text-lg text-white">
            Experience the ultimate pickleball getaway with our
            all-inclusive travel package. Enjoy hassle-free airport
            transfers, comfortable lodging, dailing shuttles to and
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
            &quot;Lefty/Righty&quot; and &quot;Vegas Jackpot.&quot; Whether you're a
            beginner or advanced player, our diverse pickleball
            programming ensures non-stop fun and improvement
            throughout your unforgettable stay.
          </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative bg-green-900 opacity-80">
            <Image
              src="/pickle-ss-05.png"
              alt="Pickleball"
              objectFit="cover"
              layout="fill"
              className="opacity-80"
            />
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
              <div className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  TRES
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <div>
              <div className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  PALAPAS
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <div>
              <div className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  IMMERSION
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <div>
              <div className="relative inline-block">
                <p className="relative text-white text-4xl lg:text-6xl font-extrabold inline z-10">
                  CAMPS
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
              </div>
            </div>
            <br />
            <button className="mt-4 p-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400 w-52">
              VIEW SCHEDULE
            </button>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 bg-blue-400">
        <div className="relative bg-blue-300 h-[50rem]">
          <Image
              src="/pickle-ss-03.jpg"
              alt="Pickleball"
              objectFit="cover"
              layout="fill"
              className="opacity-50"
            />
          <div className="absolute inset-0 flex flex-col items-left text-left m-20 sm:m-10">
          <div>
            <div className="relative inline-block">
              <p className="relative text-white text-3xl sm:text-3xl lg:text-6xl font-extrabold inline z-10">
                PRO-SERIES
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
          <div>
            <div className="relative inline-block">
              <p className="relative text-white text-3xl sm:text-3xl lg:text-6xl font-extrabold inline z-10">
                CAMPS
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <br />
            <button className="mt-4 p-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400 w-52">
              VIEW SCHEDULE
            </button>
          </div>
        </div>
          <div className="m-20 mt-40 sm:m-10 lg:m-20 lg:mt-40 text-base lg:text-lg text-white">
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
          </div>
      </div>

      <div className="bg-green-900 opacity-80 py-16"
        style={{
          backgroundImage: 'url("/bg-01.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center pt-16">
          <div className="relative inline-block">
            <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
              HOOKED ON PICKLEBALL
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
          </div>
          <div className="relative inline-block">
            <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
              TACOS & SUNSHINE?
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-12 lg:mx-72">
          <div>
            <div className="text-base lg:text-lg text-white mt-4 lg:mt-16">
              Tres Palapas is your ultimate pickleball paradise from
              sun up to sun down. Unleash your pickleball passion with
              our innovative programming tailored to every skill level.
              <br />
              Mix in a refreshing margarita and relax as our curated
              <span className="font-bold"> Culinary Market<span className="align-super text-xs">TM</span></span> tantalizes your palette one savory
              bite at a time. Hang out and laugh with new friends. It&apos;s
              all here, where pickleball, tacos, and sunshine create the
              perfect recipe for an unforgettable getaway!
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-16">
              <div className="relative w-full h-72 border border-4 border-white-900">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/pickle-ss-04.jpg"
                    alt="Pickleball"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" bg-green-900 opacity-80"  
        style={{
          backgroundImage: 'url("/bg-02.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center py-16">
          <div className="text-white justify-self-center">
            <div className="relative inline-block">
              <p className="relative text-white text-3xl font-bold inline z-10">
                MTP
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            <br />
            <div className="relative inline-block">
              <p className="relative text-white text-3xl font-bold inline z-10">
                PACKAGE
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            <br />
            <p>(All Inclusive package)</p>
            <p><span className="font-bold">7 nights /</span><span className="font-normal text-xs">starting at</span><span className="font-bold"> $1,294 per person</span></p>
            <div className="box-border w-auto mt-4 p-4 border-4 text-start">
              <span className="font-bold">Saturday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Flight - Shuttle (1 hour)</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 4pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                <li className="before:content-['-'] before:mr-2">Check-In: 7:30pm-8pm</li>
              </ul>
              <br />
              <span className="font-bold">Sunday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Round Robin Kings&Queens: 8am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Monday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 8:am-10:am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Major Tres Pickleball: 2pm-4:30pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Tuesday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 8:am-10:am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 4pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Wednesday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Lefty / Righty: 8am-10am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Major Tres Pickleball: 4pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Thursday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Vegas Jackpot: 8am-10am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Major Tres Pickleball: 4pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Friday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 8am-10am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 4pm-6:30pm <br/>(Championship Night)</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Saturday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 7am-9pm</li>
                <li className="before:content-['-'] before:mr-2">Check-Out: 10am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Shuttle (1 hour) -&gt; Flight</li>
              </ul>
            </div>
            <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              RESERVE NOW!
            </button>
          </div>
          <div className="text-white justify-self-center">
          <div className="relative inline-block">
              <p className="relative text-white text-3xl font-bold inline z-10">
                IMMERSION
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            <br />
            <div className="relative inline-block">
              <p className="relative text-white text-3xl font-bold inline z-10">
                PACKAGE
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            <br />
            <p>(All Inclusive package)</p>
            <p><span className="font-bold">7 nights /</span><span className="font-normal text-xs">starting at</span><span className="font-bold"> $1,794 per person</span></p>
            <div className="box-border w-auto mt-4 p-4 border-4 text-start">
              <span className="font-bold">Saturday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Flight - Shuttle (1 hour)</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 4pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                <li className="before:content-['-'] before:mr-2">Check-In: 7:30pm-8pm</li>
              </ul>
              <br />
              <span className="font-bold">Sunday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Round Robin Kings&Queens: 8am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Monday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Master Camp: 8:am-10:am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Tuesday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Master Camp: 8:am-10:am or 10am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Round Robin: 2pm-4pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Wednesday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Master Camp: 8:am-10:am or 10am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Thursday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Master Camp: 8:am-10:am or 10am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Friday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Master Camp: 8:am-10:am or 10am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm <br/>(Championship Night)</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Saturday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 7am-9pm</li>
                <li className="before:content-['-'] before:mr-2">Check-Out: 10am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Shuttle (1 hour) -&gt; Flight</li>
              </ul>
            </div>
            <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              RESERVE NOW!
            </button>
          </div>
          <div className="text-white justify-self-center">
            <div className="relative inline-block">
              <p className="relative text-white text-3xl font-bold inline z-10">
                PRO-SERIES
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            <br />
            <div className="relative inline-block">
              <p className="relative text-white text-3xl font-bold inline z-10">
                PACKAGE
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            
            <br />
            <p>(All Inclusive package)</p>
            <p><span className="font-bold">7 nights /</span><span className="font-normal text-xs">starting at</span><span className="font-bold"> $2,094 per person</span></p>
            <div className="box-border w-auto mt-4 p-4 border-4 text-start">
              <span className="font-bold">Saturday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Flight - Shuttle (1 hour)</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 4pm-6pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                <li className="before:content-['-'] before:mr-2">Check-In: 7:30pm-8pm</li>
              </ul>
              <br />
              <span className="font-bold">Sunday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Round Robin Kings&Queens: 8am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Monday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Morning Campers: 9:am-12:pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Afternoon Campers: 2pm-5pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Tuesday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Morning Campers: 9:am-12:pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Afternoon Campers: 2pm-5pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Wednesday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Morning Campers: 8am-10pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Afternoon Campers: 2pm-5pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Thursday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 10am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Friday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 10am-12pm</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
              </ul>
              <br />
              <span className="font-bold">Saturday</span><br/>
              <ul className="list-none">
                <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 7am-9pm</li>
                <li className="before:content-['-'] before:mr-2">Check-Out: 10am</li>
                <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                <li className="before:content-['-'] before:mr-2">Shuttle (1 hour) -&gt; Flight</li>
              </ul>
              <br />
              <br />
              <br />
            </div>
            <button className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              RESERVE NOW!
            </button>
          </div>
        </div>

        <div className="text-center pb-4">
          <div className="relative inline-block">
            <p className="relative text-white text-3xl sm:text-3xl lg:text-6xl font-bold inline z-10">
              WHAT INCLUDED?
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
          </div>
          <br /><br />
          <p className="text-white">INCLUDED IN BOTH PACKAGES, AIRPORT TRANSFERS, LODGING, <br /> DAILY RESORT SHUTTLE, FOOD & PICKLEBALL</p>
          <p className="text-white">**airfare not included in price**<br />
            lodging is double occupancy (single occupancy add $500) <br />
            lodging is clean, comfortable, Mexican authentic <br />
            (add $300, $400, $600, or $1000 per person for upgraded accomodation) <br />
            breafast, lunch, & dinner included daily <br />
            all afternoon activities leave from and return to resort <br />
            afternoon activities not included in price except for &quot;more pickleball&quot; & &quot;siesta&quot; <br />
            unlimited pickleball included if 30 scheduled hours is not enough
          </p>
          <br /> <br/>
          <div className="relative inline-block">
            <p className="relative text-white text-2xl sm:text-3xl lg:text-6xl font-bold inline z-10">
              NO PACKAGE, NO PROBLEM!!!
            </p>
            <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
          </div>
          <br /><br />
          <p className="text-white">Join us for open play hours daily, available to every player!<br />
            Check schedule for open play time slots & hours.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 bg-blue-400 opacity-80 pb-4"
        style={{
          backgroundImage: 'url("/bg-03.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}>
        <div className="">
          <div className="flex flex-col items-center mx-4 mt-16">
            <div className="relative w-full h-[25rem] md:w-4/6 md:h-[40rem] border-4 border-white">
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
        <div>
          <div className="flex flex-col items-center mx-4 mt-16">
            <div className="relative w-full h-[25rem] md:w-4/6 md:h-[40rem] border-4 border-white">
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
        <div>
          <div className="flex flex-col items-center mx-4 mt-16">
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
        <div>
          <div className="flex flex-col items-center mx-4 mt-16">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 bg-green-900 opacity-80">
        <div className="relative bg-green-900 opacity-80 h-[50rem]">
          <Image
            src="/pickle-ss-05.png"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
            className="opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-left text-left m-10 sm:m-10 lg:mt-40">
            <div>
              <div className="relative inline-block">
                <p className="relative text-white text-lg sm:text-3xl lg:text-4xl font-extrabold inline z-10">
                  COME FOR THE PICKLEBALL
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
              </div>
            </div>
            <div>
              <div className="relative inline-block">
                <p className="relative text-white text-lg sm:text-3xl lg:text-4xl font-extrabold inline z-10">
                  STAY FOR THE TACOS
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
              </div>
            </div>
            <div className="mt-4 text-base lg:text-lg text-white">
              Exceptional dining is an integratl part of a memorable
              pickleball experience, which is why we created the
              <span className="font-bold"> Culinary Market<span className="align-super text-xs">TM</span></span>. This concept brings the best local
              flavors to your plate without leaving the resort, featuring a daily rotation of signature dishes from top East Cape
              restaurants. Meals are prepared partially in the restaurants&apos; kitchens
              and finished on-site for fresh, hot dining. our
              <span className="font-bold"> Culinary Market<span className="align-super text-xs">TM</span></span> offers the excitement of exploring local
              cuisine without the need for reservations or restaurant
              research, complemented by our in-house menu for familiar
              options. Enjoy a curated foodie tour without leaving the
              resort-no internet searches or city navigation needed!
            </div>
          </div>
        </div>
        <div className="relative bg-green-900 h-[50rem]">
          <Image
            src="/taco.jpg"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
            className="opacity-80"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="text-center">
              <p className="relative text-white text-3xl sm:text-3xl lg:text-5xl font-extrabold inline z-10">
                (CULINARY MARKET<span className="text-sm align-super" style={{ verticalAlign: 'top', lineHeight: '1' }}>TM</span>)
              </p>
              <br />
              <p className="relative text-white text-3xl sm:text-3xl lg:text-5xl font-extrabold inline z-10">
                coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-blue-600 opacity-80 pb-4"
        style={{
          backgroundImage: 'url("/bg-02.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}>
        <div className="pt-16">
          <div className="text-center">
            <div className="relative inline-block">
              <p className="relative text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                CONTACT US
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 mx-4 lg:mx-56 mt-8 gap-4">
            <div className="flex flex-col">
              <p className="text-white text-xl font-bold mb-2">Name (Required)</p>
              <input 
                type="text" 
                placeholder="First" 
                className="w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col justify-end">
              <input 
                type="text" 
                placeholder="Last" 
                className="w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <p className="text-white text-xl font-bold mb-2">Email (Required)</p>
              <input 
                type="text" 
                placeholder="" 
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <p className="text-white text-xl font-bold mb-2">Phone (Required)</p>
              <input 
                type="text" 
                placeholder="" 
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 mx-4 lg:mx-56 mt-4">
            <div>
              <p className="text-white text-xl font-bold mb-2">Message (Required)</p>
              <input 
                type="text" 
                placeholder="" 
                className="w-full h-24 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mx-4 lg:mx-56 mt-4">
            <button className="mt-4 px-12 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
              SUBMIT
            </button>
          </div>

          <div className="text-center mt-16">
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
      </div>

      <div className="grid grid-cols-1 bg-green-900 opacity-80 pb-16"
        style={{
          backgroundImage: 'url("/bg-03.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}>
        <div className="pt-16">
          <div className="text-center">
            <div className="relative inline-block">
              <p className="relative text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                FAQ
              </p>
              <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
          </div>
          <div className="mx-auto mt-8 w-3/4">
            {accordionData.map((accordion, index) => (
              <div key={index} className="mb-4">
                <button 
                  onClick={() => toggleAccordion(index)} 
                  className="w-full flex justify-between text-start items-center bg-orange-500 text-white px-4 py-3 font-bold text-sm lg:text-lg rounded-md focus:outline-none">
                  <span>{accordion.title}</span>
                  <span>{openAccordions[index] ? '-' : '+'}</span>
                </button>

                <div
                  className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${openAccordions[index] ? 'max-h-screen' : 'max-h-0'}`}
                >
                  <div className="p-4 bg-white text-black">
                    {accordion.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const accordionData = [
  { title: "What is Tres Palapas", content: (
    <p>
      - We are a dedicated pickleball facility. We have 10 courts, onsite coffee, smoothies, restaurant, courtside bar. We are the perfect place to immerse yourself in the Baja pickleball lifestyle
    </p>
  ) },
  { title: "How do I get to Tres Palapas? What airport do I fly into?", content: (
    <p>
      - Fly into the Los Cabos Airport (SJD). We are a 55 minute drive north of the airport in Los Barriles. We suggest a van service (taxi) to get to Los Barriles.
    </p>
  ) },
  { title: "DO I need to bring Pesos, is USD accepted, can I use my CC in Los Barriles?", content: (
    <p>
      - Ordering Pesos from your bank at home before traveling is the recommended way to pay for everything in Los Barriles. Local businesses will also accept USD, but at an exchange rate. A few businesses, but not many, will accept a CC. There are a few ATMs in Los Barriles that will accept a US CC and dispense pesos.
    </p>
  )},
  { title: "What transportation do I need to get around Los Barriles?", content: (
    <p>
      - Most people rent a quad or a side by side to travel around town and the beaches and arroyos. We recommend <a className="text-blue-500 hover:underline" href="https://www.quadmanbaja.com/" target="_blank"> https://www.quadmanbaja.com/ </a> for their excellent rental service.
    </p>
  ) },
  { title: "What is the best time of year to visit?", content: (
    <p>
      - Our peak season for visitors is October 1st to June 1st. Winter months generally have high temperatures close to 80F (26C) and lows around 60F (15C). Fall and Spring months can be as hot as 90F (32C). We have over 340 days of sunshine a year, and the “rainy” season is mostly in August and September.
    </p>
  ) },
  { title: "Where do I stay?", content: (
    <p>
      - We have three beautiful 1-bedroom condos onsite. We also recommend a few hotels and rentals in the area. You can view all our favorite accommodation options here
    </p>
  ) },
  { title: "What do I need to do before I arrive?", content: (
    <p>
      - Register for Scheduled Play, reserve a court, or sign up for the events you wish to participate in during your time at Tres Palapas. Due to the high demand for courts, we recommend you schedule your pickleball play at the same time you make your travel plans. You can schedule all your pickleball play here: <a className="text-blue-500 hover:underline" href="https://mobileapp.courtreserve.com/Online/Portal/Index/8043" target="_blank"> https://mobileapp.courtreserve.com/Online/Portal/Index/8043 </a> 
    </p>
  ) },
  { title: "Is there drinking water? Is the water safe to drink?", content: (
    <p>
      - We have a water bottle filling station at the courts that is treated and triple filtered and safe to drink. If you’re visiting, all you need to do is bring your water bottle and you will be set. We do also sell bottled water. If you stay somewhere in town or offsite, you will need to buy
    </p>
  ) },
  { title: "Do I need to bring a paddle/ball/shoes?", content: (
    <p>
      - You can bring your own paddle, but we have a pro shop onsite that has paddles for demo and for sale. Balls are supplied on court at no cost. Court shoes are required to play at Tres Palapas, we do not have any shoes for sale in the pro shop.
    </p>
  )},
  { title: "How does pickleball play work at Tres Palapas?", content: (
    <p>
      - All scheduled play, events, and reservations are organized by skill level. Register for the play you wish to participate in and you will be assigned a court when you arrive.
    </p>
  ) },
  { title: "Do you offer pickleball camps/clinics/lessons?", content: (
    <p>
      - Yes, we offer weekly clinics to sign up for and private lessons by appointment. We also have visiting pros that offer camps. View our clinics schedule here. Sign up for private lessons here. View our Pro-Series camps here. Please check in at the front desk when you arrive so we know you are here.
    </p>
  ) },
  { title: "Do you have any tournaments?", content: (
    <p>
    - Yes. We run a tournament almost every month. View the tournament schedule here to plan your vacation around a tournament. All of our tournament results will be uploaded to DUPR after completion of the tournament. Find our Tournament Registrations here: <a className="text-blue-500 hover:underline" href="https://mobileapp.courtreserve.com/Online/Events/List/8043/MZMFKCTETW?pageTitle=Tournaments&rootCall=false " target="_blank"> https://mobileapp.courtreserve.com/Online/Events/List/8043/MZMFKCTETW?pageTitle=Tournaments&rootCall=false  </a>
    </p>
  ) },
  { title: "Do you have round robins/leagues/ladders to compete in?", content: (
    <p>
      - We have different scheduled events on each day of the week. See the schedule here: <a className="text-blue-500 hover:underline" href="https://mobileapp.courtreserve.com/Online/Portal/Index/8043">https://mobileapp.courtreserve.com/Online/Portal/Index/8043</a>
    </p>
  ) },
  { title: "Is Tres Palapas open to the public? Do I need a membership to play at Tres Palapas?", content: (
    <p>
      - Yes! Tres Palapas welcomes all visitors and tourists. No Membership required. All scheduled play, reservations and events can be paid for with Tres Tokens. Save money and purchase a Tres Token Package here: <a className="text-blue-500 hover:underline" href="https://app.courtreserve.com/Online/Memberships/Index/8043">https://app.courtreserve.com/Online/Memberships/Index/8043</a>
    </p>
  ) },
  { title: "What can my friends/spouse do while I play pickleball", content: (
    <p>
      - Non-players can watch pickleball or sit at the Courtside Bar. We also have social activities often in the evenings. Check our “Food and Drink” events on CourtReserve for more. The town of Los Barriles is full of activities for non-pickleball players including hiking/off-roading, paddle boarding, kite surfing, snorkeling, yoga, pilates, massages, and more. We are just a short walk (5min) to the ocean.
    </p>
  ) },
  { title: "Are you close to the beach?", content: (
    <p>
      - We are just a short 5 minute walk to the ocean.
    </p>
  ) },
  { title: "I want to look at Real Estate near Tres Palapas. How do I get started?", content: (
    <p>
      - Our personal friends and the #1 real estate agency in Los Barriles are Carlene and David Lokey with Homes and Land of Baja. You can get in touch with them here
    </p>
  ) },
  { title: "Do you allow pets?", content: (
    <p>
      - We love pets at Tres Palapas, however we need to ensure that they do not disrupt other people’s vacations. Well behaved pets are welcome as long as they are on a leash at all times.
    </p>
  ) },
  { title: "Are children allowed?", content: (
    <p>- Yes, children are welcome to come play pickleball at Tres Palapas. Children under the age of 14 must be accompanied by a parent at all times. Juniors aged 14-18 that respect the Code of Conduct may play at Tres without a parent. Baja Kids is a great local service that offers baby-sitting and activities for young children.</p>
  ) },
  { title: "Can I bring a group for a private event at Tres Palapas?", content: 
    (<p>- Yes, we host weddings, family reunions, friends&apos; trips, and other types of private events. Email info@trespalapasbaja.com to inquire about reserving for your private party.</p>)
  },
  { title: "Do you have any job opportunities?", content: (
    <>
      <p>- We are always on the lookout for fun and interesting people to join us either on the courts, in the bar/restaurant, or elsewhere.</p>
      <p>Reach out to us at <a className="text-blue-500 hover:underline" href="mailto:info@trespalapasbaja.com">info@trespalapasbaja.com</a> to inquire about job opportunities.</p>
      <br />
      <p>Need more info? Email us at <a className="text-blue-500 hover:underline" href="mailto:info@trespalapasbaja.com">info@trespalapasbaja.com</a></p>
    </>
  ) },
];
