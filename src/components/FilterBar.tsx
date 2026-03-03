import { Search, Filter } from 'lucide-react';

interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

export const FilterBar = ({ search, setSearch, category, setCategory }: FilterBarProps) => {
  const categories = ['Todas', 'Electronics', 'Accessories', 'Furniture'];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Buscador */}
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      {/* Selector de Categoría */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Filter className="text-gray-400 w-5 h-5" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-48 p-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};