import React from 'react';
import { useSelector } from "react-redux";
import { getData as getOrders } from '../redux/orders/orders.selectors'
import AreaChart from './AreaChart';
import { mappingOrdersToView } from "../utils/orders.utils";
import TopCustomers from "./TopCustomers";
import TopProducts from "./TopProducts";

export default function Dashboard() {
    const orders = mappingOrdersToView(useSelector(getOrders));

    return (
        <div>
            <div className='row'>
                <AreaChart data={orders} width='50%' xKey='processed_at' yKey='total_price' title='Sales' subtitle={orders.reduce((prev, curr) => parseFloat(curr.total_price) + prev, 0).toFixed(2)} color='#3b8beb' />
                <AreaChart data={orders} width='25%' xKey='processed_at' yKey='total_tax' title='Taxes' subtitle={orders.reduce((prev, curr) => parseFloat(curr.total_tax) + prev, 0).toFixed(2)} color='#B23850' />
                <AreaChart data={orders} width='25%' xKey='processed_at' yKey='total_discount' title='Discounts' subtitle={orders.reduce((prev, curr) => parseFloat(curr.total_discount) + prev, 0).toFixed(2)} color='#8590AA' />
            </div>
            <div className='row'>
                <TopCustomers width='25%' data={orders} />
                <TopProducts width='75%' data={orders} />
            </div>
            <div className='row'>
                <AreaChart data={orders} width='100%' xKey='processed_at' yKey='subtotal_price' title='Profit' subtitle={orders.reduce((prev, curr) => parseFloat(curr.subtotal_price) + prev, 0).toFixed(2)} color='#1f88f2' />
            </div>
        </div>
    );
}