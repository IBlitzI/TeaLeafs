'use client';

import { useEffect, useState } from 'react';
import { useRecipeStore } from '@/lib/store';
import RecipeCard from '@/components/RecipeCard';
import Pagination from '@/components/Pagination';
import { mockRecipes } from '@/lib/mock-data';

const ITEMS_PER_PAGE = 10;

export default function RecipeList() {
  const { setRecipes, filteredRecipes, currentPage } = useRecipeStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setRecipes(mockRecipes);
  }, [setRecipes]);

  const recipes = filteredRecipes();
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRecipes = recipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="space-y-6">
        {paginatedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}