import React, {useState, useEffect} from 'react'
import useRequest from '../hooks/request'
import Table from '../components/Table'

export const TablePage = () => {
    const { request, loading } = useRequest()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await request('https://jsonplaceholder.typicode.com/posts')
                console.log(data)
                setData(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [request])

    return (
        <div>
            <Table
            dataSet={data}
            />
        </div>
    )
}