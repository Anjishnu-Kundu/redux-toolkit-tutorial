import React from 'react'
import { useSelector } from 'react-redux'
import counter from '../redux/slices/counter'
import { RootState } from '../redux/store'

const MyComponent: React.FC<{}> = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <div>{count}</div>
    )
}

export default MyComponent