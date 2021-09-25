const initialState = {
    JWT: null,
    id: null,
}

const profile = (state=initialState,action) =>{
    if(action.type === 'SET_PROFILE'){
        return{
            ...state,
            JWT: action.JWT,
            id: action.id
        }
    }
    return state
}

export const setProfile = (JWT,id) =>({
    type: 'SET_PROFILE',
    JWT,
    id
})

export default profile