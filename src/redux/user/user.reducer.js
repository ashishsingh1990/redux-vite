const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: null
}
export const userReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'FETCH_USER_PENDING'){
        return {
            ...state,
            data: [],
            isLoading: true,
            error: null,
        }
    }
    if (action.type === 'FETCH_USER_FULFILLED'){
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            error: null,
        }
    }
    if (action.type === 'FETCH_USER_ERROR'){
        console.log('error', action.error)
        return {
            ...state,
            data: [],
            isLoading: false,
            error: action.error,
        }
    }
return state;
}