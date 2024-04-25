import { Navbar } from "flowbite-react";
import logo from "../Images/logo.png";
export function Component() {
  return (
    <div className="px-4 bg-gray-100 fixed w-full">
      <Navbar fluid className="p-4 bg-gray-100">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Let's Resumee
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="self-center justify-center align-middle flex items-center h-full text-center ">
          <Navbar.Link
            href="/"
            className="text-black mt-2 hover:text-blue-500 font-semibold flex items-center align-middle"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/jobs"
            className="text-black mt-2 hover:text-blue-500 font-semibold"
          >
            Jobs
          </Navbar.Link>
          {/* <Navbar.Link
            href="#"
            className="text-black mt-2 hover:text-blue-500 font-semibold"
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-black mt-2 hover:text-blue-500 font-semibold"
          >
            Pricing
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-black mt-2 hover:text-blue-500 font-semibold"
          >
            Contact
          </Navbar.Link> */}
          <div className="flex flex-row gap-4">
            <button className="p-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">
              Login
            </button>
            <button className="p-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">
              Admin Login
            </button>
            <button className="p-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">
              Candidate Login
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
