import React from "react";
import Image from "next/image";
import Logo from '../assets/logo.png';

export default function Footer() {
    return (
        <div className="bg-blue-150 text-yellow-150 flex flex-row space-x-64 w-full h-64 px-32 py-8">
            <div>
                <Image src={Logo} alt="TutorHive Logo" width={256} height={96} />
            </div>
            
            {/* contacts */}
            <div className="flex flex-col space-y-2 pt-3">
                <h1 className="text-2xl"> CONTACT </h1>
                <p> Email: </p>
                <p> Phone: </p>

            </div>

            {/* about */}
            <div className="flex flex-col space-y-2 pt-3">
                <h1 className="text-2xl"> ABOUT </h1>
                <p> Privacy Policy </p>
                <p> Terms of Service </p>

            </div>

            {/* socials */}
            <div className="flex flex-col space-y-2 pt-3">
                <h1 className="text-2xl"> SOCIALS </h1>
                <p> Instagram: </p>
                <p> TikTok </p>

            </div>
        </div>
    );
}