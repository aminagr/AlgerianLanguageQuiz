import React, { useState } from 'react';
import Quiz from './Quiz';
import questions from './questions';

const translations = {
  fr: {
    welcome: "Bienvenue dans le quiz de langue algérienne",
    title: "Choisissez votre langue",
    difficultyTitle: "Choisissez le niveau de difficulté",
    level1: "Niveau 1",
    level2: "Niveau 2",
    level3: "Niveau 3",
  },
  en: {
    welcome: "Welcome to the Algerian Language Quiz",
    title: "Choose Your Language",
    difficultyTitle: "Choose Difficulty Level",
    level1: "Level 1",
    level2: "Level 2",
    level3: "Level 3",
  },
};

const Home = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [language, setLanguage] = useState('en'); // Changement de langue par défaut
  const [difficulty, setDifficulty] = useState(null);

  const handleStartQuiz = (level) => {
    setDifficulty(level);
    setStartQuiz(true);
  };

  return (
    <div className="home">
      {!startQuiz ? (
        <>
          <h1 className='welcome'>{translations[language].welcome}</h1> 
          <h2>{translations[language].title}</h2>
          <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <h2>{translations[language].difficultyTitle}</h2>
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
