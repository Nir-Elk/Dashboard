import React from 'react';
import { useSelector } from "react-redux";
import TableContainer from "@material-ui/core/TableContainer";
import { mappingOrdersToView } from '../utils/orders.utils'
import { StyledPaper } from "../Styled";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { getData } from '../redux/orders/orders.selectors'
import Row from "./Row";

export default function Orders() {
    const orders = mappingOrdersToView(useSelector(getData));

    return (
        <StyledPaper>
            <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Number of products</TableCell>
                            <TableCell align="right">Price (before tax)</TableCell>
                            <TableCell align="right">Tax</TableCell>
                            <TableCell align="right">Total price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => <Row key={order.id} row={order} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledPaper>
    );
}