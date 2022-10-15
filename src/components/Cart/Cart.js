import React from 'react';

const Cart = ({ cart }) => {
	console.log(cart)
	return (
		<div>
			<h3>Order Summery</h3>
			<h5>Nomber of Order: {cart.length}</h5>
		</div>
	);
};

export default Cart;