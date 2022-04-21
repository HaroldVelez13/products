import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes/getProducts';

export const getProducts = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_PRODUCTS_PENDING
        });

        try {
            const token = localStorage.getItem("TOKEN")
            const headers = { Authorization: ` Bearer ${token}` }
            const { data } = await axios.get(`http://localhost:3000/api/products`, { headers });
            dispatch({
                type: ActionType.GET_PRODUCTS_SUCCESS,
                payload: data.products
            });

        } catch (err: any) {
            dispatch({
                type: ActionType.GET_PRODUCTS_FAIL,
                payload: err.message
            });
        }
    }
} 