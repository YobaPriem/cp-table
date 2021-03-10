import {useState, useCallback} from 'react'

const useRequest = () => {
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url: string) => {
        setLoading(true)
        try {

            const response = await fetch(url)

            const data = await response.json()


            if (!response.ok) {
                throw new Error(data.message || 'Ой-ей! Приключилось что-то нехорошее!')
            }


            return data
        } catch (e) {
            throw e
        } finally {
            setLoading(false)
        }
    }, [])
    return { request, loading }
}

export default useRequest
