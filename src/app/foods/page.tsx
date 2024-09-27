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
    <div className="fixed inset-0 overflow-hidden">
        <Image
        className="opacity-10"
        src="/pickle-ss-05.png"
        alt="Pickleball"
        width={1600}
        height={1200}
        style={{ zIndex: -1 }}
        />
    </div>
        {/* <Image
            className="inset-0 opacity-10 z-0"
            src="/pickle-ss-05.png"
            alt="Pickleball"
            objectFit="cover"
            layout="fill"
        /> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 pt-32">
          <div className="col-auto md:col-span-2 flex justify-center">
            <div className="z-10">
                <div data-aos="fade-right" data-aos-duration="2000" className="md:mb-2 relative inline-block">
                    <p className="relative text-white text-lg sm:text-3xl lg:text-4xl font-extrabold inline z-10">
                    COME FOR THE PICKLEBALL
                    </p>
                    <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
            </div>
          </div>
          <div className="col-auto md:col-span-2 flex justify-center">
            <div className="relative z-10">
                <div data-aos="fade-right" data-aos-duration="2000"  className="relative inline-block">
                    <p className="relative text-white text-lg sm:text-3xl lg:text-4xl font-extrabold inline z-10">
                    STAY FOR THE TACOS
                    </p>
                    <div className="z-0 absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
                </div>
            </div>
          </div>
          <div className="relative m-10 mt-12">
              <div className="z-10  mx-4 sm:mx-16 md:mx-1 text-base lg:text-xl text-white">
              
              Exceptional dining is an integral part of any memorable pickleball 
              and travel experience.  We are excited to present our newly curated 
              <span className="font-bold"> Culinary Market<span className="align-super text-xs">TM</span></span>. This concept brings the best local flavors to your 
              plate without leaving the resort and features a daily rotation of 
              signature dishes from the top East Cape restaurants and chefs. Our 
              <span className="font-bold"> Culinary Market<span className="align-super text-xs">TM</span></span> offers the excitement of exploring local cuisine 
              without the need for reservations, restaurant research, or city 
              navigation. We continue to complement this new experience with our 
              in-house menu specializing in local fair  and favorites. All the best 
              food is brought to you while you play.
              </div>
          </div>
          <div className="relative m-10 mt-12  border border-2 border-white">
          <div className="h-[40rem] md:h-auto">
                <Image
                    src="/taco.jpg"
                    alt="Pickleball"
                    objectFit="cover"
                    layout="fill"
                    objectPosition="center 95%"
                    className="opacity-90"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="text-center">
                    <p className="relative text-white text-3xl sm:text-3xl lg:text-4x font-extrabold inline z-10">
                        (Culinary Market<span className="text-sm align-super" style={{ verticalAlign: 'top', lineHeight: '1' }}>TM</span>)
                    </p>
                    <br />
                    <p className="relative text-white text-3xl sm:text-3xl lg:text-4x font-extrabold inline z-10">
                        coming soon...
                    </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-8">

  <div className="relative w-full h-96 border border-2 border-white">
      <Image
        src="/food01.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food02.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food03.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>

  <div className="relative w-full h-96 border border-2 border-white">
      <Image
        src="/food04.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food05.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food06.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
      <Image
        src="/food07.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food08.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food09.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
      <Image
        src="/food10.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food11.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food12.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
      <Image
        src="/food13.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food14.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food15.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
      <Image
        src="/food16.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food17.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="relative w-full h-96 border border-2 border-white">
    <Image
        src="/food18.jpg"
        alt="Pickleball"
        layout="fill"
        objectFit="cover"
        className="z-10 opacity-90"
      />
  </div>
  <div className="py-12 bottom-0 w-full col-auto md:col-span-3">
      <Footer />
  </div>
</div>

        </div>
        </>
    )
}