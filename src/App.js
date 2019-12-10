import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// Context 
import {CartContextProvider} from "./contexts/CartContext";
import {ProductContextProvider} from "./contexts/ProductContext";

function App() {
	
	return (
		<ProductContextProvider>
			<CartContextProvider>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products}/>

					<Route path="/cart" component={ShoppingCart}/>
				</div>
			</CartContextProvider>
		</ProductContextProvider>
	);
}

export default App;
