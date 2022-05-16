import React from 'react'
import { Router } from 'react-router-dom'

interface Props {
    children?: React.ReactNode
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    history: any
}

const CustomRouter = ({ children, history }: Props) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    })

    React.useLayoutEffect(() => history.listen(setState), [history])

    return (
        <Router
            basename="/"
            // eslint-disable-next-line react/no-children-prop
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    )
}

export default CustomRouter
