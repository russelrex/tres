import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="flex justify-center">
                <ul className="z-10 transition ease-in duration-300 flex list-none grid grid-cols-4">
                    <li className="flex justify-center">
                        <div className="border border-2 cursor-pointer rounded-full p-2 w-10 h-10 flex justify-center items-center">
                            <FaInstagram className="w-8 h-8 text-white transform transition-all hover:scale-125" />
                        </div>
                    </li>
                    <li className="flex justify-center">
                        <div className="border border-2 cursor-pointer rounded-full p-2 w-10 h-10 flex justify-center items-center">
                            <FaGooglePlusG className="w-8 h-8 text-white transform transition-all hover:scale-125" />
                        </div>
                    </li>
                    <li className="flex justify-center">
                        <div className="border border-2 cursor-pointer rounded-full p-2 w-10 h-10 flex justify-center items-center">
                            <FaFacebookF className="w-6 h-6 text-white transform transition-all hover:scale-125" />
                        </div>
                    </li>
                    <li className="flex justify-center">
                        <div className="flex items-center border border-2 cursor-pointer rounded-full p-2 w-auto h-auto">
                            <p className="text-white text-[10px] sm:text-sm transform transition-all hover:scale-110">
                            CONTACT US
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}