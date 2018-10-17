import { FETCH_DOG_SUCCESS, FETCH_DOG_FAILURE,FETCH_CAT_SUCCESS, FETCH_CAT_FAILURE } from "./actions";



const initialState = {
    dog: null,
    cat:null,
    error: null,
    loading: false
    }

    export default function mainReducer(state = initialState, action){

        if(action.type === FETCH_DOG_SUCCESS){
            return Object.assign({},state,{
                dog:action.data
            })
        }
        else if(action.type === FETCH_DOG_FAILURE){
            return Object.assign({},state,{
                error:action.err
            })
        }
        else if(action.type === FETCH_CAT_SUCCESS){
            return Object.assign({},state,{
                cat:action.data
            })
        }
        else if(action.type === FETCH_CAT_FAILURE){
            return Object.assign({},state,{
                error:action.err
            })
        }
        return state
    }