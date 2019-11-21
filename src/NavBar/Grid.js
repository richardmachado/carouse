
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Grid = (props) => {

  
    return (
     <div>
       <Container>
  <Row>
    <Col md={4}>Grid</Col>
    <Col md={{ span: 4, offset: 4 }}>Top Right</Col>
  </Row>
  <Row>
    <Col md={{ span: 3, offset: 3 }}>Center Middle</Col>
    <Col md={{ span: 3, offset: 3 }}>Grid</Col>
  </Row>
  <Row>
    <Col md={{ span: 6, offset: 3 }}>Grid</Col>
  </Row>
</Container>
     </div>




    );
  }


  
  

export default Grid;