import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import recipes from './data/recipes.js'

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import Recipe from './models/recipeModel.js'

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		// await Order.deleteMany();
		// await User.deleteMany();
		// await Product.deleteMany();
		await Recipe.deleteMany();

		// const createdUsers = await User.insertMany(users);

		// const adminUser = createdUsers[0]._id;

		// const sampleProducts = products.map((product) => {
		// 	return { ...product, user: adminUser };
		// });

		// await Product.insertMany(sampleProducts);

		// const sampleRecipes = recipes.map((recipe) => {
		// 	return { ...recipe, user: adminUser };
		// });

		await Recipe.insertMany(recipes);

		console.log('Data Imported!');
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await User.deleteMany();
		await Product.deleteMany();

		console.log('Data Destroyed!');
		process.exit();
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
