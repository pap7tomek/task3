import React, {useState} from 'react';
import Form from './components/Form'
import Results from './components/Results'
import {ResultProvider} from './context/resultContext'
function App() {
  const [result, setResult] = useState(null);
  return (
    <div>
      <ResultProvider value={{result, setResult}}>
        <Form />
        <Results />
      </ResultProvider>
    </div>
  );
}

export default App;
