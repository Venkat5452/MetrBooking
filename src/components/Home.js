import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import mapimg from '../images/HYD-MAP.jpg'
import hyd2 from '../images/MyMetro.jpg'
import hyd3 from '../images/MyMetro1.jpg'
import hyd1 from '../images/hyd3.jpg'


function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 ss"
                    src={hyd1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hyderabad Metro Welcomes You</h3>
                    <p>Inaugarated by Prime Minister Modi on 28November 2017.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 ss"
                    src={hyd3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Metro Station</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 ss"
                    src={hyd2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Good Samaritans</h3>
                    <p>Saving a Precious Life.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className='p-2'>
           <h2 className='pt-3 text-primary'>Hyderabad Metro Map</h2>
		      <img className="w-50" src={mapimg} alt='' />
        </div>
        </>
    );
}

export default Home;