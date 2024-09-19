import React from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Footer from './footer';
import Header from './header'; 

function App() {
  const [startQuiz, setStartQuiz] = React.useState(() => {
    const savedStartQuiz = localStorage.getItem('startQuiz');
    return savedStartQuiz ? JSON.parse(savedStartQuiz) : false; // Default to false
  });

  return (
    <>
      <Header />
      <div className="App">
        {startQuiz ? (
          <Quiz setStartQuiz={setStartQuiz} />
        ) : (
          <Home setStartQuiz={setStartQuiz} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
