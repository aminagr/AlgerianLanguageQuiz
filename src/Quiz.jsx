import React, { useState } from 'react';
import Question from './Question';
import questions from './questions';

const translations = {
  fr: {
    quizFinished: 'Quiz terminé! Votre score est:',
    exit: 'Quitter',
    replay: 'Rejouer',
    score: 'Score:',
  },
  en: {
    quizFinished: 'Quiz finished! Your score is:',
    exit: 'Exit',
    replay: 'Replay',
    score: 'Score:',
  },
  es: {
    quizFinished: '¡Quiz terminado! Tu puntuación es:',
    exit: 'Salir',
    replay: 'Repetir',
    score: 'Puntuación:',
  },
  it: {
    quizFinished: 'Quiz terminato! Il tuo punteggio è:',
    exit: 'Esci',
    replay: 'Rigiocare',
    score: 'Punteggio:',
  },
  ru: {
    quizFinished: 'Викторина завершена! Ваш результат:',
    exit: 'Выход',
    replay: 'Перезапуск',
    score: 'Результат:',
  },
};

const Quiz = ({ language, difficulty, setStartQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const currentQuestions = questions[language][difficulty];

  const handleAnswer = (index) => {
    if (isDisabled) return;

    setSelectedAnswer(index);
    const isCorrect = index === currentQuestions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setResult(isCorrect);
    setIsDisabled(true);

    setTimeout(() => {
      setResult(null);
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
      setIsDisabled(false);
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
          <p className="question-number">
            {language === 'fr' ? 'Question' : language === 'es' ? 'Pregunta' : language === 'it' ? 'Domanda' : language === 'ru' ? 'Вопрос' : 'Question'} {currentQuestion + 1} / {currentQuestions.length}
          </p>
          <Question 
            question={currentQuestions[currentQuestion]} 
            handleAnswer={handleAnswer} 
            result={result}
            selectedAnswer={selectedAnswer}
            isDisabled={isDisabled}
          />
          <h2>{translations[language].score} {score}</h2>
          <button onClick={handleQuit} className="quit-button-mob">
            <span>{translations[language].exit}</span>❌
          </button>
        </>
      ) : (
        <>
          <h2>{translations[language].quizFinished} {score}/{currentQuestions.length}</h2>
          <button onClick={handleQuit} className="quit-button">
            <span>{translations[language].exit}</span>❌
          </button>
          <button onClick={handleReplay} className="replay-button">
            {translations[language].replay}
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
