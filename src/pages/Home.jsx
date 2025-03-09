import React, { useEffect, useState } from 'react';
import MemeCard from '../components/MemeCard';
import { Container, Row, Col } from 'react-bootstrap';

export const Home = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setMemes(data.data.memes))
      .catch(error => console.error('Error fetching memes:', error)); 
  }, []);

  return (
    <Container>
      <Row className="g-4">
        {memes.map(mem => (
          <Col key={mem.id} xs={12} sm={6} md={4} lg={3}>
            <MemeCard meme={mem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
