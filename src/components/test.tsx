import React from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableBlock from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Paper from '@material-ui/core/Paper'

const rowsPerPage: number = 50

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});

const Table = (props: ) => {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    }

    return (
        <Paper>
            <TableContainer component={Paper}>
                <TableBlock className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </TableBlock>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default Table
