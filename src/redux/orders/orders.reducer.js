import { types } from './orders.actions'

export default (state = {data: [], isLoading: false, err: undefined }, action) => {
    switch (action.type) {
        case types.FETCH_DATA:
            return {...state, isLoading: true};
        case types.FETCH_DATA_SUCCESS:
            return {...state, data: action.payload, isLoading: false, err: undefined};
        case types.FETCH_DATA_FAILED:
            return {...state, data: [], isLoading: false, err: action.payload};
        default:
            return state;
    }
}