import { useState } from 'react';
import './ColorConvertor.css';

const ColorConverter = () => {
  const [hexColor, setHexColor] = useState('#');
  const [rgbColor, setRgbColor] = useState('');
  const [error, setError] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');


  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 7) return;     
    setHexColor(value);

    if (value.length === 7) {
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        setError(false);
        const r = parseInt(value.slice(1, 3), 16);
        const g = parseInt(value.slice(3, 5), 16);
        const b = parseInt(value.slice(5, 7), 16);
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
        setBackgroundColor(value);
      } else {
        setError(true);
        setRgbColor('Ошибка');
        setBackgroundColor('#ff0000'); 
      }
    } else {
      setRgbColor(''); 
    }
  };

  return (
    <div 
      className="color-converter" 
      style={{ 
        backgroundColor: backgroundColor
      }}
    >
      <div  className="converter"    
      style={{ 
        backgroundColor: backgroundColor
      }}>
        <h2>Конвертер цветов</h2>
        <input
          type="text"
          value={hexColor}
          onChange={handleChange}
          placeholder="#000000"
          maxLength={7}
          className={`hex-input ${error ? 'input-error' : ''}`}
        />
        <div className="rgb-output">
          {rgbColor}
        </div>
      </div>
    </div>
  );
};

export default ColorConverter;