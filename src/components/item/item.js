import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import './item.css';

export default function Item(props) {
    useEffect(() => {
        {window.scroll(0, 0)}
    })

    return (
        <Container className='item'>
            <Col className='item-card'>
                <div className='item-block-img'>
                    <img src={"./img/" + props.item.img + ".jpg"} alt='' />
                </div>
            </Col>
            <Col className='item-card'>
                <div className='item-block-img'>
                    <img src={"./img/" + props.item.img1 + ".jpg"} alt='' />
                </div>
            </Col>
            <Col className='item-card'>
                <div className='item-block-img'>
                    <img src={"./img/" + props.item.img2 + ".jpg"} alt='' />
                </div>
            </Col>
        </Container>
    )
}