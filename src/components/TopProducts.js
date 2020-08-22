import { StyledHeader, StyledPaper } from '../Styled'
import React from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import ProductRow from "./ProductRow"

export default function TopProducts({data, ...otherProps}) {

    let topProducts = {};
    data.forEach(order =>{
        order.products.forEach(product => {
            if(topProducts[product.id]) {
                topProducts[product.id].count += 1;
            } else {
                topProducts[product.id] = { ...product, count: 1};
            }
    })});
    topProducts = Object.values(topProducts)
        .sort((product,otherProduct)=>otherProduct.count-product.count)
        .slice(0,3);
    return (
        <StyledPaper {...otherProps} >
            <StyledHeader>
                <span className="title">Top products</span>
            </StyledHeader>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Sells</TableCell>
                        <TableCell align="right">Tax</TableCell>
                        <TableCell align="right">Total price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {topProducts.map((product) =>
                        <ProductRow key={product.id} data={product} />
                    )}
                </TableBody>
            </Table>




        </StyledPaper>
    )
}

