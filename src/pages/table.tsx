import React, {useEffect} from 'react'
import useRequest from '../hooks/request'

export const TablePage = () => {
    const { request, loading } = useRequest()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await request('https://jsonplaceholder.typicode.com/posts')
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [request])

    return (
        <div>
            <h1>1231231</h1>
            {/* <button onClick={handel}></button> */}
        </div>
    )
}