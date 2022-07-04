import React, {useState} from 'react';



	const QuizComponent = () => {
	const questions = [
		{
			questionText: 'What is the capital of Somalia?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Mogadishu', isCorrect: true },
			],
		},
		{
			questionText: 'What is the population of Somali?',
			answerOptions: [
				{ answerText: 15893219, isCorrect: true },
				{ answerText: 27182911, isCorrect: false },
				{ answerText: 12221091, isCorrect: false },
				{ answerText: 1828918, isCorrect: false },
			],
		},
		{
			questionText: 'What continent is Somalia on?',
			answerOptions: [
				{ answerText: 'Europe', isCorrect: false },
				{ answerText: 'Africa', isCorrect: true },
				{ answerText: 'Asia', isCorrect: false },
				{ answerText: 'North America', isCorrect: false },
			],
		},
		{
			questionText: 'What currency does this country use?',
			answerOptions: [
				{ answerText: 'Somali Dolla', isCorrect: false },
				{ answerText: 'Somali Pound', isCorrect: false },
				{ answerText: 'Somali Shilling', isCorrect: true },
				{ answerText: 'Samali Pesso', isCorrect: false },
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
		<div className='quizapp'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
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
				</>
			)}
		</div>
	);






}

export default QuizComponent




