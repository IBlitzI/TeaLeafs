import { create } from 'zustand';
import { Recipe } from '@/types/recipe';

interface RecipeStore {
  recipes: Recipe[];
  searchQuery: string;
  currentPage: number;
  setRecipes: (recipes: Recipe[]) => void;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  filteredRecipes: () => Recipe[];
}

export const useRecipeStore = create<RecipeStore>((set, get) => ({
  recipes: [],
  searchQuery: '',
  currentPage: 1,
  setRecipes: (recipes) => set({ recipes }),
  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
  filteredRecipes: () => {
    const { recipes, searchQuery } = get();
    if (!searchQuery) return recipes;
    
    const query = searchQuery.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.ailments.some((ailment) => ailment.toLowerCase().includes(query)) ||
        recipe.description.toLowerCase().includes(query)
    );
  },
}));