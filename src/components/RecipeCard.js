import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const RecipeCard = ({ recipe, onClick }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <recipe.HeaderImage />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 text-amber-800">{recipe.title}</h2>
      <p className="text-amber-600 mb-4">{recipe.shortDescription}</p>
      <div className="flex items-center text-amber-500">
        <span>Learn more</span>
        <ExternalLink size={20} className="ml-2" />
      </div>
    </div>
  </motion.div>
);

export default RecipeCard;