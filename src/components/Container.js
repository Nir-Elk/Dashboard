import React from 'react';
import { useSelector } from "react-redux";
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Orders from './Orders';
import { StyledContainer } from '../Styled';
import { getIsLoading } from '../redux/orders/orders.selectors';

export default function Container() {
    const isLoading = useSelector(getIsLoading);

    return isLoading ? <> Loading... </> :(
        <StyledContainer>
            <Route exact path={'/'} component={Dashboard} />
            <Route path={'/orders'} component={Orders} />
        </StyledContainer>
    );
}