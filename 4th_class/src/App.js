import { useState } from 'react';
import './App.css'
import Card from './components/cad'
import LeaderCard from './components/leadercard';
function App() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Leader Board</h1>
    <Card className="w-50">
      <input type='text' placeholder='Search user'></input>
      <button className='btn-custom'>Search</button>
    </Card>
    <Card className = "w-50 mt-3">
     <LeaderCard name = {"Waleed"} description={"Programmer"} points="50"/>
    </Card>
    </>
  );
}

export default App;
