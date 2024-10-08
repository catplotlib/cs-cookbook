# CS Concepts Cookbook

CS Concepts Cookbook is an interactive web application that teaches computer science concepts through cooking metaphors. It provides a fun and engaging way to learn algorithms and data structures by relating them to familiar cooking processes.

## Features

- Interactive recipe cards for various CS concepts
- Detailed explanations with visual aids
- Code examples for each concept
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- Framer Motion for animations
- Tailwind CSS for styling
- Lucide React for icons

## Project Structure

```
cs-concepts-cookbook/
│
├── src/
│   ├── components/
│   │   ├── RecipeCard.js
│   │   ├── RecipeDetail.js
│   │   ├── CodeBlock.js
│   │   ├── HeaderImages.js
│   │   └── VisualExplanations.js
│   │
│   ├── data/
│   │   └── recipes.js
│   │
│   └── App.js
│
├── public/
│   └── index.html
│
├── package.json
└── README.md
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cs-concepts-cookbook.git
   cd cs-concepts-cookbook
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Adding New Recipes

To add a new CS concept recipe:

1. Create new header and visual explanation components in `HeaderImages.js` and `VisualExplanations.js`.
2. Add the new recipe object to the `recipes` array in `data/recipes.js`.
3. The new recipe will automatically appear in the main grid.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please open an issue on GitHub or contact the maintainer at [your-email@example.com](mailto:your-email@example.com).