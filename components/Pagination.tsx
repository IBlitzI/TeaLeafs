'use client';

import { useRecipeStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 10;

export default function Pagination() {
  const { filteredRecipes, currentPage, setCurrentPage } = useRecipeStore();
  const recipes = filteredRecipes();
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Button
        variant="outline"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Önceki
      </Button>
      <span className="text-sm">
        Sayfa {currentPage} / {totalPages}
      </span>
      <Button
        variant="outline"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Sonraki
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}