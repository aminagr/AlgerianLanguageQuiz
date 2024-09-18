import React from 'react';
import Home from './Home';
import Quiz from './Quiz';

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);
  
  return (
    <div className="App">
      {startQuiz ? <Quiz setStartQuiz={setStartQuiz} /> : <Home setStartQuiz={setStartQuiz} />}
    </div>
  );
}

export default App;