import React, { useRef, useState, useCallback } from 'react';
import Draggable from 'react-draggable';

const Text = () => {
  const nodeRef = useRef(null);
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState('Double Tap to Edit'); // Updated default text
  const [textStyle, setTextStyle] = useState({
    fontSize: '16px',
    color: '#000000',
    fontFamily: 'Arial',
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastTap, setLastTap] = useState(0); // For double-tap detection

  const handleStyleChange = useCallback((property, newValue) => {
    setTextStyle((prevStyle) => ({
      ...prevStyle,
      [property]: newValue,
    }));
  }, []);

  const onStop = useCallback((e, data) => {
    setPosition({ x: data.x, y: data.y });
  }, []);

  // Handle tap/click events
  const handleTap = useCallback((e) => {
    e.preventDefault(); // Prevent default mobile behaviors (e.g., zooming)
    const currentTime = new Date().getTime();
    const tapGap = currentTime - lastTap;
    const doubleTapThreshold = 300; // 300ms window for double-tap

    if (tapGap < doubleTapThreshold && tapGap > 0) {
      // Double-tap detected
      if (editable) {
        setValue('Double Tap to Edit'); // Reset text in edit mode
      } else {
        setEditable(true); // Enter edit mode
      }
    } else if (tapGap >= doubleTapThreshold) {
      // Single-tap detected
      if (!editable) {
        setEditable(true); // Enter edit mode on single tap
      }
    }

    setLastTap(currentTime);
  }, [editable, lastTap]);

  return (
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onStop={onStop}
      defaultPosition={{ x: 0, y: 0 }}
      cancel={editable ? 'input, select' : undefined} // Prevent dragging while editing
    >
      <div
        style={{
          display: 'inline-block',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          userSelect: 'none',
        }}
      >
        {editable ? (
          <div>
            <input
              ref={nodeRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => setEditable(false)}
              style={{
                fontSize: textStyle.fontSize,
                color: textStyle.color,
                fontFamily: textStyle.fontFamily,
                border: '1px solid #ccc',
                padding: '4px',
                outline: 'none',
              }}
            />
            <div style={{ marginTop: '8px' }}>
              <label>
                Size:
                <input
                  type="number"
                  min="8"
                  max="100"
                  value={parseInt(textStyle.fontSize)}
                  onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
                  style={{ width: '50px', marginLeft: '5px' }}
                />
              </label>
              <label style={{ marginLeft: '10px' }}>
                Color:
                <input
                  type="color"
                  value={textStyle.color}
                  onChange={(e) => handleStyleChange('color', e.target.value)}
                  style={{ marginLeft: '5px' }}
                />
              </label>
              <label style={{ marginLeft: '10px' }}>
                Font:
                <select
                  value={textStyle.fontFamily}
                  onChange={(e) => handleStyleChange('fontFamily', e.target.value)}
                  style={{ marginLeft: '5px' }}
                >
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Verdana">Verdana</option>
                </select>
              </label>
            </div>
          </div>
        ) : (
          <p
            ref={nodeRef}
            onTouchStart={handleTap} // For mobile touch
            onClick={handleTap} // For desktop click
            style={{
              fontSize: textStyle.fontSize,
              color: textStyle.color,
              fontFamily: textStyle.fontFamily,
              margin: 0,
              padding: '4px',
              cursor: 'move',
              touchAction: 'none', // Prevent default touch behaviors
            }}
          >
            {value}
          </p>
        )}
      </div>
    </Draggable>
  );
};

export default Text;
