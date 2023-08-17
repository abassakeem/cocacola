import React, { useState } from 'react'
import "./Homepage.css"
import { Button, Col, Container, Image, InputGroup, Row } from 'react-bootstrap'
import Carosel from '../../components/Carosel/Carosel'
import coke from "./../../assets/coke-logo.PNG"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FruitCarosel from '../../components/fruitCarosel/FruitCarousel';
import TextCarosel from '../../components/TextCarousel/TextCarousel';
export default function Homepage() {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);

    
  };

  return (
    <>
   
    <Container fluid className={(index === 1) ? "fanta " : (index ===2) ? "sprite" : "coke"  }>
    <Container fluid  >
    <Navbar className="bg-body-tertiary justify-content-between coke-nav p-0">
      <Form inline>
        <Image src={coke} fluid className='coke-header-logo'/>
      </Form>
      <Form inline>
        <Row>
          
          <Col xs="12" md="12" lg="12">
          <Button variant='outline-light' onClick={onNextClick} className='next'>Next</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </Container>
      <Row>
        <Col xs="12" md="12" lg="4">
         
         
            <Container fluid>
            <FruitCarosel index={index} />
          </Container>
          
          
        </Col>
        <Col xs="4" md="6" lg="4"><TextCarosel index={index} /></Col>
       
       
        <Col xs="8" md="6" lg="4">
          <Carosel index={index} />
        </Col>
      </Row>
    </Container>
    </>
  )
}
