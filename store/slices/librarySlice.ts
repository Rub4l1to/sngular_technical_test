import { StateCreator } from 'zustand';

interface Item {
  title: string;
  description: string;
  date: string;
}

export interface LibraryState {
  activeTab: string;
  featuredItems: Item[];
  trendingItems: Item[];
  kpiItems: Item[];
  layoutItems: Item[];
  storyboardItems: Item[];
  setActiveTab: (tab: string) => void;
  getItemsForActiveTab: () => {
    title: string;
    description: string;
    items: Item[];
  };
}

export const createLibrarySlice: StateCreator<LibraryState> = (set, get) => ({
  activeTab: 'Featured',
  featuredItems: [
    {
      title: 'Featured 1',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Featured 2',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Featured 3',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Featured 4',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
  ],
  trendingItems: [
    {
      title: 'Trending 1',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Trending 2',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Trending 3',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Trending 4',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
  ],
  kpiItems: [
    {
      title: 'KPI 1',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'KPI 2',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'KPI 3',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'KPI 4',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
  ],
  layoutItems: [
    {
      title: 'Layout 1',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Layout 2',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Layout 3',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Layout 4',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
  ],
  storyboardItems: [
    {
      title: 'Storyboard 1',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Storyboard 2',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Storyboard 3',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Storyboard 4',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
  ],
  setActiveTab: (tab) => set({ activeTab: tab }),
  getItemsForActiveTab: () => {
    const { activeTab, kpiItems, layoutItems, storyboardItems } = get();
    switch (activeTab) {
      case 'KPI':
        return {
          title: 'KPIs',
          description: 'Key performance indicators',
          items: kpiItems,
        };
      case 'Layouts':
        return {
          title: 'Layouts',
          description: 'Popular layouts',
          items: layoutItems,
        };
      case 'Storyboards':
        return {
          title: 'Storyboards',
          description: 'Creative storyboards',
          items: storyboardItems,
        };
      default:
        return { title: '', description: '', items: [] };
    }
  },
});
