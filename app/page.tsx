'use client';
import { NextPage } from 'next';

//* Components
import { SearchBar, Tabs } from '../components';
import { useState } from 'react';

const Library: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>('');

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <SearchBar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Library;
