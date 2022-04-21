import { combineReducers } from 'redux';
import authReducer from './auth';
import productsReducer from './products';

const reducers = combineReducers({
    products: productsReducer,
    auth: authReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;