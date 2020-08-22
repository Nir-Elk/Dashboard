import DATA from '../../data.json'
import axios from 'axios'
export const types = {
    FETCH_DATA: "FETCH_DATA",
    FETCH_DATA_FAILED: "FETCH_DATA_FAILED",
    FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS"
}

export const fetchData = () => dispatch => {
    dispatch({ type: types.FETCH_DATA });


    axios('https://chf-avraham.myshopify.com/admin/api/2020-07/orders.json?status=any',{headers: {'X-Shopify-Access-Token': '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'}})
        .then(res => res.json().then(({ orders }) => {
        dispatch({ type: types.FETCH_DATA_SUCCESS, payload: orders.map(order => ({ ...order, total_price: Math.random() * 10 })) });
    })).catch(({ err }) => {
        dispatch({ type: types.FETCH_DATA_FAILED, payload: err });
    }).finally(() => {
        dispatch({ type: types.FETCH_DATA_SUCCESS, payload: DATA.orders.map(order => ({ ...order, total_price: (Math.random() * 10).toFixed(2), total_discount: (Math.random() * 3).toFixed(2), total_tax: (Math.random() * 0.8).toFixed(2), subtotal_price: (Math.random() * 5).toFixed(2) })) });
    }); // overide with random mock data.
};

