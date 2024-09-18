import React, { useState } from 'react';
import Quiz from './Quiz';
import questions from './questions';

const translations = {
  fr: {
    title: "Choisissez votre langue",
    difficultyTitle: "Choisissez le niveau de difficulté",
    level1: "Niveau 1",
    level2: "Niveau 2",
    level3: "Niveau 3",
  },
  en: {
    title: "Choose Your Language",
    difficultyTitle: "Choose Difficulty Level",
    level1: "Level 1",
    level2: "Level 2",
    level3: "Level 3",
  },
};

const Home = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [difficulty, setDifficulty] = useState(null);

  const handleStartQuiz = (level) => {
    setDifficulty(level);
    setStartQuiz(true);
  };

  return (
    <div className="home">
      {!startQuiz ? (
        <>
          <h1>{translations[language].title}</h1>
          <select onChange={(e) => setLanguage(e.target.value)} value={language}>
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
          <h1>{translations[language].difficultyTitle}</h1>
          <button onClick={() => handleStartQuiz('niveau1')}>{translations[language].level1}</button>
          <button onClick={() => handleStartQuiz('niveau2')}>{translations[language].level2}</button>
          <button onClick={() => handleStartQuiz('niveau3')}>{translations[language].level3}</button>
        </>
      ) : (
        <Quiz 
          language={language} 
          difficulty={difficulty} 
          setStartQuiz={setStartQuiz} 
        />
      )}
    </div>
  );
};

export default Home;