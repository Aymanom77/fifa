import React from 'react';
import { Card } from 'react-bootstrap';

function Player({ nom, equipe, nationalite, numero_maillot, age, image }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          Équipe: {equipe}<br />
          Nationalité: {nationalite}<br />
          Numéro de maillot: {numero_maillot}<br />
          Âge: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;
