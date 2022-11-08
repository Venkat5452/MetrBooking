import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import mapimg from '../images/HYD-MAP.jpg'

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
                    src="https://www.ltmetro.com/wp-content/uploads/2020/06/Hyderabad-Metro-Rail-Honourable-Prime-Minister-Narendra-Modi-Flags-off-on-28th-November-2017-2.jpg"
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
                    src="https://www.ltmetro.com/wp-content/uploads/2018/10/EvolutionofaMetroStation-StageEight.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Construction Of Station</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 ss"
                    src="https://www.ltmetro.com/wp-content/uploads/2021/02/1612516346320.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Good Samaritans</h3>
                    <p>Saving a Precious Life.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className='p-2 text-center'>
           <h2 className='pt-3 text-primary'>Hyderabad Metro Map</h2>
            <div className='magnify text-center'> 
               <div className='magnified'>
                   <img src={mapimg} className="d-block w-75" alt=''></img>
               </div>
            </div>
        </div>
        </>
    );
}

export default Home;