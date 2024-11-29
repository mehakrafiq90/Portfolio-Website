import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1">
      {/* Profile Picture */}
      <div className="ml-[15%] mt-16">
        <Image
          src="/profile picture 00.jpg"
          alt="My Profile Picture"
          width={300}
          height={400}
          className="rounded-full ml-[40%]"
        />
      </div>
      <div>
        <h2 className="text-6xl text-left ml-[20%] font-bold text-white mt-16">
          Hello <br /> I am <br /> Mehak Rafiq
        </h2>
        <div className="ml-[20%] flex gap-14 mt-12">
          <Link href="/about">
            <button className="text-xl p-3 border-2 border-cyan-600 rounded-2xl">
              About
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-xl p-3 border-2 border-cyan-600 rounded-2xl">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
