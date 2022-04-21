import { IProduct } from '../../common/interfaces/IProduct';

export enum ActionType {
    GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
    GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL'
}

interface actionPending {
    type: ActionType.GET_PRODUCTS_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_PRODUCTS_SUCCESS;
    payload: IProduct[];
}

interface actionFail {
    type: ActionType.GET_PRODUCTS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;