import { Recipe } from '@/data/recipes';
import { Link } from '@tanstack/react-router';
import { Clock, Users, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link 
      to="/recipes/$slug"
      params={{ slug: recipe.slug }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-orange-50 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-orange-700 hover:bg-white border-none backdrop-blur-sm">
            {recipe.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-amber-800/70 text-sm line-clamp-2 mb-4 flex-grow">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-orange-50">
          <div className="flex items-center space-x-4 text-xs text-amber-700 font-medium">
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {recipe.cookTime}
            </div>
            <div className="flex items-center">
              <Users className="w-3.5 h-3.5 mr-1" />
              {recipe.servings}
            </div>
          </div>
          <div className="text-orange-600 group-hover:translate-x-1 transition-transform">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}