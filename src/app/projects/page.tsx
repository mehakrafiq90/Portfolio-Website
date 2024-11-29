import React from 'react';

const Projects = () => {
  return (
    <div>
       <h2 className="mt-24 text-center text-4xl font-bold underline text-cyan-600">
        My Projects
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-10 py-24 max-w-7xl hover:border-yellow-500 hover:border-2" >
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-600">
                Here are some of my Projects
              </h1>
            </div>
            <div className="lg:pl-6 lg:w-2/3 mx-auto">
              <p className="text-cyan-200 leading-relaxed text-base">
              I am passionate about building engaging and user-friendly web applications. My projects reflect my skills in modern web development technologies and my commitment to delivering quality, responsive, and scalable solutions. Check out some of my featured projects below.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Project 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-100 md:h-84 w-full object-cover object-center hover:border-yellow-500 hover:border-2 "
                  src="/project-1.jpg"
                  alt="Currency Converter"
                  width={300}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-cyan-400 mb-1">
                    Currency Converter Project
                  </h2>
                  <p className="leading-relaxed mb-3 text-cyan-200 ">
                    A simple HTML and TypeScript powered tool for converting currencies with real-time rates.
                  </p>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                  className="lg:h-100 md:h-84 w-full object-cover object-center hover:border-yellow-500 hover:border-2"
                  src="/project-2.jpg"
                  alt="gallery"
                  width={300}
                  height={400}
                />
                
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-cyan-400 mb-1">
                  "Static interactive Resume"
                  </h2>
                  <p className=" text-cyan-200 leading-relaxed mb-3 ">
                  "A TypeScript-based interactive resume build with HTML and CSS,allowing users to showcase their skills dynamically.",
                  </p>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-74 md:h-84 w-full object-cover object-center hover:border-yellow-500 hover:border-2"
                  src="/project-3.png"
                  alt="Portfolio Website"
                  width={300}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-bold title-font font-medium text-cyan-400 mb-1">
                    "Portfolio Website"
                  </h2>
                  <p className=" text-cyan-200 leading-relaxed mb-3">
                  "A sleek and responsive portfolio website showcasing my skills, projects, and achievements. Built with React and Tailwind CSS, it emphasizes minimalistic design and smooth user interactions for an engaging browsing experience."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

