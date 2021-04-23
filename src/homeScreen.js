/**
 * @desc this is the Home Screen of the quiz.
 * @author Manav Sharma
 * @since 20 April 2021
*/


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
    render(){
        return (
            <div align='center'>
				<h1>
					QUIZ MASTER !!
				</h1>
                <Link to = '/quiz'>
					<button>
						Start
					</button>
				</Link>
			</div>
        );
    }
}