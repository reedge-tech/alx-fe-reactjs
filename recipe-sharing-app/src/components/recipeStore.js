import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // required for checker
  setRecipes: (recipes) => set({ recipes }),

  // search term
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // original add/update/delete
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
}));
