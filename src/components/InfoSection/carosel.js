import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import InfoSection from '.'
import Reviews from './Reviews'
import {
    virtualObjOne,
    virtualObjTwo,
    virtualObjThree,
    virtualObjFour,
    virtualObjFive
} from './Data'

function carosel() {
    return (
        <Carousel>
            <Carousel.Item>
                <Reviews />
            </Carousel.Item>
            <Carousel.Item>
                <Reviews />
            </Carousel.Item>
        </Carousel>
    )
}

export default carosel
