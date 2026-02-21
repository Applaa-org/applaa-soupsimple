import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { recipes } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Soup, Flame, Sparkles, Clock } from 'lucide-react';

export default function Index() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fffcf5]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
              <Sparkles className="w-4 h-4" />
              <span>Simple. Cozy. One-Pot.</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-amber-900 mb-8 tracking-tight leading-tight">
              Soup making <br />
              <span className="text-orange-600">made simple.</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-800/70 mb-12 leading-relaxed max-w-2xl mx-auto">
              Delicious, beginner-friendly soup recipes with minimal ingredients and maximum comfort. 
              One pot, five steps, pure joy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/recipes">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-8 rounded-2xl text-xl font-bold shadow-xl shadow-orange-200 transition-all hover:scale-105">
                  Explore Recipes
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-orange-200 text-amber-900 px-10 py-8 rounded-2xl text-xl font-bold hover:bg-orange-50 transition-all">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Soup className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Few Ingredients</h3>
              <p className="text-amber-800/60">
                We focus on recipes that don't require a massive grocery list. Simple pantry staples.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Flame className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900">One-Pot Magic</h3>
              <p className="text-amber-800/60">
                Every recipe is designed to be made in a single pot. Less cleanup, more eating.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Max 5 Steps</h3>
              <p className="text-amber-800/60">
                Clear, concise instructions that never exceed five simple steps. Perfect for beginners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-24 bg-[#fffcf5]">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Featured Soups</h2>
              <p className="text-amber-800/60">Our most loved, comforting recipes for any day.</p>
            </div>
            <Link to="/recipes" className="hidden md:flex items-center text-orange-600 font-bold hover:underline">
              View all recipes <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/recipes">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full py-6 rounded-xl font-bold">
                View All Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-amber-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start cooking?</h2>
              <p className="text-amber-200/70 text-xl mb-12">
                Join thousands of home cooks who have discovered the joy of simple, one-pot soups.
              </p>
              <Link to="/recipes">
                <Button className="bg-white text-amber-900 hover:bg-orange-50 px-10 py-8 rounded-2xl text-xl font-bold transition-all hover:scale-105">
                  Get Started Now
                </Button>
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      <footer className="bg-amber-50/50 py-12 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-900/40 text-sm mb-4 italic">
            Disclaimer: Cooking guidance only. Always follow food safety standards.
          </p>
          <MadeWithApplaa />
        </div>
      </footer>
    </div>
  );
}