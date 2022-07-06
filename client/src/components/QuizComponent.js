import React, { useState } from 'react';
import NavBar from "../components/NavBar";




	const QuizComponent = () => {
	const questions = [
		{
			questionText: 'What is the capital of Mexico?',
			answerOptions: [
				{ answerText: 'Mexico Capitales', isCorrect: false },
				{ answerText: 'Tijuana', isCorrect: false },
				{ answerText: 'Cancun', isCorrect: false },
				{ answerText: 'Mexico City', isCorrect: true },
			],
		},
		{
			questionText: 'What is the population of Mexico?',
			answerOptions: [
				{ answerText: "128.9 million", isCorrect: true },
				{ answerText: "69 million", isCorrect: false },
				{ answerText: "142.1 million", isCorrect: false },
				{ answerText: "94.3 million", isCorrect: false },
			],
		},
		{
			questionText: 'How do you say "Hello" in Mexico?',
			answerOptions: [
				{ answerText: 'Konnichiwa', isCorrect: false },
				{ answerText: 'Hola', isCorrect: true },
				{ answerText: 'Salve', isCorrect: false },
				{ answerText: 'Guten Tag', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these landmarks are in Mexico?',
			answerOptions: [
				{ answerText: 'The statue of chihuahua', isCorrect: false },
				{ answerText: 'The great wall of Mexico', isCorrect: false },
				{ answerText: 'Great Pyramid of Cholula', isCorrect: true },
				{ answerText: 'Grande Ben', isCorrect: false },
			],
		},
	];


    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
		return (
		<>
		<NavBar />
			<h1 className='Quiz-title'>Test your knowledge:</h1>
			<h2 className='Quiz-subtitle'>What have you learned today?</h2>
			<p className='Quiz-paragraph'>Below is a four question quiz that will allow you to test your knowledge and see what you can remember about your favourite country! Take your time answering.....there may be a few tricks along the way!.</p>
		<div className='quizapp'>
		
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
				
			
			) : ( 
				<>	
				
				<div className='border'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
						
					</div>	
					</div>
					<img className="quizmaster" src={'https://strikerless.com/wp-content/uploads/2016/02/quizmaster-image.png'} />
				</>
			)}
				</div>
				
				</>
				
	);






}

export default QuizComponent




