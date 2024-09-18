import React from 'react';

const Header = ({ language }) => {
  const translations = {
    fr: "Quiz de Langue Algérienne",
    en: "Algerian Language Quiz",
  };

  return (
    <header className="header">
      <h1>{translations[language]}</h1>
    </header>
  );
};

export default Header;
