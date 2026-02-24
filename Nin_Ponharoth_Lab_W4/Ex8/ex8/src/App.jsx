import { useState } from 'react'
import './App.css'

const ColorPicker = ({ onColorChange }) => {
  return <input type="color" onChange={(e) => onColorChange(e.target.value)} />;
};

function App() {
  const [bg, setBg] = useState('#ffffff');

  return (
    <div style={{ backgroundColor: bg, height: '100vh' }}>
      <ColorPicker onColorChange={setBg} />
    </div>
  );
}

export default App
