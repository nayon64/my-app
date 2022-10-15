import React from 'react';
import "./TShirt.css"

const TShirt = ({ product,handleAddToCart}) => {
	const { name, gender, id, picture, price } = product;
	return (
		<div className='tShirt-container'>
			<div className='tShirt-img-container'>
				<img src={ picture} alt="" />
			</div>
			<div className='tShirt-details-container'>
				<h4>{name}</h4>
				<p>Price: {price}</p>
				<button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
			</div>
		</div>
	);
};

export default TShirt;