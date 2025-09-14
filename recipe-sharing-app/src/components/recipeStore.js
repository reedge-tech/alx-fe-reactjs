import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', // for searching recipes
  setSearchTerm: (term) => set({ searchTerm: term }), // update search term

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
