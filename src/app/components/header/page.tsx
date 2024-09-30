'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/legacy/image"

const headerNames = [
	{ name: 'PACKAGES', url: 'packages' },
	{ name: 'TOURNAMENTS', url: 'tournaments' },
	{ name: 'EAT & DRINK', url: 'foods' },
	// { name: 'RESERVE COURTS', url: 'https://mobileapp.courtreserve.com/Online/Portal/Index/8043', target: '_blank' },
  ];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpenMed, setIsMenuOpenMed] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const toggleMenuMed = () => {
      setIsMenuOpenMed(!isMenuOpenMed);
    };
    
    
    const handleClick = () => {
        router.push('/');
      };
      
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header>
        <div className={`fixed inset-x-0 top-0 z-50 duration-200 ${
            isScrolled ? 'backdrop-blur-lg' : ''
            }`
        }>
          <div className="container flex items-center justify-between p-0.5 mx-auto ms-8">
            <div>
                <Image
                    onClick={handleClick}
                    src="/icon-header.png"
                    alt="Coconut Tree Logo"
                    objectFit="contain"
                    width={150}
                    height={100}
                    className="cursor-pointer filter brightness-0 invert"
                />
            </div>
  
            <div className="md:hidden me-16">
              <button
                onClick={toggleMenu}
                className="text-zinc-900 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
  
            <div className="hidden md:flex space-between gap-8">
              {headerNames.map((headerName) => (
                  <Link
                    href={`/${headerName.url}`}
                    key={headerName.name}
                    className="p-2 px-5 md:px-2 lg:px-5 border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                  >
                    <p className="font-semibold lg:text-base md:text-xs">{headerName.name}</p>
                  </Link>
              ))}
                    <Link
                    href='https://mobileapp.courtreserve.com/Online/Calendar/Events/8043/Month'
                    target="_blank"
                    className="p-2 px-5 md:px-1 lg:px-5 border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                  >
                    <p className="font-semibold lg:text-base md:text-xs">RESERVE COURTS</p>
                  </Link>
                <div className="xs:hidden">
                <button
                  onClick={toggleMenuMed}
                  className="text-zinc-900 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>

              <div
  className={`fixed top-0 right-0 backdrop-blur-lg rounded-s-xl z-60 h-80 transition-transform transform ${isMenuOpenMed ? 'translate-x-0' : 'translate-x-full'} xs:hidden`}
  style={{
    width: '20%',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'rgba(99, 139, 99, 0.7)',
  }}
>
                <div className="flex flex-col items-center mt-16 space-y-4">
                  <button
                    onClick={toggleMenuMed}
                    className="absolute top-4 right-4 p-2 text-white hover:text-slate-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <Link
                    href="https://mobileapp.courtreserve.com/Online/Calendar/Events/8043/Month"
                    target="_blank"
                    className="w-5/6 text-center p-2 px-5 md:px-2 lg:px-5 border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                  >
                    <p className="font-semibold md:text-sm lg:text-base">SCHEDULE</p>
                  </Link>
                  <Link
                    href='https://secure.webrez.com/Bookings105/activity-edit.html?hotel_id=3731&table=hotels&listing_id=3731&mode=command&command=bookingrequestform_v2'
                    className="w-5/6 text-center p-2 px-5 md:px-2 lg:px-5 border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                  >
                    <p className="font-semibold">LODGING</p>
                  </Link>
                  <Link
                    href="/contact-us"
                    className="w-5/6 text-center p-2 px-5 md:px-2 lg:px-5 border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                  >
                    <p className="font-semibold md:text-sm lg:text-base">CONTACT US</p>
                  </Link>
                  <Link
                    href="/faq"
                    className="w-5/6 text-center p-2 px-5 md:px-2 lg:px-5 border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                  >
                    <p className="font-semibold md:text-sm lg:text-base">FAQ</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{
              // transition: 'transform 0.3s ease-in-out',
              backgroundColor: 'rgba(99, 139, 99, 0.7)',
            }}
          >
            <div className="flex flex-col items-center p-4">
                <Link
                  href='/packages'
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">PACKAGES</p>
                </Link>
                <Link
                  href='/tournaments'
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">TOURNAMENTS</p>
                </Link>
                <Link
                  href='/foods'
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">EAT & DRINK</p>
                </Link>
                <Link
                  href='https://mobileapp.courtreserve.com/Online/Calendar/Events/8043/Month'
                  target="_blank"
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">RESERVE COURTS</p>
                </Link>
                <Link
                  href='https://mobileapp.courtreserve.com/Online/Calendar/Events/8043/Month'
                  target="_blank"
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">SCHEDULE</p>
                </Link>
                <Link
                  href='https://secure.webrez.com/Bookings105/activity-edit.html?hotel_id=3731&table=hotels&listing_id=3731&mode=command&command=bookingrequestform_v2'
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">LODGING</p>
                </Link>
                <Link
                  href='/contact-us'
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">CONTACT US</p>
                </Link>
                <Link
                  href='/faq'
                  className="p-2 px-5 my-2 w-full text-center border border-2 border-white duration-200 hover:border-slate-400 text-white hover:text-slate-400"
                >
                  <p className="font-semibold">FAQ</p>
                </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }