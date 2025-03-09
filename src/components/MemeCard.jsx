import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MemeCard = ({meme}) => {
  const navigate = useNavigate();
  const handleEdit = () =>{
    navigate(`/edit?url=${meme.url}`)
  }
  return (
    <div>
      <Card bg='secondary' style={{ width: '15rem' }}>
        <Card.Img variant="top" src={meme.url} />
          <Card.Body>
            <Card.Title>{meme.title}</Card.Title>
            <Button onClick={handleEdit} variant="info">Edit</Button>
          </Card.Body>
    </Card>
        
    </div>
  )
}

export default MemeCard