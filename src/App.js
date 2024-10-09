import React, { useState } from "react";
import { Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import recipes from "./data/recipes";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Create a reversed copy of the recipes array
  const reversedRecipes = [...recipes].reverse();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-200 to-red-200 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Overlay pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.header
          className="max-w-7xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-amber-900 flex items-center justify-center">
            <Book className="mr-4" size={48} /> CS Concepts Cookbook
          </h1>
          <p className="text-xl text-amber-800">
            Learn computer science through delicious recipes!
          </p>
        </motion.header>
        <main className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedRecipe ? (
              <RecipeDetail
                recipe={selectedRecipe}
                onBack={() => setSelectedRecipe(null)}
              />
            ) : (
              <motion.div
                key="grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {reversedRecipes.map((recipe, index) => (
                  <RecipeCard
                    key={index}
                    recipe={recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default App;