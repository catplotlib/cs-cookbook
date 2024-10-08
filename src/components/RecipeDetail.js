import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ImageIcon, Code } from 'lucide-react';
import CodeBlock from './CodeBlock';

const RecipeDetail = ({ recipe, onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <button
      onClick={onBack}
      className="m-8 bg-amber-600 text-white py-2 px-6 rounded-full hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center"
    >
      <ChevronLeft size={20} className="mr-2" />
      Back to Recipes
    </button>
    <recipe.HeaderImage />
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-amber-800 border-b-2 border-amber-300 pb-2">
        {recipe.title}
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-amber-700">
          Ingredients:
        </h3>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <motion.li
              key={index}
              className="mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {ingredient}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-amber-700">
          Instructions:
        </h3>
        <ol className="list-decimal pl-6">
          {recipe.instructions.map((instruction, index) => (
            <motion.li
              key={index}
              className="mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {instruction}
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-amber-700">
          CS Explanation:
        </h3>
        <p className="bg-amber-50 p-4 rounded-lg shadow-inner">
          {recipe.csExplanation}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-amber-700 flex items-center">
          <ImageIcon className="mr-2" /> Visual Explanation:
        </h3>
        <div className="bg-amber-50 p-4 rounded-lg shadow-inner">
          <recipe.visualExplanation />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-amber-700 flex items-center">
          <Code className="mr-2" /> Code Example:
        </h3>
        <CodeBlock code={recipe.codeExample} />
      </div>
    </div>
    <button
      onClick={onBack}
      className="m-8 bg-amber-600 text-white py-2 px-6 rounded-full hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center"
    >
      <ChevronLeft size={20} className="mr-2" />
      Back to Recipes
    </button>
  </motion.div>
);

export default RecipeDetail;