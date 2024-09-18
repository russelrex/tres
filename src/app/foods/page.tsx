import Image from "next/image";
import Header from "../components/header/page";

export default function Packages() {
    return (
        <>
            <Header />
            <div className="py-16 px-4"
                style={{
                backgroundColor: 'rgb(99, 139, 99)'
                }}
            >
            <div
                className="h-auto lg:h-4/6 sm:h-5/6 absolute inset-0"
                style={{
                backgroundImage: 'url("/bg-03.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
            }} />
            <div className="text-center pt-16">
            <div data-aos="fade-left" data-aos-duration="2000" className="relative inline-block">
                <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                HOOKED ON PICKLEBALL
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="relative inline-block">
                <p className="relative text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold inline z-10">
                TACOS & SUNSHINE?
                </p>
                <div className="z-0 absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-12 lg:mx-48">
            <div className="z-10">
                <div className="text-base lg:text-2xl text-white mt-4 lg:mt-16">
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
                <div className="relative w-full h-96 border border-4 border-white-900">
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

        <div className="grid grid-cols-1 sm:grid-cols-2" style={{
                backgroundColor: 'rgb(99, 139, 99)'
                }}>
            <div className="relative">
            <Image
                className="absolute inset-0 opacity-20"
                src="/pickle-ss-05.png"
                alt="Pickleball"
                objectFit="cover"
                layout="fill"
            />
            <div className="relative inset-0 flex flex-col items-left text-left m-10 sm:m-10 lg:mt-40">
                <div>
                <div data-aos="fade-right" data-aos-duration="2000" className="relative inline-block">
                    <p className="relative text-white text-lg sm:text-3xl lg:text-4xl font-extrabold inline z-10">
                    COME FOR THE PICKLEBALL
                    </p>
                    <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                </div>
                <div>
                <div data-aos="fade-right" data-aos-duration="2000"  className="relative inline-block">
                    <p className="relative text-white text-lg sm:text-3xl lg:text-4xl font-extrabold inline z-10">
                    STAY FOR THE TACOS
                    </p>
                    <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
                </div>
                <div className="z-10 mt-4 text-base lg:text-2xl text-white">
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
        </>
    )
}