'use client';

import { NextPage } from 'next';
import { useMemo, useState } from 'react';

//* Components
import { SearchBar, Tabs, CardList, RequestAccessModal } from '@/components';

//* Store
import useStore from '@/store';

const Library: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const activeTab = useStore((state) => state.activeTab);
  const getItemsForActiveTab = useStore((state) => state.getItemsForActiveTab);

  const featuredItems = useStore((state) => state.featuredItems);
  const trendingItems = useStore((state) => state.trendingItems);

  const { title, description, items } = useMemo(
    () => getItemsForActiveTab(),
    [activeTab]
  );

  const handleSubmit = (values: { reason: string }) => {
    console.log('Access requested with reason:', values.reason);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Tabs />

      {activeTab === 'Featured' && (
        <>
          <div className="bg-gray-50 flex flex-col gap-2">
            <CardList
              title="Featured"
              description="Curated top picks from this week"
              items={featuredItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              typeCard="default"
            />
          </div>

          <div className="bg-gray-50 flex flex-col gap-2">
            <CardList
              title="Trending"
              description="Most popular by community"
              items={trendingItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              typeCard="primary"
            />
          </div>
        </>
      )}

      {activeTab !== 'Featured' && (
        <div className="bg-gray-50 min-h-screen flex flex-col gap-2">
          <CardList
            title={title}
            description={description}
            items={filteredItems}
          />
        </div>
      )}

      <RequestAccessModal onSubmit={handleSubmit} />
    </div>
  );
};

export default Library;
