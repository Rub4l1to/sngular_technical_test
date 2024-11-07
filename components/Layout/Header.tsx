'use client';

import React from 'react';

//* Icons
import { LuPackagePlus } from 'react-icons/lu';

//* Store
import useStore from '@/store';

const Header = () => {
  const openAccessModal = useStore((state) => state.openAccessModal);

  return (
    <>
      <header className="flex items-center justify-end w-full py-6 px-10 fixed top-0 z-10">
        <button
          onClick={openAccessModal}
          className="
        rounded-md bg-slate-500 text-white py-2 px-4 font-regular text-sm 
        flex items-center justify-center hover:bg-slate-600 transition duration-300 ease-in-out"
        >
          <LuPackagePlus className="inline-block" />
          <span className="ml-2">Request</span>
        </button>
      </header>
    </>
  );
};

export default Header;
