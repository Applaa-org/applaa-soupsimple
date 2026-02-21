import { useParams, Link } from '@tanstack/react-router';
import { recipes } from '@/data/recipes';
import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Clock, Users, ArrowLeft, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function RecipeDetail() {
  const { slug } = useParams({ from: '/recipes/$slug' });
  const recipe = recipes.find(r => r.slug === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffcf5]">
        <h1 className="text-2xl font-bold text-amber-900 mb-4">Recipe not found</h1>
        <Link to="/recipes">
          <Button className="bg-orange-600 hover:bg-orange-700">Back to Recipes</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffcf5]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Link 
          to="/recipes" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all recipes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image & Info */}
          <div className="space-y-8">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <Badge className="bg-white/90 text-orange-700 text-sm px-4 py-1 border-none backdrop-blur-md">
                  {recipe.category}
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-50">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <UtensilsCrossed className="w-6 h-6 mr-3 text-orange-500" />
                Ingredients
              </h2>
              <ul className="space-y-4">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center justify-between text-amber-800 border-b border-orange-50 pb-3 last:border-0">
                    <span className="font-medium">{ing.item}</span>
                    <span className="text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full text-sm">
                      {ing.amount}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-amber-800/50 italic">
                * All recipes are designed for one-pot cooking.
              </p>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">{recipe.title}</h1>
              <p className="text-xl text-amber-800/70 leading-relaxed mb-8">
                {recipe.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center bg-white px-5 py-3 rounded-2xl shadow-sm border border-orange-50">
                  <Clock className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-xs text-amber-800/50 uppercase font-bold tracking-wider">Cook Time</p>
                    <p className="text-amber-900 font-bold">{recipe.cookTime}</p>
                  </div>
                </div>
                <div className="flex items-center bg-white px-5 py-3 rounded-2xl shadow-sm border border-orange-50">
                  <Users className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-xs text-amber-800/50 uppercase font-bold tracking-wider">Servings</p>
                    <p className="text-amber-900 font-bold">{recipe.servings} People</p>
                  </div>
                </div>
                <div className="flex items-center bg-white px-5 py-3 rounded-2xl shadow-sm border border-orange-50">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-xs text-amber-800/50 uppercase font-bold tracking-wider">Difficulty</p>
                    <p className="text-amber-900 font-bold">{recipe.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Simple Steps</h2>
              {recipe.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-amber-900 leading-relaxed text-lg">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12">
              <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
                <h3 className="text-lg font-bold text-orange-800 mb-2">SoupSimple Tip</h3>
                <p className="text-orange-700/80">
                  Always taste your soup before serving! A little extra salt or a squeeze of lemon can make all the difference in bringing out the flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-amber-50/50 py-12 mt-20 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <MadeWithApplaa />
        </div>
      </footer>
    </div>
  );
}