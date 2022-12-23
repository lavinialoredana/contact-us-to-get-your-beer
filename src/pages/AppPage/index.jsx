import { useState } from 'react';
import Email from '../../components/Email';
import './App.css';

function App() {
const [email, setEmail]=useState('');

const onEmailChange=(event)=>{
  setEmail(event.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ORDER NOW <br /> our selection of punk beers
        </h1>
      </header>
      <Email email={email} handleOnEmailChange={onEmailChange} />
    </div>
  );
}

export default App;
