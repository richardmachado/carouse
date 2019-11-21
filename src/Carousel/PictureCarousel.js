import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./PictureCarousel.css";

import jpeg1 from "../assets/1.jpeg";
import jpeg2 from "../assets/2.jpeg";
import jpeg3 from "../assets/3.jpeg";

class PictureCarousel extends Component {
    render() {
        return (
            <Carousel className="thecarousel">
                <div className="pictures">
                    <img src={jpeg1} alt="lilly"/>
                    <p className="legend">Lilly Pads</p>
                </div>
                <div>
                    <img src={jpeg2} alt="lilly"/>
                    <p className="legend">Oranges</p>
                </div>
                <div>
                    <img src={jpeg3} alt="lilly"/>
                    <p className="legend">Pedra da Gavea, Rio De Janeiro, Dusk</p>
                </div>
            </Carousel>
        );
    }
}

export default PictureCarousel;