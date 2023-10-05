import './Letreiro.css';
import React, {useState} from 'react';

var text = "Conheça a Fatec"

function Letreiro() 
{
  const [count, setCount] = useState(0);
  if (count <= text.length) setTimeout(()=>setCount(count + 1),300)
  else setCount(0);
  return (
  <div id = "sign">
    <h1>Sign</h1>
    <p>{text.slice(0,count)}</p>
  </div>
  
  );
}

export default Letreiro;
