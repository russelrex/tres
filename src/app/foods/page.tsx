import Image from "next/legacy/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

export default function Packages() {
    return (
        <>
        <Header />
        <div className="relative"
          style={{
          backgroundColor: 'rgb(99, 139, 99)'
        }}>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <div className="relative">
                <Image
                    className="inset-0 opacity-10"
                    src="/pickle-ss-05.png"
                    alt="Pickleball"
                    objectFit="cover"
                    layout="fill"
                />
                <div className="relative inset-0 flex flex-col items-left text-left m-10 mt-32 sm:m-10 sm:mt-32 lg:mt-40">
                    <div className="fixed z-10">
                        <div data-aos="fade-right" data-aos-duration="2000" className="md:mb-2 relative inline-block">
                            <p className="relative text-white text-2xl sm:text-3xl lg:text-[44px] font-extrabold inline z-10">
                            COME FOR THE PICKLEBALL
                            </p>
                            <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                        </div>
                    </div>
                    <div className="fixed mt-16  z-10">
                        <div data-aos="fade-right" data-aos-duration="2000"  className="relative inline-block">
                            <p className="relative text-white text-2xl sm:text-3xl lg:text-[47px] font-extrabold inline z-10">
                            STAY FOR THE TACOS
                            </p>
                            <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                        </div>
                    </div>
                    <br />
                    <div className="z-10 mt-24 mx-4 sm:mx-16 md:mx-1 text-base lg:text-xl text-white">
                    Exceptional dining is an integral part of a memorable
                    pickleball experience, which is why we created the
                    <span className="font-bold"> Culinary Market<span className="align-super text-xs">TM</span></span>. This concept brings the best local
                    flavors to your plate without leaving the resort, featuring a daily rotation of signature dishes from top East Cape
                    restaurants. Meals are prepared partially in the restaurants&apos; kitchens
                    and finished on-site for fresh, hot dining. Our
                    <span className="font-bold"> Culinary Market<span className="align-super text-xs">TM</span></span> offers the excitement of exploring local
                    cuisine without the need for reservations or restaurant
                    research, complemented by our in-house menu for familiar
                    options. Enjoy a curated foodie tour without leaving the
                    resort - no internet searches or city navigation needed!
                    </div>
                </div>
            </div>
            <div className="relative h-[40rem] md:h-auto">
                <Image
                    src="/taco.jpg"
                    alt="Pickleball"
                    objectFit="cover"
                    layout="fill"
                    className="opacity-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="text-center">
                    <p className="relative text-white text-3xl sm:text-3xl lg:text-4x font-extrabold inline z-10">
                        (culinary market<span className="text-sm align-super" style={{ verticalAlign: 'top', lineHeight: '1' }}>TM</span>)
                    </p>
                    <br />
                    <p className="relative text-white text-3xl sm:text-3xl lg:text-4x font-extrabold inline z-10">
                        coming soon...
                    </p>
                    </div>
                </div>
            </div>
            
            <div className="absolute pb-24 bottom-0 w-full col-span-2">
                <Footer />
            </div>
        </div>

        </div>
        </>
    )
}