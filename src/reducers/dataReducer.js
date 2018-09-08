import { DATA_INSERTED, GET_PELATIH, GET_MANAGER, GET_MEDIS, GET_GURU, GET_PEMAIN, GET_ERRORS, VALUE_UPDATE, GET_SYARAT, SET_LOADING_DATA, GET_USERS } from "../config/types";

const initialState = {
    success : {},
    pelatih : {},
    manager : {},
    medis : {},
    guru : {},
    syarat : {},
    pemain : [],
    error : {},
    update : {},
    loading : false,
    users : []
}

export default (state = initialState, action) => {
    switch (action.type) {
    
        case DATA_INSERTED:
        return { ...state, success : action.payload, loading : false }
        
        case GET_PELATIH:
        return { ...state, pelatih : action.payload, loading : false }
        
        case GET_MANAGER:
        return { ...state, manager : action.payload, loading : false }
        
        case GET_MEDIS:
        return { ...state, medis : action.payload, loading : false }
        
        case GET_GURU:
        return { ...state, guru : action.payload, loading : false }
        
        case GET_PEMAIN:
        return { ...state, pemain : action.payload, loading : false }
        
        case GET_SYARAT: 
        return { ...state, syarat : action.payload, loading : false }
        
        case GET_ERRORS:
        return { ...state, error : action.payload, loading : false }

        case GET_USERS:
        return { ...state, users : action.payload, loading : false }

        case VALUE_UPDATE: 
        return { ...state, update : action.payload, loading : false }

        case SET_LOADING_DATA: 
        return { ...state, loading : true }

        default:
        return state
    }
}
