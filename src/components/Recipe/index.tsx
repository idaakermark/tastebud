import React, { useState, useEffect } from 'react';
import { Recipe, recipes } from '../Recipe/RecipeData';

interface RecipeListProps {

}

const RecipeList: React.FC<RecipeListProps> = () => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null); 

  useEffect(() => {
    setRecipeList(recipes);
  }, []);

  const generateRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipeList.length);
    setRandomRecipe(recipeList[randomIndex]);
  };

  return (
    <div className='m-8 text-center'>
      <h1 className='text-green text-center text-5xl font-shadows'>What's for dinner?</h1>
      {randomRecipe && ( 
        <div className=''>
          <h2 className='text-center font-medium text-2xl text-lightgreen font-shadows mt-4'>{randomRecipe.name}</h2>
          <img className='mt-8 mx-auto'src={randomRecipe.image} alt={randomRecipe.name} />
          <h3 className='text-lg mt-8 font-medium text-green'>This is what you need:</h3>
          <div className='list-disc font-poppins text-green'>
            {randomRecipe.ingredients.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
            <h3 className='text-lg mt-8 font-medium text-green'>How to make it:</h3>
            <div className='list-decimal font-poppins text-green'>
                {randomRecipe.instructions.map((instruction: string, index: number) => (
              <li key={index}>{instruction}</li>
                ))}
            </div>
        </div>
      )}
      <button className='bg-lightgreen hover:bg-hgreen m-4 p-3 rounded-full text-white font-gloria'onClick={generateRandomRecipe}>Generate Random Recipe</button>
    </div>
  );
};

export default RecipeList;




