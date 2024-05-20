import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const navLinks = [
    { title: "Why TutorHive?", path: "" },
    { title: "Become a Bee", path: "" },
    { title: "Lesson Plans", path: "" },
    { title: "Testimonials", path: "" },
    { title: "FAQ", path: "/faq" },
  ];

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <div className="flex items-center justify-between w-full h-14 sticky top-0 z-50 text-yellow-150 bg-blue-150 backdrop-filter backdrop-blur-lg">
      <div className='items-center justify-between w-full h-14 hidden md:flex'>
        
        <div className="flex items-center justify-center space-x-6 ml-4">
        <Link href = '/home' className='transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
            <Image src={Logo} alt="TutorHive Logo" width={128} height={32} />
        </Link>
        
          {navLinks.map((link) => (
            <Link key={link.title} href = {link.path} className="font-bold transition duration-300 ease-in-out hover:text-white">
              {link.title}
            </Link>
          ))}
        </div>
        <div className='mr-4 flex items-center justify-center space-x-3'>
            <button>  </button>
        </div>
      </div>

      <div className='flex items-center justify-between w-full h-14 md:hidden'>

        <Link href = '/home' className='pl-2'>
            <Image src={Logo} alt="TutorHive Logo" width={128} height={32} />
        </Link>
        {/* Mobile NavBar Icon */}
        <Hamburger rounded size={24} duration={0.4} distance='lg' hideOutline={false} onToggle={toggleMenu} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ duration: 0.4 }}
              className="z-20 pt-12 pb-28 absolute top-full right-0 h-screen w-screen bg-blue-150  bg-opacity-20 flex flex-col justify-between"
            >
              {/* Website Section Links */}
              <div className='flex flex-col space-y-6'>
                {navLinks.map((link) => (
                  <button key={link.title} className="">
                    {link.title}
                  </button>
                ))}
              </div>

              <div className='flex flex-col space-y-6'>
                  <button> </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence> 
      </div>
    </div>
  );
};
