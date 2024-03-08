import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("Akash");
  return (
    <div className='App'>
      <div>This is Our News App By: {name}</div>
    </div>
  );
}

export default App;
