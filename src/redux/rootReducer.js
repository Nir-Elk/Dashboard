import { combineReducers } from 'redux';
import ordersReducer from './orders/orders.reducer'

export default combineReducers({
    orders: ordersReducer
});