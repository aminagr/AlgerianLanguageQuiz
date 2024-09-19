import React from 'react';

const Question = ({ question, handleAnswer, result, selectedAnswer, isDisabled }) => {
  return (
    <div className={`question ${result !== null ? (result ? 'fade-in-correct' : 'fade-in-wrong') : ''}`}>
      <h2>{question.question}</h2>
      {question.answers.map((answer, index) => {
        let buttonClass = 'answer-button';

        if (result !== null) {
          // Si c'est la bonne réponse
          if (index === question.correct) {
            buttonClass += ' correct';
          }
          // Si c'est la réponse sélectionnée et incorrecte
          if (!result && index === selectedAnswer) {
            buttonClass += ' wrong'; // Colorie en rouge
          }
        }

        return (
          <button 
            key={index} 
            onClick={() => handleAnswer(index)} 
            className={buttonClass}
            disabled={isDisabled} // Désactive le bouton si isDisabled est vrai
          >
            {answer}
          </button>
        );
      })}
      {result !== null && (
        <p className={result === false ? 'wrong-answer' : 'correct-answer'}>
          {/* Optionnel : afficher un message de feedback */}
        </p>
      )}
    </div>
  );
};

export default Question;
