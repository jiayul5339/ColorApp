import './index.css';
import ColorBlock from './ColorBlock';
import ColorSearch from './ColorSearch';
import { useState } from 'react';


function App() {
  
  const [ color, setColor ] = useState('');
 
  return (
    <div className="App">
      <ColorBlock color={color}/>
      <ColorSearch setColor={setColor}/>
    </div>
  );
}

export default App;
