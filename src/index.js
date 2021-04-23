/**
 * @desc this is the router file where all the routes are defined.
 * @author Manav Sharma
 * @since 20 April 2021
*/

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import HomeScreen from './homeScreen';
import QuizScreen from './components/quizScreen';


class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
				<div>
					<Switch>
						<Route exact path='/' component = { HomeScreen }/>
						<Route path='/quiz' component = { QuizScreen }/>
					</Switch>
				</div>
			</BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);