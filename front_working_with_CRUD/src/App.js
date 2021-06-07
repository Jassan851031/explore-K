import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext'
import add_viaje from './add_viaje';
import Resumen from './resumen';



const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={add_viaje} />
                <Route exact path="/resumen" component={Resumen} />
            </Switch>
        </BrowserRouter>
    )
}
export default injectContext(App);