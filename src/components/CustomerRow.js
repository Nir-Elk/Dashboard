import React from 'react';

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function CustomerRow({data}) {

    return (
        <TableRow>
            <TableCell component="th" scope="row">{data.email}</TableCell>
            <TableCell align="right">{data.total_spent}</TableCell>
        </TableRow>
    );
}
