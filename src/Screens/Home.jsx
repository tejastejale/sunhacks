import React from "react";
import { Carousel } from "flowbite-react";

function Home() {
  return (
    <div>
      <div id="hero" className="font-poppins">
        <div className="flex flex-col w-screen h-screen bg-gray-50 pt-32 text-center align-top justify-top">
          <div>
            <h1 className="text-3xl">Find Best Jobs as per your Resume!!!</h1>
            <p className="text-xl p-3">More than 10K+ Jobs to Explore</p>
          </div>
          <div className="pt-10">
            <h1 className="text-3xl">🔥 Latest Jobs Postings 🔥</h1>
            <div>
              <div className="gap-4 flex flex-row px-4 -mt-10 text-left">
                <div className="h-[30vh] w-[33%] sm:h-64 xl:h-80 2xl:h-96">
                  <Carousel pauseOnHover>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                  </Carousel>
                  <h1 className="text-2xl text-blue-500 font-bold tracking-widest text-center">
                    Frontend
                  </h1>
                </div>
                <div className="h-[30vh] w-[33%] sm:h-64 xl:h-80 2xl:h-96">
                  <Carousel pauseOnHover>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                  </Carousel>
                  <h1 className="text-2xl text-blue-500 font-bold tracking-widest text-center">
                    Backend
                  </h1>
                </div>
                <div className="h-[30vh] w-[33%] sm:h-64 xl:h-80 2xl:h-96">
                  <Carousel pauseOnHover>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                    <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full">
                      <p className="text-2xl py-3">Mumbai</p>
                      <hr className="bg-blue-500 h-[2px]" />
                      <p className="text-xl py-3">1.5 Lakh /year</p>

                      <p className="text-lg">
                        2+ Year of experience, Tailwind and TreeJS
                      </p>
                    </div>
                  </Carousel>
                  <h1 className="text-2xl text-blue-500 font-bold tracking-widest text-center">
                    MERN Stack
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
