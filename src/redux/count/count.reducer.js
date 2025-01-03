export const countReducer = (state = 0, action) => {
    if (action.type === 'ADD_COUNT_BY_ONE') {
        return state + 1;
    }
    return state;
}