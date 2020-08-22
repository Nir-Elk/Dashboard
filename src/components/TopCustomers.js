import { StyledHeader, StyledPaper } from '../Styled'
import React from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CustomerRow from "./CustomerRow"

export default function TopCustomers({ data, ...otherProps }) {

    const customersMap = {};
    const customers = [];
    data.map(order=>{
       if(!customersMap[order.customerId]) {
           customersMap[order.customerId] = order.customerId;
           customers.push(order);
       }
       return data;
    }).sort((a, b) => parseFloat(b.total_spent) - parseFloat(a.total_spent))
        .slice(0, 3);



    return (
        <StyledPaper {...otherProps}>
            <StyledHeader>
                <span className="title">Top customers</span>
            </StyledHeader>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Total spent</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ overflowY:'scroll', overflow: 'hidden'}}>
                        {customers.map((customer) =>
                            <CustomerRow key={customer.email} data={customer} />
                        )}
                    </TableBody>
                </Table>
        </StyledPaper>
    )
}


