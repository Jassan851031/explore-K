import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext'
import add_viaje from './add_viaje';
import Resumen from './resumen';
import Navbar from './navbar';



const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={add_viaje} />
                <Route exact path="/resumen" component={Resumen} />
            </Switch>
        </BrowserRouter>
    )
}
export default injectContext(App);