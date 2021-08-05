import React, {useEffect, useState} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './TagSummaryTable.css';

function TagSummaryTable(tags) {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows([]);
        const index = tags.tags.length;
        for (let i = 0; i < index; i++) {
            setRows(rows => [...rows, {name: tags.tags[i], data: tags.data[i]}]);
        }
    }, [tags.data]);


    return (
       <div>
           <TableContainer component={Paper}>
               <Table className="summaryTable" aria-label="simple table">
                   <TableHead>
                       <TableRow>
                           <TableCell>{tags.title}</TableCell>
                           <TableCell align="right">Number of Days</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {rows.map((row) => (
                           <TableRow key={row.name}>
                               <TableCell component="th" scope="row">
                                   {row.name}
                               </TableCell>
                               <TableCell align="right">{row.data}</TableCell>
                           </TableRow>
                       ))}
                   </TableBody>
               </Table>
           </TableContainer>
       </div>
    )
}

export default TagSummaryTable;
