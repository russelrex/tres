'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image'

const headerNames = [
	{ name: 'PACKAGES' },
	{ name: 'TOURNAMENTS' },
	{ name: 'EAT & DRINK' },
	{ name: 'RESERVE COURTS' },
  ];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    
    const handleClick = () => {
        router.push('/');
      };

    return (
        <header>
        <div className="fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b">
          <div className="container flex items-center justify-between p-6 mx-auto">
            <div>
                <Image
                    onClick={handleClick}
                    src="/icon-header.png"
                    alt="Coconut Tree Logo"
                    objectFit="contain"
                    width={100}
                    height={100}
                    className="cursor-pointer"
                />
            </div>
  
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-zinc-900 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  href="#"
                  key={headerName.name}
                  className="p-2 px-5 border border-2 border-zinc-900 duration-200 hover:border-zinc-500 hover:text-zinc-500"
                >
                  <p className="font-semibold">{headerName.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div
          className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center p-4">
            {headerNames.map((headerName) => (
              <Link
                href="#"
                key={headerName.name}
                className="p-2 px-5 my-2 w-full text-center border border-2 border-zinc-900 duration-200 hover:border-zinc-500 hover:text-zinc-500"
              >
                <p className="font-semibold">{headerName.name}</p>
              </Link>
            ))}
          </div>
        </div>
          {/* {isMenuOpen && (
            <div className="md:hidden bg-white transition ease-in-out delay-150">
              <div className="flex flex-col items-center p-4">
                {headerNames.map((headerName) => (
                  <Link
                    href="#"
                    key={headerName.name}
                    className="p-2 px-5 my-2 w-full text-center border border-2 border-zinc-900 duration-200 hover:border-zinc-500 hover:text-zinc-500"
                  >
                    <p className="font-semibold">{headerName.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </header>
    );
  }
  