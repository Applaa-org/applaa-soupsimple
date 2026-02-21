import { useState } from 'react';
import { recipes } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';
import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Recipes() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Vegetarian', 'Meat', 'Creamy', 'Clear'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fffcf5]">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Our Simple Soups</h1>
          <p className="text-amber-800/70">
            Browse our collection of easy, one-pot recipes designed for beginners. 
            Minimal ingredients, maximum comfort.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 w-5 h-5" />
            <Input 
              placeholder="Search recipes..." 
              className="pl-10 bg-white border-orange-100 focus:ring-orange-500 rounded-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            <Filter className="text-amber-400 w-5 h-5 mr-2 hidden md:block" />
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-6",
                  activeCategory === cat 
                    ? "bg-orange-600 hover:bg-orange-700 text-white" 
                    : "border-orange-100 text-amber-900 hover:bg-orange-50"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-amber-800/50 text-lg">No soups found matching your criteria. Try another search!</p>
          </div>
        )}
      </main>

      <footer className="bg-amber-50/50 py-12 mt-20 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-900/40 text-sm mb-4 italic">
            Disclaimer: These recipes are for cooking guidance only. Always follow food safety standards.
          </p>
          <MadeWithApplaa />
        </div>
      </footer>
    </div>
  );
}

import { cn } from '@/lib/utils';