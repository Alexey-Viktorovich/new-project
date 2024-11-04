import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import '../page-css/total.css';

export default function About() {
    useEffect(() => {
        {window.scroll(0, 0)}
    })


    return (
        <Container className='total-block' fluid>
            <Row className='total-header'>
                <Col className='total-header-col'>
                    <h2>About</h2>
                </Col>
            </Row>
            <Row className='total-img-block1'>
                <Col className='total-img'>
                    <div className='total-img-div'>
                        <div>
                            <div>
                                <img src="https://kuhni.if.ua/wp-content/uploads/2020/09/james-mcdonald-3d4sSUChunA-unsplash.jpg" alt="Kitchen" width="400" height="600" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='total-text'>
                    <p>
                        Kyiv design studio OV2 was founded by its head Oleksandr Vlasiuk. The main activity of the studio is the creation of interior design for apartments, houses and commercial premises. 
                        The first project was implemented in 2012. We have developed and implemented many successful projects that apply new ideas and concepts, harmoniously combine design, ergonomics, and customer preferences.
                        <br/><br/>
                        We have extensive experience in interior design of houses, apartments, and commercial premises. We create, support, and implement projects on a full turnkey basis with our partners.
                        <br/><br/>
                        We are located in Kyiv, but we carry out design projects all over Ukraine and abroad.
                        <br/><br/>
                        What makes us better than other studios? We have a large portfolio of Before/After implementations with maximum compliance with the developed project. 
                        <br/><br/>
                        We love our work and are looking for an individual approach to each client, trying to make life a little brighter by making your dreams come true in design.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}