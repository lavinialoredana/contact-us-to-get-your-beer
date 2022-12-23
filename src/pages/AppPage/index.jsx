import { useState } from 'react';
import Email from '../../components/Email';
import Description from '../../components/Description';
import './App.css';

function App() {
const [email, setEmail]=useState('');
const [customerDescription, setCustomerDescription]= useState('');


const onEmailChange=(event)=>{
  setEmail(event.target.value)
}
const onCustomerDescriptionChange=(event)=>{
  setCustomerDescription(event.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ORDER NOW <br /> our selection of punk beers
        </h1>
      </header>
      <Email email={email} handleEmailChange={onEmailChange} />
      <Description
        customerDescription={customerDescription}
        handleCustomerDescriptionChange={onCustomerDescriptionChange}
      />
    </div>
  );
}

export default App;
