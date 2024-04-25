import { carousel } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";

export function Componentt() {
  return (
    <div className="gap-4 flex flex-row">
      <div className="h-[30vh] w-[33%] bg-red-500 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover>
          <div className="p-3 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
        </Carousel>
      </div>
      <div className="h-[30vh] w-[33%] bg-red-500 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover>
          <div className="p-3 bg-gray-200 rounded-lg h-[35vh] w-full "></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
        </Carousel>
      </div>
      <div className="h-[30vh] w-[33%] bg-red-500 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover>
          <div className="p-3 bg-gray-200 rounded-lg h-[35vh] w-full "></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
          <div className="p-10 bg-gray-200 rounded-lg h-[35vh] w-full"></div>
        </Carousel>
      </div>
    </div>
  );
}
