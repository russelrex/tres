'use client';

import { useState } from "react";
import Header from "../components/header/page";
import Image from "next/legacy/image";
import Footer from "../components/footer/page";

export default function FAQ() {
    const [openAccordions, setOpenAccordions] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const toggleAccordion = (index: number) => {
        setOpenAccordions(openAccordions.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
      };

    return (
        <>
            <Header />
            <div className="relative py-24"
                style={{
                backgroundColor: 'rgb(99, 139, 99)'
                }}
            >
              <div className="grid grid-cols-1">
                    {/* <Image
                      className="inset-0 opacity-10"
                      src="/bg-03.png"
                      alt="Pickleball"
                      objectFit="cover"
                      objectPosition="center"
                      layout="fill"
                  /> */}
                                <div className="fixed inset-0 overflow-hidden">
    <Image
      className="opacity-10"
      src="/bg-03.png"
      alt="Pickleball"
      layout="fill"
      objectFit="cover"
      // width={1600}
      // height={3000}
      style={{ zIndex: -1 }}
    />
  </div>
                  <div className="pt-16">
                  <div data-aos="zoom-in" className="text-center">
                      <div className="relative inline-block">
                      <p className="relative text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                          FAQ
                      </p>
                      <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
                      </div>
                  </div>
                  <div className="flex flex-col mx-auto mt-8 w-3/4">
                      {accordionData.map((accordion, index) => (
                      <div key={index} className=" z-10 mb-4">
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
              <div className="mt-12">
                <Footer />
              </div>
            </div>
        </>
    )
}

const accordionData = [
    { title: "What is Tres Palapas", content: (
      <p>
        - We are a dedicated oasis of pickleball with 10 courts surrounding our courtside bar. We offer a cafe which provides delicious coffee, smoothies and breakfast. Additionally we have a full service restaurant on site. We are the original destination for pickleball experience. Get ready to immerse yourself in the beautiful Baja pickleball lifestyle.
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
        - If you purchase one of the three all-inclusive packages, transportation to and from the airport is included, courtesy of Tres Palapas. These packages also provide daily shuttle service between off-site lodging and the facility. For those not on a package, most people choose to rent a quad or side-by-side to explore the town, beaches, and arroyos. Renting a car in San José del Cabo is another option. It&apos;s worth noting that there are no taxis in Los Barriles.
      </p>
    ) },
    { title: "What is the best time of year to visit?", content: (
      <p>
        - Our peak season for visitors is October 1st to June 1st. Winter months generally have high temperatures close to 80F (26C) and lows around 60F (15C). Fall and Spring months can be as hot as 90F (32C). We have over 340 days of sunshine a year, and the “rainy” season is mostly in August and September.
      </p>
    ) },
    { title: "Where do I stay?", content: (
      <p>
        - Welcome to Hacienda Blanca, where we offer three beautiful, private 1-bedroom condos onsite, complete with a hot tub and swimming pool. If the condos are fully booked, no worries! We provide lodging solutions with all-inclusive packages for each of our Tres Experiences, including MTP, Immersion Camps, and the Pro-Series Camps.
      </p>
    ) },
    { title: "What do I need to do before I arrive?", content: (
      <p>
        - We recommend you reserve your favorite times for skill based open play and sign up for any of the special programs that interest you. Space is limited so we can ensure the maximum play experience for your vacation time. You can schedule all your pickleball play here: <a className="text-blue-500 hover:underline" href="https://mobileapp.courtreserve.com/Online/Portal/Index/8043" target="_blank"> https://mobileapp.courtreserve.com/Online/Portal/Index/8043 </a> 
      </p>
    ) },
    { title: "Is there drinking water? Is the water safe to drink?", content: (
      <p>
        - We have a treated and triple filtered water bottle filling station at the courts which is safe to drink. If you&apos;re visiting, all you need to do is bring your water bottle and you will be set. In addition, we sell bottled water. If you are staying off site the water is not recommended to drink unless your accommodations specifically state their water is filtered.  
      </p>
    ) },
    { title: "Do I need to bring a paddle/ball/shoes?", content: (
      <p>
        - We recommend you bring your own paddle and shoes. We do have a pro shop with clothing items and we offer demo paddles and paddles for sale. Balls are supplied on the courts at no cost to you! Court shoes are required to play at Tres Palapas. Note we do not sell footwear/court shoes in our pro shop.
      </p>
    )},
    { title: "How does pickleball play work at Tres Palapas?", content: (
      <p>
        - All scheduled play, events, and reservations are organized by skill level. Register for the play you wish to participate in and you will be assigned a court when you arrive. Alternatively, choose from one of our amazing three packages for the full Tres Palapas Pickleball experience!
      </p>
    ) },
    { title: "Do you offer pickleball camps/clinics/lessons?", content: (
      <p>
        - Absolutely!  See our home page and choose from one of three awesome packages. In addition to those packages we offer private and semi-private lessons by appointment and run additional skills camps throughout the week. You can sign up on our home page for any of our three packages. You can sign up here <a className="text-blue-500 hover:underline" href="https://mobileapp.courtreserve.com/Online/Portal/Index/8043" target="_blank"> https://mobileapp.courtreserve.com/Online/Portal/Index/8043 </a> for private and semi-private lessons.
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
        - Our personal friends and the #1 real estate agency in Los Barriles are Carlene and David Lokey with Homes and Land of Baja. You can get in touch with them <a className="text-blue-500 hover:underline" href="https://www.homesandlandofbaja.com/">https://www.homesandlandofbaja.com/</a>
      </p>
    ) },
    { title: "Do you allow pets?", content: (
      <p>
        - We love pets at Tres Palapas, however we need to ensure that they do not disrupt other people&apos;s vacations. Well behaved pets are welcome as long as they are on a leash at all times.
      </p>
    ) },
    { title: "Are children allowed?", content: (
      <p>- Yes, children are welcome to come play pickleball at Tres Palapas. Children under the age of 14 must be accompanied by a parent at all times. Juniors aged 14-18 that respect the Code of Conduct may play at Tres without a parent. Baja Kids is a great local service that offers baby-sitting and activities for young children.</p>
    ) },
    { title: "Can I bring a group for a private event at Tres Palapas?", content: 
      (<p>- Yes, we host weddings, family reunions, friends&apos; trips, and other types of private events. Email info@trespalapasbaja.com to inquire about reserving for your private party.</p>)
    },
    { title: "Do you have any job opportunities?", content: (
      <p>
        - Please send your interest and queries to <a href="mailto:info@trespalapasbaja.com">info@trespalapasbaja.com</a>
      </p>
    ) },
  ];
  