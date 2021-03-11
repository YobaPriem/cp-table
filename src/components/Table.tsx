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

interface Data {
    id: number,
    userId: number,
    title: string,
    body: string,
}

interface TableHeadCell {
    key: string,
}

const useStyles = makeStyles({
    container: {
      maxHeight: 700,
    },
})

const tableHead () => {

}

const Table = (props: {dataSet: Data[]}) => {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    }

    return (
        <Paper>
            <TableContainer className={classes.container} component={Paper}>
                <TableBlock aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.dataSet
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.userId}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.body}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableBlock>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={props.dataSet.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
            />
        </Paper>
    )
}

export default Table