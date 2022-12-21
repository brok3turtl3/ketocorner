import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './screens/Store';
import HomePage from './screens/HomePage';
import ProductScreen from './screens/ProductScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>Welcome to Keto Corner!</h1>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/store' element={<Store />} />
						<Route path='/products/:id' element={<ProductScreen />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
