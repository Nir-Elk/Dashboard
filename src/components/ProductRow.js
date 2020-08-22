import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function ProductRow({data}) {

    return (
        <TableRow>
            <TableCell component="th" scope="row">{data.name}</TableCell>
            <TableCell align="right">{data.count}</TableCell>
            <TableCell align="right">{data.tax}</TableCell>
            <TableCell align="right">{data.price}</TableCell>
        </TableRow>
    );
}
