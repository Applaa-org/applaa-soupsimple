import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#fffcf5]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">Our Story</h1>
            <p className="text-xl text-amber-800/70 leading-relaxed">
              SoupSimple was born from a simple idea: cooking shouldn't be complicated. 
              We believe that a warm, nutritious meal should be accessible to everyone, 
              regardless of their skill level in the kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Cozy Focus</h3>
              <p className="text-amber-800/60 text-sm">
                We curate recipes that bring warmth and comfort to your home.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Minimalist</h3>
              <p className="text-amber-800/60 text-sm">
                Max 5 steps and few ingredients. No fancy equipment needed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Beginner Friendly</h3>
              <p className="text-amber-800/60 text-sm">
                Clear instructions designed for those just starting their journey.
              </p>
            </div>
          </div>

          <div className="bg-orange-100/50 rounded-[3rem] p-12 text-center border border-orange-200">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Mission</h2>
            <p className="text-lg text-amber-800/80 leading-relaxed mb-8">
              To simplify the art of soup making. We focus on one-pot recipes that minimize cleanup and maximize flavor. 
              Whether you're a busy student, a tired parent, or someone who just wants a quick healthy meal, 
              SoupSimple is here to guide you.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="h-1 w-12 bg-orange-400 rounded-full" />
              <div className="h-1 w-12 bg-orange-400 rounded-full" />
              <div className="h-1 w-12 bg-orange-400 rounded-full" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-amber-50/50 py-12 mt-20 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-900/40 text-sm mb-4 italic">
            Disclaimer: Cooking guidance only. Please handle hot liquids with care.
          </p>
          <MadeWithApplaa />
        </div>
      </footer>
    </div>
  );
}