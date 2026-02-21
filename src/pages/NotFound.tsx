import { useRouterState, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const state = useRouterState();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      state.location.pathname,
    );
  }, [state.location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffcf5]">
      <div className="text-center p-8 bg-white rounded-[2.5rem] shadow-xl border border-orange-100 max-w-md">
        <h1 className="text-8xl font-black text-orange-600 mb-4">404</h1>
        <p className="text-2xl font-bold text-amber-900 mb-6">Oops! This soup is missing.</p>
        <p className="text-amber-800/60 mb-8">
          We couldn't find the page you're looking for. It might have been moved or eaten.
        </p>
        <Link to="/">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-xl font-bold transition-all hover:scale-105">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;