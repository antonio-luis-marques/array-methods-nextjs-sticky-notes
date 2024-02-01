'use client'
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="h-screen space-y-10">
      <header className="p-2 border-b border-slate-400 flex justify-between">
        <div className="flex items-center">
          <div className="flex space-x-2 p-2 text-blue-600">
            <div className="">
              <FontAwesomeIcon icon={faStickyNote} size="2x" />
            </div>
            <p className=" font-bold">ByteSticky</p>
          </div>
          <div className="p-2">
            <nav>
              <ul className="flex md:space-x-4">
                <li className="flex items-center space-x-1">
                  <p>Target Audience</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li className="flex items-center space-x-1">
                  <p>Educaction</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li className="flex items-center space-x-1">
                  <p>About us</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="p-2"><button>Log in</button></div>
          <div className="p-2"><button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign Up</button></div>
        </div>
      </header>
      <div className="w-full flex justify-between items-center px-10 ">
        <div className="space-y-2 w-2/5">
          <h1 className="text-4xl font-bold text-blue-600">Digitize your activities</h1>
          <h1 className="text-4xl font-bold text-blue-600">Consult anywhere</h1>
          <p className="text-lg">
            Forget the old rules. Write down your activities and agendas here easily, safely and quickly.
            Don't worry about delays, because we will remind you
          </p>
          <div className="pt-4">
            <button className="bg-blue-500 py-2 px-4 focus:outline-none text-white rounded-lg font-medium">Get Start</button>
          </div>
        </div>
        <div className="md:w-1/3">
          <img src="ticket.png" />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-5 gap-4 p-2">
          <div className="col-span-2 md:col-span-1 flex flex-col shadow-2xl h-56">
            <hr className="h-6 bg-green-500 opacity-50" />
            <div className="bg-green-500 grow p-4 flex flex-col justify-between items-center">
              <h2 className="text-white text-lg font-bold ">How use ByteSticky</h2>
              <p className="text-white ">Creation Date: 01/02/2024</p>
              <p className="text-white ">Remind: Everday</p>
            </div>

          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col shadow-2xl h-56">
            <hr className="h-6 bg-pink-500 opacity-50" />
            <div className="bg-pink-500 grow p-4 flex flex-col justify-between items-center">
              <h2 className="text-white text-lg font-bold text-center">Advantages of using ByteSticky</h2>
              <p className="text-white ">Creation Date: 01/02/2024</p>
              <p className="text-white ">Remind: Everday</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col shadow-2xl h-56">
            <hr className="h-6 bg-yellow-500 opacity-50" />
            <div className="bg-yellow-500 grow p-4 flex flex-col justify-between items-center">
              <h2 className="text-white text-lg font-bold ">Sign Up</h2>
              <p className="text-white ">Creation date: 01/02/2024</p>
              <p className="text-white ">Remind: Everday</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col shadow-2xl h-56">
            <hr className="h-6 bg-blue-500 opacity-50" />
            <div className="bg-blue-500 grow p-4 flex flex-col justify-between items-center">
              <h2 className="text-white text-lg font-bold ">Log in</h2>
              <p className="text-white ">Creation date: 01/02/2024</p>
              <p className="text-white ">Remind: Everday</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col shadow-2xl h-56">
            <hr className="h-6 bg-pink-700 opacity-50" />
            <div className="bg-pink-700 grow p-4 flex flex-col justify-between items-center">
              <h2 className="text-white text-lg font-bold ">Notifications</h2>
              <p className="text-white ">Creation date: 01/02/2024</p>
              <p className="text-white  ">Remind: Everday</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}