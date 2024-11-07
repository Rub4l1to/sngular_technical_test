import { StateCreator } from 'zustand';

interface Item {
  title: string;
  description: string;
  date: string;
}

interface LibraryState {
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
  ],
  trendingItems: [
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
  ],
  kpiItems: [
    {
      title: 'KPI name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'KPI name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'KPI name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'KPI name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
  ],
  layoutItems: [
    {
      title: 'Layout name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Layout name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Layout name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Layout name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
  ],
  storyboardItems: [
    {
      title: 'Storyboard name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Storyboard name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Storyboard name',
      description: 'Short description of the item goes nicely here.',
      date: '06/27/2024',
    },
    {
      title: 'Storyboard name',
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
