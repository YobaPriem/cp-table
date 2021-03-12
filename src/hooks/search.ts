import React from 'react'

interface Data {
    [key: string]: any
}

const useSearch = (items: Data[]) => {
    // const [originalData, setOriginalData] = React.useState(null)
    const [searchedItems, setSearchedItems] = React.useState([] as any)
    const [searchQuery, setSearchQuery] = React.useState('')

    React.useEffect(() => {
        const filteredItems = items.filter(item => {
            const isMatched: boolean = Object.keys(item).some((key: any) => {
                if (item[key].toString().search(searchQuery) !== -1) {

                    return item[key].toString().search(searchQuery) !== -1
                }
            })

            return isMatched
        })

        setSearchedItems(filteredItems)
    }, [items, searchQuery])

    return { searchedItems, setSearchQuery }
}

export default useSearch