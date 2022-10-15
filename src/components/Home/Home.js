import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import "./Home.css"


const Home = () => {
	const tShirts = useLoaderData();
	const [cart, setCart] = useState([]);
	const handleAddToCart = (item) => {
		const selectTShit = cart.find(ts => ts._id === item._id);
		if (selectTShit) {
			alert('This product already selected')
		}
		else {
			const newCart = [...cart, item];
			setCart(newCart)
		}
	}
	
	return (
		<div className='home-container'>
			<div className='tShirts-container'>
				{
					tShirts.map(product => <TShirt
						key={product._id}
						product={product}
						handleAddToCart={handleAddToCart}
					></TShirt>)
				}
			</div>
			<div className='cart-container'>
				<Cart
					cart={cart}
				></Cart>

			</div>
		</div>
	);
};

export default Home;