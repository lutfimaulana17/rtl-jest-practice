const initialState = {
    loading: true,
    titleApp: 'List Component'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'SET_LOADING') {
        return {
            ...state,
            loading: action.payload
        }
    }
    return state;
}

export default globalReducer;