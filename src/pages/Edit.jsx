import Button from 'react-bootstrap/Button';
import React, { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import html2canvas from 'html2canvas'; 

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeContainerRef = useRef(null);
  const addText = () => {
    setCount(count + 1);
  };

  const saveMemeAsJPG = () => {
    if (memeContainerRef.current) {
      html2canvas(memeContainerRef.current, {
        useCORS: true,
        scale: 2,
      }).then((canvas) => {
        const jpgDataUrl = canvas.toDataURL('image/jpeg', 0.9); 
        const link = document.createElement('a');
        link.href = jpgDataUrl;
        link.download = 'meme.jpg'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
      }).catch((error) => {
        console.error('Error saving meme:', error);
      });
    }
  };

  return (
    <div>
      <div ref={memeContainerRef} style={{ position: 'relative', display: 'inline-block' }}>
        <img
          src={params.get('url')}
          alt="Meme base"
          width={400}
          style={{ display: 'block' }}
        />
        {Array(count).fill(0).map((_, index) => (
          <Text key={index} />
        ))}
      </div>
      <br />
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={saveMemeAsJPG} style={{ marginLeft: '10px' }}>
        Save
      </Button>
    </div>
  );
};

export default Edit;