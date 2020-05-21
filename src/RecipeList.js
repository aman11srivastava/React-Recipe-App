import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';  

const RecipeList = ({recipes}) => {
    return (
      <div className="recipe-list">
        {recipes.map((r,index) => {
          return <Recipe 
          key={r.id} r={r}
          />
      })}
      </div>
    )
 
}
export default RecipeList;