const initialStateHome = {
    dataComponent: [],
}

const homeReducer = (state = initialStateHome, action) => {
    switch (action.type) {
        case 'ADD_DATA_COMPONENT':
            return {
                ...state,
                dataComponent: action.payload
            }
        case 'CLEAR_DATA_COMPONENT':
            return {
                ...state,
                dataComponent: []
            }
        default:
            return state;
    }
}

export default homeReducer