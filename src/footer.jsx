import React from 'react';

const Footer = ({ language }) => {
  const translations = {
    fr: "Contact: Développé par Amina",
    en: "Contact: Developed by Amina",
  };

  return (
    <footer className="footer">
      <p>{translations[language]}</p>
    </footer>
  );
};

export default Footer;
