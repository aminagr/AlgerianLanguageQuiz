import React, { useState } from 'react';
import Question from './Question';
import questions from './questions';

const Quiz = ({ language, difficulty, setStartQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const currentQuestions = questions[language][difficulty];

  const handleAnswer = (index) => {
    const isCorrect = index === currentQuestions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setResult(isCorrect);
    setTimeout(() => {
      setResult(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 1000);
  };

  const handleQuit = () => {
    setStartQuiz(false);
  };

  const handleReplay = () => {
    setCurrentQuestion(0);
    setScore(0);
    setStartQuiz(true);
  };

  return (
    <div className="quiz">
      {currentQuestion < currentQuestions.length ? (
        <>
          <h2>Score: {score}</h2>
          <Question 
            question={currentQuestions[currentQuestion]} 
            handleAnswer={handleAnswer} 
            result={result}
          />
          {/* Bouton Quitter visible uniquement sur mobile */}
          <button onClick={handleQuit} className="quit-button-mob">
            <span>{language === 'fr' ? 'Quitter ' : 'Exit '}</span>❌
          </button>
        </>
      ) : (
        <>
          <h2>{language === 'fr' ? 'Quiz terminé! Votre score est:' : 'Quiz finished! Your score is:'} {score}/{currentQuestions.length}</h2>
          
          <button onClick={handleQuit} className="quit-button">
            <span>{language === 'fr' ? 'Quitter ' : 'Exit '}</span>❌
          </button>
          <button onClick={handleReplay} className="replay-button">
            {language === 'fr' ? 'Rejouer' : 'Replay'}
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz; 