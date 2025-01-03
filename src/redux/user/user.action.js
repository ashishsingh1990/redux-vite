export const fetchUsers = () => {
   return async (dispatch) => {
        try {
            dispatch({
                type: 'FETCH_USER_PENDING', // pending
                payload: [],
            })
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            dispatch({
                type: 'FETCH_USER_FULFILLED', // Fulfilled
                payload: data,
            })
        } catch (error) {
            dispatch({
                type: 'FETCH_USER_ERROR', 
                error: error.message,
            })// rejected
        }
   }
  }

  // pending, fulfilled, rejected