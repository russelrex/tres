'use client';

import Header from "../components/header/page";
import Footer from "../components/footer/page";

export default function Packages() {

    return (
        <>
        <Header />
        <div className="relative py-16 opacity-90 px-4"
            style={{
            backgroundColor: 'rgb(99, 139, 99)'
            }}
        >
        <div
          className="fixed opacity-10 inset-0 w-[1000px] h-auto sm:w-[1500px] lg:w-auto"
          style={{
            backgroundImage: 'url("/bg-02.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
    {/* <div className="fixed inset-0 overflow-hidden md:w-[1500px] md:h-[2500px]">
    <Image
      className="opacity-10"
      src="/bg-02.png"
      alt="Pick0leball"
      layout="fill"
    //   width={1700}
    //   height={2800}
      style={{ zIndex: -1 }}
    />
  </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center py-24 gap-2">
            <div className="z-10 text-white justify-self-center">
                <div data-aos="zoom-in-right" className="relative inline-block">
                <p className="relative text-white text-3xl font-bold inline z-10">
                    MTP
                </p>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                <br />
                <div data-aos="zoom-in-right" className="relative inline-block">
                <p className="relative text-white text-3xl font-bold inline z-10">
                    PACKAGE
                </p>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                <br />
                <p className="mt-4">(All Inclusive-Package)</p>
                <p><span className="font-bold">7 nights /</span><span className="font-normal text-xs">starting at</span><span className="font-bold"> $1,494 per person</span></p>
                <p className="text-xs">Taxes & Fees included*</p>
                <div className="box-border w-auto mt-4 p-4 border-4 text-start">
                <span className="font-bold">Saturday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Flight - Shuttle from SJD to LB (1 hour)</li>
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
                    <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 8am-10am</li>
                    <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                    <li className="before:content-['-'] before:mr-2">Major Tres Pickleball: 2pm-4:30pm</li>
                    <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                </ul>
                <br />
                <span className="font-bold">Tuesday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 8am-10am</li>
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
                    <li className="before:content-['-'] before:mr-2">Shuttle leaving LB (3 hours) before flight</li>
                </ul>
                </div>
                <button onClick={() => window.open('https://forms.gle/nsgcKz3huNJdAcKt9', '_blank')} className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                RESERVE NOW!
                </button>
            </div>
            <div className="z-10 text-white justify-self-center mt-12 md:mt-0">
                <div data-aos="zoom-in-up" className="relative inline-block">
                <p className="relative text-white text-3xl font-bold inline z-10">
                    IMMERSION
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                <br />
                <div data-aos="zoom-in-up" className="relative inline-block">
                <p className="relative text-white text-3xl font-bold inline z-10">
                    PACKAGE
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                <p className="mt-4">(All Inclusive-Package)</p>
                <p><span className="font-bold">7 nights /</span><span className="font-normal text-xs">starting at</span><span className="font-bold"> $2,094 per person</span></p>
                <p className="text-xs">Taxes & Fees included*</p>
                <div className="box-border w-auto mt-4 p-4 border-4 text-start">
                <span className="font-bold">Saturday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Flight - Shuttle from SJD to LB (1 hour)</li>
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
                    <li className="before:content-['-'] before:mr-2">Immersion Camp: 8am-10am</li>
                    <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                    <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm</li>
                    <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                </ul>
                <br />
                <span className="font-bold">Tuesday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Immersion Camp: 8am-10am or 10am-12pm</li>
                    <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                    <li className="before:content-['-'] before:mr-2">Round Robin: 2pm-4pm</li>
                    <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                </ul>
                <br />
                <span className="font-bold">Wednesday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Immersion Camp: 8am-10am or 10am-12pm</li>
                    <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                    <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm</li>
                    <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                </ul>
                <br />
                <span className="font-bold">Thursday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Immersion Camp: 8am-10am or 10am-12pm</li>
                    <li className="before:content-['-'] before:mr-2">Lunch: 12:30pm</li>
                    <li className="before:content-['-'] before:mr-2">Skill-Based Open Play: 2pm-4pm</li>
                    <li className="before:content-['-'] before:mr-2">Dinner: 6:30pm</li>
                </ul>
                <br />
                <span className="font-bold">Friday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Immersion Camp: 8am-10am or 10am-12pm</li>
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
                    <li className="before:content-['-'] before:mr-2">Shuttle leaving LB (3 hours) before flight</li>
                </ul>
                </div>
                <button onClick={() => window.open('https://forms.gle/RzT99hK45L3Byonj8', '_blank')} className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                RESERVE NOW!
                </button>
            </div>
            <div className="z-10 text-white justify-self-center mt-12 md:mt-0">
                <div data-aos="zoom-in-left" className="relative inline-block">
                <p className="relative text-white text-3xl font-bold inline z-10">
                    PRO-SERIES
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                <br />
                <div data-aos="zoom-in-left" className="relative inline-block">
                <p className="relative text-white text-3xl font-bold inline z-10">
                    PACKAGE
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                
                <br />
                <p className="mt-4">(All Inclusive-Package)</p>
                <p><span className="font-bold">7 nights /</span><span className="font-normal text-xs">starting at</span><span className="font-bold"> $2,394 per person</span></p>
                <p className="text-xs">Taxes & Fees included*</p>
                <div className="box-border w-auto mt-4 p-4 border-4 text-start">
                <span className="font-bold">Saturday</span><br/>
                <ul className="list-none">
                    <li className="before:content-['-'] before:mr-2">Flight - Shuttle from SJD to LB (1 hour)</li>
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
                    <li className="before:content-['-'] before:mr-2">Shuttle leaving LB (3 hours) before flight</li>
                </ul>
                <br />
                <br />
                <br />
                </div>
                <button onClick={() => window.open('https://forms.gle/DKGGsrmb2HUn6C518', '_blank')} className="mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-400">
                RESERVE NOW!
                </button>
            </div>
            </div>

            <div className="text-center pb-8">
            <div data-aos="fade-up" data-aos-duration="2000" className="relative inline-block">
                <p className="z-10 relative text-white text-3xl sm:text-3xl lg:text-7xl font-bold inline z-10">
                WHAT&apos;S INCLUDED?
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            <br /><br />
            <p className="z-10 relative text-white text-base lg:text-2xl">AIRPORT TRANSFERS, LODGING, <br /> DAILY RESORT SHUTTLE, FOOD & PICKLEBALL</p>
            <div className="flex justify-center text-start">

            <ul className="z-10 list-disc text-white mt-2 ps-12 md:ps-24">
                <li>
                    <span className="font-bold">AIRFARE NOT INCLUDED IN PRICE</span>
                </li>
                <li>
                    Lodging is double occupancy (single occupancy add $500)
                </li>
                <li>
                    Lodging is clean, comfortable, Mexican authentic
                </li>
                <li>
                    (Add $300, $600, or $1000 per person for upgraded accommodations)
                </li>
                <li>
                    Breakfast, lunch, & dinner included daily
                </li>
                <li>
                    All afternoon activities leave from and return to resort
                </li>
                <li>
                    Afternoon activities not included in price except for &quot;more pickleball&quot; & &quot;siesta&quot;
                </li>
                <li>
                    Unlimited pickleball included if 30 scheduled hours is not enough.
                </li>
            </ul>
            </div>
            <br /> <br/>
            <div data-aos="fade-down" data-aos-duration="2000"  className="relative inline-block">
                <p className="relative text-white text-2xl sm:text-3xl lg:text-5xl font-bold inline z-10">
                NO PACKAGE, NO PROBLEM!!!
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
            </div>
            <br /><br />
            <p className="z-10 relative text-white text-base lg:text-lg">
                Join us for skill-based open play daily, available to every player!<br />
                <a href="https://mobileapp.courtreserve.com/Online/Calendar/Events/8043/Month" target="_blank" className="underline underline-offset-4">Check schedule</a> for time slots & hours. 
            </p>
            </div>
            
            <Footer />
        </div>
        </>
    )
}