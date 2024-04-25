import React from "react";
import { Button, Card } from "flowbite-react";
import { IoLocationOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";

function Jobs() {
  // Dummy data for cards
  const dummyData = [
    {
      id: 1,
      title: "Reactjs Developer",
      location: "mumbai",
      salary: "10K Month",
      company: "NerdTech",
    },
    {
      id: 2,
      title: "Django Developer",
      location: "mumbai",
      salary: "10K Month",
      company: "TCS",
    },
    {
      id: 3,
      title: "Java Backend Developer",
      location: "mumbai",
      salary: "10K Month",
      company: "Google",
    },
  ];

  return (
    <div className="p-20 px-10 bg-white h-full w-full">
      <div className="grid grid-cols-3 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Map over the dummyData array to dynamically render cards */}
        {dummyData.map((item) => (
          <div key={item.id} className="w-full h-72">
            {/* Set a fixed height and width for the Card */}
            <Card className="max-w-full h-full align-top justify-start items-start content-start">
              <div className="">
                <h5 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </div>
              <div className="flex flex-row gap-1 ">
                <LuBuilding2 className="text-lg mt-[2px] mr-1" />
                <p className="font-xl text-gray-700 dark:text-gray-400">
                  {item.company}
                </p>
              </div>
              <div className="flex flex-row gap-1 ">
                <IoLocationOutline className="text-lg mt-[2px] mr-1" />
                <p className="font-xl text-gray-700 dark:text-gray-400">
                  {item.location}
                </p>
              </div>
              <div className="flex flex-row gap-1 mt-[2px] mr-1">
                <MdAttachMoney className="text-lg mt-[2px] mr-1" />
                <p className="font-xl text-gray-700 dark:text-gray-400">
                  {item.salary}
                </p>
              </div>

              <div className="flex flex-row justify-start">
                <Button className="bg-blue-500">
                  Apply
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
