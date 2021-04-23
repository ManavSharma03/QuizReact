/**
 * @desc this is the main quiz screen of the quiz.
 * @author Manav Sharma
 * @since 21 April 2021
*/

import React from 'react';
import { Link } from 'react-router-dom';
import questionsFile from '../public/questions.json';

import answerOptions from './answerOptions';
import './quizScreen.css';

let questionCount = 0;
let scores = 0;

export default class QuizScreen extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			currentQuestion: questionsFile[questionCount],
			selectedAnswerIs: ''
		};
		this.currentQuestion = this.currentQuestion.bind(this);
		this.findQuestionLevel = this.findQuestionLevel.bind(this);
		this.answerHandler = this.answerHandler.bind(this);
	}

	// to set the current question in the state
	currentQuestion(){
		questionCount = questionCount + 1;

		return this.setState({
			currentQuestion: questionsFile[questionCount],
			selectedAnswerIs: ''
		});
	}

	// to handle the onClick event on the MCQ options
	answerHandler(e){
		e.preventDefault();
		let selectedValue = e.target.value;
		let correctAnswer = decodeURIComponent(this.state.currentQuestion.correct_answer);

		if(selectedValue === correctAnswer) {
			// logic for retuning a div element with congratulation

			this.setState({
				selectedAnswerIs: 'Correct !!'
			});
			scores = scores + 1;

		} else {
			this.setState({
				selectedAnswerIs: 'Sorry! Please Try Again. '
			});
		}
	}

	// to show the difficulity level using the star rating

	findQuestionLevel( level ){

		switch(level){
			case 'easy':
				return (
					<span className="fa fa-star checked"></span>
				);
			case 'medium':
				return (
					<div>
						<span className="fa fa-star checked"></span>
						<span className="fa fa-star checked"></span>
					</div>
				);
			case 'hard':
				return (
					<div>
						<span className="fa fa-star checked"></span>
						<span className="fa fa-star checked"></span>
						<span className="fa fa-star checked"></span>
					</div>
				);
			default:
				return (
					<span>Rating Unknown</span>
				);
		}

	}


	render(){

		let optionsArray = (this.state.currentQuestion ? this.state.currentQuestion.incorrect_answers : '' );

		(optionsArray !== '' ? optionsArray.push(this.state.currentQuestion.correct_answer) : '' );

		let answerHandler = this.answerHandler;

        return(

			<div className='quiz-card'>
				<div>
					<h2 align='center'>
						QuizMaster
					</h2>
				</div>

				<div className='card'>
				{
					// after last question this will appear and on button click you will be redirected to the home page
					questionCount > 19 ?
					<div align= 'center'>
							<h3>
								Thank You !!
							</h3>
							<Link to='/'>
								<button type='button' onClick= 'document.location= / '>
									Wanna Try Again !!
								</button>
							</Link>
					</div>
					:
					<div>
						<div>
							<div className='w3-light-grey'>
								<div className='w3-yellow dark-progress-bar' style={{height:'24px', width: `${5 * questionCount}${'%'}` }}></div>
							</div>
						</div>
						<div className='card-heading'>
							<h3>
								{`Question  ${questionCount + 1} out of 20`}
							</h3>
							<p>{decodeURIComponent(this.state.currentQuestion.category)}</p>
							{this.findQuestionLevel(this.state.currentQuestion.difficulty)}
						</div>

						<div className='card-data container '>
							<h4>
								{decodeURIComponent(this.state.currentQuestion.question)}
							</h4>
						</div>

						<div className='card-data container'>

							{
								// passing the data to function component to return the MCQ options and the onClick function
								answerOptions({
									optionsArray,
									answerHandler: answerHandler
								})
							}
							{
								// will show the result of the selected answer
								this.state.selectedAnswerIs != '' ?
								<div>
									<h3>{this.state.selectedAnswerIs}</h3>
								</div>
								: ''
							}
							<br/>

							<p>Score: {2.5 * scores} %</p>
							{/* <div className='w3-light-grey'>
								<div className='w3-black dark-progress-bar' style={{height:'24px', width: `${2.5 * scores}${'%'}` }}></div>
							</div> */}
						</div>

					</div>
				}
				</div>
				{
					// the next button
					questionCount <= 19 && this.state.selectedAnswerIs != '' ?
					<div align='center'>
						<button align='center' type='button' id='next-btn' onClick={this.currentQuestion} >
							Next
						</button>
					</div>
					: ''
				}
			</div>
        );
    }
}