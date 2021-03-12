import React from 'react'
import { /*withStyles, Theme, createStyles,*/ makeStyles } from '@material-ui/core/styles';
import TableBlock from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import Pagination from '@material-ui/lab/Pagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import useSort from '../hooks/sort'
import useSearch from '../hooks/search'

const rowsPerPage: number = 50

interface Data {
    id: number,
    userId: number,
    title: string,
    body: string,
}

const useStyles = makeStyles({
    container: {
      maxHeight: 700,
    },
    tableSearch: {
        margin: 16,
    },
    pagination: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '15px 0'
    }
})

const Table = (props: {dataSet: Data[]}) => {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const { searchedItems, setSearchQuery } = useSearch(props.dataSet)
    const { sortedItems, sortSettings, setSettings } = useSort(searchedItems)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage - 1);
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    return (
        <Paper>
            <TextField className={classes.tableSearch} id="search" label="Поиск" onChange={handleSearch}/>
            <TableContainer className={classes.container} component={Paper}>
                <TableBlock aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {
                                sortedItems[0] !== undefined &&
                                    Object.keys(sortedItems[0])
                                    .map(row => (
                                        <TableCell
                                        key={row}
                                        onClick={
                                            ()=>{
                                                setSettings(row)
                                            }
                                        }
                                        >
                                            <TableSortLabel
                                                active={sortSettings.key === row}
                                                direction={sortSettings.key === row ? sortSettings.direction  : 'asc'}
                                            >{row}</TableSortLabel>
                                        </TableCell>
                                    ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedItems
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: Data) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.userId}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.body}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableBlock>
            </TableContainer>
            <Pagination
                className={classes.pagination}
                count={Math.ceil(sortedItems.length / rowsPerPage)}
                shape="rounded"
                onChange={handleChangePage}
            />
        </Paper>
    )
}

export default Table
