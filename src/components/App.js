import { BrowserRouter as Router } from 'react-router-dom'
import Container from './Container'
import SideNav from "./SideNav";
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData as fetchOrders } from '../redux/orders/orders.actions'
import { StyledBody } from "../Styled";

function App() {
    const dispath = useDispatch();

    React.useEffect(() => {
        dispath(fetchOrders())
    }, [dispath])

    return (
        <Router>
            <StyledBody>
                <SideNav />
                <Container />
            </StyledBody>
        </Router>
    );
}

export default App;
