
import { IUser } from '../../common/interfaces/IUser';
import { Action, ActionType } from '../actionTypes/login';



interface State {
    user: IUser;
    loading: boolean;
    error: string | null;
}

const initialState = {
    user: {
        username: "",
        email: "",
        _id: ""
    },
    loading: false,
    error: null
}

const authReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_LOGIN_PENDING:
            return {
                loading: true,
                user: initialState.user,
                error: null
            }
        case ActionType.GET_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
                error: null
            }
        case ActionType.GET_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
                user: initialState.user
            }
        default:
            return state;
    }
}

export default authReducer;