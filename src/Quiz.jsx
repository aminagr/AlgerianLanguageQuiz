import React, { useState } from 'react';
import Question from './Question';
import questions from './questions';

const Quiz = ({ language, difficulty, setStartQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false); // Nouvel état pour désactiver les réponses

  const currentQuestions = questions[language][difficulty];

  const handleAnswer = (index) => {
    if (isDisabled) return; // Empêche l'action si les boutons sont désactivés

    setSelectedAnswer(index);
    const isCorrect = index === currentQuestions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setResult(isCorrect);
    setIsDisabled(true); // Désactive les boutons

    setTimeout(() => {
      setResult(null);
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
      setIsDisabled(false); // Réactive les boutons
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
            selectedAnswer={selectedAnswer}
            isDisabled={isDisabled} // Passe l'état de désactivation
          />
          <p className="question-number">
            Question {currentQuestion + 1} / {currentQuestions.length}
          </p>
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
};

export default Quiz;
