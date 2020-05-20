import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component{
	render(){
		const {title, photu, instructions}=this.props;
		const ingredients=this.props.ingredients.map((ing,index) => (
			<li key={index}>{ing}</li>
		));
		return (
			<div className="recipe-card">
					<div className="recipe-card-image">
						<img src={photu} alt={title}/>
					</div>
					<div className="recipe-card-content">
						<h2 className="recipe-title">{title}</h2>
						<h4>The ingredients are:</h4>
						<ul>
							{ingredients}
						</ul>
						<h4>The Process is:</h4>
						<p>{instructions}</p>
					</div>
			</div>
		);
	}
}

export default Recipe;
