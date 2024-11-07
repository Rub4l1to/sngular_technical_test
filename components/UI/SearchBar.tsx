import type { FC, ChangeEvent } from 'react';

//* Icons
import { IoSearch } from 'react-icons/io5';

const SearchBar: FC = () => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Library</h1>
        <p className="text-gray-600 mt-2 font-regular">
          Browse for assets needed to report and present analysis.
        </p>
      </div>
      <div className="relative mt-6">
        <input
          type="text"
          value={''}
          onChange={handleInputChange}
          placeholder="Type to search..."
          className="w-full p-3 pl-12 text-gray-700 border border-gray-300 rounded-xl shadow-sm focus:outline-none"
        />
        <IoSearch
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl"
          size={20}
        />
      </div>
    </div>
  );
};

export default SearchBar;
