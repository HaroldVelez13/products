import { IProduct } from '../../common/interfaces/IProduct';
import { Action, ActionType } from '../actionTypes/getProducts';



interface State {
    list: IProduct[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    list: [],
    loading: false,
    error: null
}

const productsReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS_PENDING:
            return {
                loading: true,
                list: [],
                error: null
            }
        case ActionType.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                list: action.payload,
                error: null
            }
        case ActionType.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
                list: []
            }
        default:
            return state;
    }
}

export default productsReducer;