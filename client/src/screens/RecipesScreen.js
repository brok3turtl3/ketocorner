import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Recipe from '../components/Recipe';
import { listRecipes } from '../actions/recipeActions';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
import SearchBox from '../components/SearchBox'

const Recipes = () => {
	const recipeList = useSelector((state) => state.recipeList);
	const { loading, error, recipes } = recipeList;

	let { keyword } = useParams()

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listRecipes(keyword));
	}, [dispatch, keyword]);

	return (
		<>
			<h1>Our Recipes</h1>
			<SearchBox />
			
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{recipes.map((recipe, index) => (
						<Col key={index} sm={12} md={6} lg={4} xl={3}>
							<Recipe recipe={recipe} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default Recipes;
