'use client';
import { NextPage } from 'next';
import { useMemo } from 'react';

//* Components
import { SearchBar, Tabs, CardList } from '@/components';

//* Store
import useStore from '@/store';

const Library: NextPage = () => {
  const activeTab = useStore((state) => state.activeTab);
  const getItemsForActiveTab = useStore((state) => state.getItemsForActiveTab);

  const featuredItems = useStore((state) => state.featuredItems);
  const trendingItems = useStore((state) => state.trendingItems);

  const { title, description, items } = useMemo(
    () => getItemsForActiveTab(),
    [activeTab]
  );

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <SearchBar />
      <Tabs />

      {activeTab === 'Featured' && (
        <>
          <div className="bg-gray-50 flex flex-col gap-2">
            <CardList
              title="Featured"
              description="Curated top picks from this week"
              items={featuredItems}
              typeCard="default"
            />
          </div>

          <div className="bg-gray-50 flex flex-col gap-2">
            <CardList
              title="Trending"
              description="Most popular by community"
              items={trendingItems}
              typeCard="primary"
            />
          </div>
        </>
      )}

      {activeTab !== 'Featured' && (
        <div className="bg-gray-50 min-h-screen flex flex-col gap-2">
          <CardList title={title} description={description} items={items} />
        </div>
      )}
    </div>
  );
};

export default Library;
