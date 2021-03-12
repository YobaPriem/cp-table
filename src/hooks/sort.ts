import React from 'react'

// interface SortSettings {
//     direction: string,
//     key: string
// }

const useSort = (items: any, settings: any = 'null') => {
    const [sortSettings, setSortSettings] = React.useState(settings)
    const sortedItems = React.useMemo(() => {
        if (sortSettings !== null) {
           items.sort((a: any, b:any) => {
                if (a[sortSettings.key] < b[sortSettings.key]) {
                    return sortSettings.direction === 'asc' ? -1 : 1
                }

                if (a[sortSettings.key] > b[sortSettings.key]) {
                    return sortSettings.direction === 'asc' ? 1 : -1
                }

                return 0
            })
        }

        return items
    }, [items, sortSettings])

    const setSettings = (key: string) => {
        let direction = 'asc'
        if (
            sortSettings &&
            sortSettings.key === key &&
            sortSettings.direction === 'asc'
        ) {
          direction = 'desc';
        }

        setSortSettings({ key, direction });
    }

    return { sortedItems, sortSettings, setSettings }
}

export default useSort
