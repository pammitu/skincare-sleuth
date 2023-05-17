import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import IngredientsPage from './components/IngredientsPage';
import RoutinePage from './components/RoutinePage';
import FavoritesPage from './components/FavoritesPage';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/ingredients" component={IngredientsPage}/>
                <Route path="/routine" component={RoutinePage}/>
                <Route path="/favorites" component={FavoritesPage}/>
            </Switch>
        </Router>
    );
}

export default App;