import React from 'react';

const Question = ({ question, handleAnswer, result }) => {
  return (
    <div className={`question ${result !== null ? (result ? 'fade-in-correct' : 'fade-in-wrong') : ''}`}>
      <h2>{question.question}</h2>
      {question.answers.map((answer, index) => {
        let buttonClass = 'answer-button';

        if (result !== null) {
          if (index === question.correct) {
            buttonClass += ' correct';
          } else if (result === false && index === question.correct) {
            buttonClass += ' correct';
          } else if (result === false && index !== question.correct) {
            buttonClass += ' wrong';
          }
        }

        return (
          <button 
            key={index} 
            onClick={() => handleAnswer(index)} 
            className={buttonClass}
          >
            {answer}
          </button>
        );
      })}
      {result !== null && (
        <p className={result === false ? 'wrong-answer' : 'correct-answer'}>
        
        </p>
      )}
    </div>
  );
};

export default Question;
