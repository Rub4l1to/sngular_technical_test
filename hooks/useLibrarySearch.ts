import { useState, useMemo } from 'react';

//* Store
import useStore from '@/store';

const useLibrarySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const activeTab = useStore((state) => state.activeTab);
  const getItemsForActiveTab = useStore((state) => state.getItemsForActiveTab);

  const featuredItems = useStore((state) => state.featuredItems);
  const trendingItems = useStore((state) => state.trendingItems);

  const { title, description, items } = useMemo(
    () => getItemsForActiveTab(),
    [activeTab]
  );

  const filteredFeaturedItems = useMemo(() => {
    return featuredItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [featuredItems, searchQuery]);

  const filteredTrendingItems = useMemo(() => {
    return trendingItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [trendingItems, searchQuery]);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    activeTab,
    title,
    description,
    filteredFeaturedItems,
    filteredTrendingItems,
    filteredItems,
  };
};

export default useLibrarySearch;
