import './Relogio.css';
import React, {useState} from 'react';

function Relogio() 
{
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  setTimeout(()=>setSeconds(new Date().getSeconds()),1000);
  return (
    <div id="clock">
      
      <div id="clock-name">
        <h1>Clock</h1>
      </div>
      
      <div id="clock-items">
        <div id="clock-item">
          <h1>{String(new Date().getHours()).padStart(2,'0')}</h1>
          <p>Hour</p>
        </div>
        <div id="clock-item"> 
          <h1>{String(new Date().getMinutes()).padStart(2,'0')} </h1>
          <p>Minute</p>
        </div>
        <div id="clock-item">
          <h1>{String(seconds).padStart(2,'0')}</h1>
          <p>Second</p>
        </div> 
      </div>

    </div>
  );
}

export default Relogio;
