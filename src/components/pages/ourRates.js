import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap';

import '../page-css/total.css';

export default function OurRates() {
    useEffect(() => {
        {window.scroll(0, 0)}
    })

    return (
        <Container className='total-block' fluid>
            <Row className='total-header'>
                <Col className='total-header-col'>
                    <h2>Our Rates</h2>
                </Col>
            </Row>
            <Row className='total-img-block1'>
                <Col className='total-img'>
                    <div className='total-img-div'>
                        <div>
                            <div>
                                <img src="https://i.pinimg.com/564x/5a/17/d4/5a17d4f69fddc3402c4177958ec2117f.jpg" alt="Kitchen" width="400" height="600" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='total-text'>
                    <p>We offer you price packages of services.
                         When calculating the price, we take into account the entire list of works so that the project can be implemented. Not all customers know the real reason for such a variety of interior design. 
                        This is due to the fact that a designer can do the work superficially and not think about further implementation.
                        <br/><br/>
                        Our team gives a guarantee: a design project by OV2 studio is not only perfect in design, it is feasible. 
                        We take into account all the pitfalls that in most cases appear after ordering an interior design.
                    </p>
                    <div className='tariffs'>
                        <table>
                            <br/>
                            <header>
                                <h3>Tariffs</h3>
                            </header>
                            <tr>
                                <th>Checking and controlling the quality of construction work after each stage.</th>
                                <th>1000$</th>
                            </tr>
                            <tr>
                                <th>Consultation of builders on the solution of certain nodes during the implementation of the project.</th>
                                <th>1000$</th>
                            </tr>
                            <tr>
                                <th>Detailed selection and replacement during the repair of: finishing materials; floor coverings; furniture fittings; electrical fittings; doors, lighting, etc.</th>
                                <th>1000$</th>
                            </tr>
                            <tr>
                                <th>Consultation, selection of decorative items (curtains, carpets, paintings, textiles).</th>
                                <th>1000$</th>
                            </tr>
                            <tr>
                                <th>Discount systems for partners (tiles, plumbing, doors, furniture stores, lighting fixtures).</th>
                                <th>1000$</th>
                            </tr>
                            <tr>
                                <th>Assistance in purchasing construction goods in advance by drawing up procurement schedules</th>
                                <th>1000$</th>
                            </tr>
                        </table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}