import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './screens/Store';
import HomePage from './screens/HomePage';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/Register';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrder from './screens/PlaceOrder';
import OrderScreen from './screens/OrderScreen';
import RecipesScreen from './screens/RecipesScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container className='justify-content-center'>
					<h1>Welcome to Keto Corner!</h1>
					<Routes>
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/register' element={<RegisterScreen />} />
						<Route path='/profile' element={<ProfileScreen />} />
						<Route path='/' element={<HomePage />} />
						<Route path='/recipes' element={<RecipesScreen />} />
						<Route path='/recipes/:id' element={<RecipeDetailsScreen />} />
						<Route path='/store' element={<Store />} />
						<Route path='/products/:id' element={<ProductScreen />} />
						<Route path='/cart/:id?' element={<CartScreen />} />
						<Route path='/shipping' element={<ShippingScreen />} />
						<Route path='/payment' element={<PaymentScreen />} />
						<Route path='/placeorder' element={<PlaceOrder />} />
						<Route path='/admin/userList' element={<UserListScreen />} />
						<Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
						<Route path='/admin/productList' element={<ProductListScreen />} />
						<Route path='/orders/:id' element={<OrderScreen />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
