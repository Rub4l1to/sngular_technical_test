'use client';
import { NextPage } from 'next';

//* Components
import { SearchBar, Tabs, CardList } from '@/components';
import { useState } from 'react';

const featuredItems = [
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
];

const trendingItems = [
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
  {
    title: 'Item name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
  },
];

const Library: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>('Featured');

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <SearchBar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className=" bg-gray-50 min-h-screen flex flex-col gap-2">
        <CardList
          title="Featured"
          description="Curated top picks from this week"
          items={featuredItems}
        />
        <CardList
          title="Trending"
          description="Most popular by community"
          items={trendingItems}
        />
      </div>
    </div>
  );
};

export default Library;
