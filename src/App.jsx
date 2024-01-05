import Button from '@mui/material/Button';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0)
 

  const [interest,setInterest]=useState(0)

console.log(amount,year);

const calculate=(e)=>{
  const output= amount*year/100;
  console.log(output);
  setInterest(output)
}

const reset=(e)=>{
  setAmount(0)
  setYear(0)

  setInterest(0)
}


  return (
    <div className="App">
     <div className="container">
      <div className="header">
        <h1>Discount Calculator</h1>
        
      </div>
      <div className="total">
        <h2> &#8377; {interest} </h2>
        <p>Your Total Amount</p>
      </div>
      <div className="form">
        <form>
          <div className="input">
          <TextField id="outlined-basic" label="Amount" value={amount||""} onChange={(e)=>setAmount(e.target.value)} variant="outlined" />
          <TextField id="filled-basic" label="Discount" value={year||""} onChange={(e)=>setYear(e.target.value)}  variant="outlined" />
    
          </div>
        </form>
      </div>
      <div className="button">
          <Button variant="contained" onClick={e=>calculate(e)}>Discound</Button>
          <Button variant="outlined"  onClick={e=>reset(e)}>Reset</Button>
     </div>
     </div>
     
    </div>
  );
}

export default App;
