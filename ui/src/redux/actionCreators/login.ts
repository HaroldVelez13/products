import axios from 'axios';
import { Dispatch } from 'redux';
import { IAuth } from '../../common/interfaces/IUser';
import { ActionType, Action } from '../actionTypes/login';

export const login = (auth: IAuth) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_LOGIN_PENDING
        });

        try {
            const url = `http://localhost:3000/api/user/login`
            console.log("Auth", auth)
            const { data } = await axios.post(url, auth);
            dispatch({
                type: ActionType.GET_LOGIN_SUCCESS,
                payload: data
            });
            localStorage.setItem("TOKEN", data.token)

        } catch (err: any) {
            dispatch({
                type: ActionType.GET_LOGIN_FAIL,
                payload: err.message
            });
        }
    }
} 