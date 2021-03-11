import React from 'react'
import useRequest from '../hooks/request'
import Table from '../components/Table'

export const TablePage = () => {
    const { request, loading } = useRequest()
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await request('https://jsonplaceholder.typicode.com/posts')
                setData(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [request])

    return (
        <div>
            {
                !loading
                ?
                <Table
                dataSet={data}
                />
                :
                <div>
                    Грузим
                </div>
            }
        </div>
    )
}