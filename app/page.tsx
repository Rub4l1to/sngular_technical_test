'use client';

import { NextPage } from 'next';

//* Components
import {
  SearchBar,
  Tabs,
  RequestAccessModal,
  SearchResultSection,
} from '@/components';

//* Hooks
import useLibrarySearch from '@/hooks/useLibrarySearch';

const Library: NextPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    activeTab,
    title,
    description,
    filteredFeaturedItems,
    filteredTrendingItems,
    filteredItems,
  } = useLibrarySearch();

  const handleSubmit = (values: { reason: string }) => {
    console.log('Access requested with reason:', values.reason);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Tabs />

      {activeTab === 'Featured' ? (
        <>
          <SearchResultSection
            title="Featured"
            description="Curated top picks from this week"
            items={filteredFeaturedItems}
            typeCard="default"
            searchQuery={searchQuery}
          />
          <SearchResultSection
            title="Trending"
            description="Most popular by community"
            items={filteredTrendingItems}
            typeCard="primary"
            searchQuery={searchQuery}
          />
        </>
      ) : (
        <SearchResultSection
          title={title}
          description={description}
          items={filteredItems}
          searchQuery={searchQuery}
        />
      )}

      <RequestAccessModal onSubmit={handleSubmit} />
    </div>
  );
};

export default Library;
