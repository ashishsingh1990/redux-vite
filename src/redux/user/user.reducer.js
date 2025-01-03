const INITIAL_STATE = {name: 'Ashish', Age: 34}
export const userReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'CHANGE_NAME'){
        return {
            ...state,
            name: action.payload,
        }
    }
return state;
}