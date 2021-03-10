import {Route, Switch, Redirect} from 'react-router-dom'
import {TablePage} from './pages/table'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <TablePage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}