import {CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,} from './constants'

const intialStateSearch ={searchField:''};

export const searchRobots = (state=intialStateSearch,action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}

const intialStateSearch = {
    isPending:false,
    robots:[],
    error:''
}

export const requestRobots = (state=intialState,action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true});
            break;
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{robots:action.payload,isPending:false});
            break;
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{error:action.payload,isPending:false});
            break;
        default:
            return state;
    }
}