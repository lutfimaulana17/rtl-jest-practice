export const addDataComponent = (payload) => {
    return {type: 'ADD_DATA_COMPONENT', payload}
}

export const clearDataComponent = () => {
    return {type: 'CLEAR_DATA_COMPONENT', payload: []}
}