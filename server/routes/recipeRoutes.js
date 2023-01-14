import express from 'express';
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router();

import {
	getRecipes,
	getRecipeById,
	createRecipe,
	updateRecipe,
	createRecipeReview
} from '../controllers/recipeController.js';

router.get('/', getRecipes);
router.put('/:id', protect, admin, updateRecipe)
router.post('/:id/reviews', protect, createRecipeReview)
router.post('/', protect, admin, createRecipe)

router.get('/:id', getRecipeById);

export default router;