import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Adjust the path if necessary
import categoriesReducer from './categoriesReducer';
import subcategoriesReducer from './subcategoriesReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoriesReducer ,
  subcategory: subcategoriesReducer,
  products: productsReducer
  // Add other reducers if needed
});

export default rootReducer;
