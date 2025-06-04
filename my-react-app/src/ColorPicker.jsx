import React, { useState } from 'react';

function ColorPicker() {
  
    const [color, setColor] = useState('#000000');

    return( <div className="color-picker-container">
                <h2>Color Picker</h2>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a color:</label>
                <input type="color"
                       value={color}
                       onChange={(e) => setColor(e.target.value)} />
            </div>);
}

export default ColorPicker
