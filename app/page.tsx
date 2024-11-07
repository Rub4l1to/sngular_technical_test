'use client';
import { NextPage } from 'next';

//* Components
import { SearchBar } from '../components';

const Library: NextPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <SearchBar />
    </div>
  );
};

export default Library;
