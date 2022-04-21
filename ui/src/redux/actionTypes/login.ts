import { IToken, IUser } from '../../common/interfaces/IUser';

export enum ActionType {
    GET_LOGIN_PENDING = 'GET_LOGIN_PENDING',
    GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS',
    GET_LOGIN_FAIL = 'GET_LOGIN_FAIL'
}

interface actionPending {
    type: ActionType.GET_LOGIN_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_LOGIN_SUCCESS;
    payload: { user: IUser, token: IToken };
}

interface actionFail {
    type: ActionType.GET_LOGIN_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;