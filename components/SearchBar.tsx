'use client';

import { useRecipeStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useRecipeStore();

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Tarif veya sağlık sorunu ara..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-4 py-2 w-full"
      />
    </div>
  );
}