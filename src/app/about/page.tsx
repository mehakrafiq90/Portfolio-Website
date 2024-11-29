import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const About = () => {
  return (
    <div>
      <h2 className="mt-24 text-center text-4xl font-bold underline text-cyan-600">
        About Me
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Profile Picture"
            src="/profile picture 00.jpg"
            width={400}
            height={300}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600 hover:text-white">
              I'M a frontend developer <br />Turning Ideas into Stunning Web Designs
            </h1>
            <p className="mb-8 leading-relaxed text-cyan-200">
            As a passionate developer, I specialize in creating innovative, efficient, and scalable solutions for the web. With a focus on clean code and modern technologies, I thrive on turning ideas into functional, user-friendly applications that make an impact.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[30px] text-blue-400 py-2 px-6"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[30px] text-white py-2 px-6"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[30px] text-pink-400 py-2 px-6"
              >
                <GrInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
};

export const Skills = () => {
  const skills = [
    { name: "HTML", level: "45%" },
    { name: "CSS", level: "35%" },
    { name: "JavaScript", level: "45%" },
    { name: "TypeScript", level: "45%" },
    { name: "React", level: "30%" },
    { name: "Next.js", level: "35%" },
  ];

  return (
    <div className="mt-16">
      <h2 className="mb-16 text-center text-4xl font-bold underline text-cyan-600">
        My Skills
      </h2>
      <div className="ml-16">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <p className="text-2xl text-white">{skill.name}</p>
            <div
              className="h-4 bg-green-600 rounded-2xl"
              style={{ width: skill.level }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
