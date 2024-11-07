import { FC } from 'react';
import useStore from '@/store';

interface DataVizModalProps {
  item: {
    title: string;
    description: string;
    date: string;
  };
}

const DataVizModal: FC<DataVizModalProps> = ({ item }) => {
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const favoriteItems = useStore((state) => state.favoriteItems);

  const isFavorite = favoriteItems.some((fav) => fav.title === item.title);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
      <p className="text-sm mb-4">{item.description}</p>
      <p className="text-xs text-gray-500 mb-4">{item.date}</p>

      <button
        onClick={() => toggleFavorite(item)}
        className={`mt-6 py-2 px-4 rounded-md ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default DataVizModal;
