import React from 'react';
import './Recipe.css';


const Recipe = ({r}) => {
	const {title, img, instructions,ingredients} = r
		return (
			<div className="recipe-card">
				<div className="recipe-card-image">
					<img src={img} alt={title}/>
				</div>
				<div className="recipe-card-content">
					<h2 className="recipe-title">{title}</h2>
					<h4>The ingredients are:</h4>
					<ul>
						{ingredients.map((r,i)=>
						<li>{r}</li>
						)}
					</ul>
					<h4>The Process is:</h4>
					<p>{instructions}</p>
					<button type="button">DELETE</button>
				</div>
			</div>
		);
}

export default Recipe;