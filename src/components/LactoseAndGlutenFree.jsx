import React from 'react';
import data from "./data";

const LactoseAndGlutenFree = () => {
    const recipeList = data.recipes;

    const lactoseFreeRecipeList = recipeList.filter((recipes) => {
        return recipes.lactoseFree === true;
    });
    console.log(lactoseFreeRecipeList)

    const glutenFreeRecipeList = recipeList.filter((recipes) => {
        return recipes.glutenFree === true;
    });
    console.log(glutenFreeRecipeList)
   
    const lactoseAndGLutenFreeRecipeList = recipeList.filter((recipes) => {
        return (recipes.lactoseFree === true && recipes.glutenFree === true);
    })
    console.log(lactoseAndGLutenFreeRecipeList)
  return (
    <div>
      <p>Mentes árlista</p>
          <p>Laktózmentesek:</p>
          { <ul>
              {lactoseFreeRecipeList.map(r => (<li key={recipeList.name}>{r.name} {r.price}</li>))}
          </ul>}

          <p>Gluténmentesek:</p>
          { <ul>
              {glutenFreeRecipeList.map(r => (<li key={recipeList.name}>{r.name} {r.price}</li>))}
          </ul>}

          <p>Mindenmentesek:</p>
          { <ul>
              {lactoseAndGLutenFreeRecipeList.map(r => (<li key={recipeList.name}>{r.name} {r.price}</li>))}
          </ul>}
    </div>
  )
}

export default LactoseAndGlutenFree
