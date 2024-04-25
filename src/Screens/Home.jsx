import React from "react";
import { Carousel } from "flowbite-react";

function Home() {
  // Dummy data for job categories and listings
  const jobData = [
    {
      id: 1,
      category: "Frontend",
      listings: [
        {
          id: 1,
          location: "Mumbai",
          salary: "1.5 Lakh /year",
          experience: "2+ Year of experience, Tailwind and TreeJS",
        },
        {
          id: 2,
          location: "Delhi",
          salary: "1.8 Lakh /year",
          experience: "3+ Year of experience, React and Redux",
        },
        // Add more listings as needed
      ],
    },
    {
      id: 2,
      category: "Backend",
      listings: [
        {
          id: 1,
          location: "Bangalore",
          salary: "2 Lakh /year",
          experience: "4+ Year of experience, Node.js and MongoDB",
        },
        {
          id: 2,
          location: "Hyderabad",
          salary: "1.6 Lakh /year",
          experience: "2+ Year of experience, Express and SQL",
        },
        // Add more listings as needed
      ],
    },
    {
      id: 3,
      category: "MERN Stack",
      listings: [
        {
          id: 1,
          location: "Pune",
          salary: "1.7 Lakh /year",
          experience: "3+ Year of experience, MERN Stack",
        },
        {
          id: 2,
          location: "Chennai",
          salary: "1.9 Lakh /year",
          experience: "4+ Year of experience, Full Stack Development",
        },
        // Add more listings as needed
      ],
    },
    // Add more job categories as needed
  ];

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
                {jobData.map((category) => (
                  <div
                    key={category.id}
                    className="h-[30vh] w-[33%] sm:h-64 xl:h-80 2xl:h-96"
                  >
                    <Carousel pauseOnHover>
                      {category.listings.map((listing) => (
                        <div
                          key={listing.id}
                          className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"
                        >
                          <p className="text-2xl py-3">{listing.location}</p>
                          <hr className="bg-blue-500 h-[2px]" />
                          <p className="text-xl py-3">{listing.salary}</p>
                          <p className="text-lg">{listing.experience}</p>
                        </div>
                      ))}
                    </Carousel>
                    <h1 className="text-2xl text-blue-500 font-bold tracking-widest text-center">
                      {category.category}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
