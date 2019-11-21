import React from 'react';

import {Card, Button} from 'react-bootstrap';

const Cards = () => {
return (
    <div>
<Card>
  <Card.Header as="h5">Feature Card </Card.Header>
  <Card.Body>
    <Card.Title>Special Virus Handler</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="danger">Don't click</Button>
  </Card.Body>
</Card>
<Card>
  <Card.Header>Quote Card</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</div>
);

}

export default Cards;