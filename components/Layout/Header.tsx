import React from 'react';

//* Icons
import { LuPackagePlus } from 'react-icons/lu';

const Header = () => (
  <header className="flex items-center justify-end w-full py-6 px-10 fixed top-0 z-10">
    <button
      className="
      rounded-md bg-slate-500 text-white py-2 px-4 font-regular text-sm 
      flex items-center justify-center hover:bg-slate-600 transition duration-300 ease-in-out"
    >
      <LuPackagePlus className="inline-block" />
      <span className="ml-2">Request</span>
    </button>
  </header>
);

export default Header;
