import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "../App.css";

export default class Carousel extends React.Component {
    render() {
      return (
        <div className="smaller-box">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={4}
        >
          <Slider className ="slider">
            <Slide index={0}>I am the first Slide.
            <p>the rest of the text goes in here</p>
            </Slide>

            <Slide index={1}>I am the second Slide.
            <p>the second one goes in here</p></Slide>
            
            <Slide index={2}>I am the third Slide.
            <p>the third slide has nothing, it's useless </p></Slide>

            <Slide index={3}>
              I am the 4th Slide.
              <p>period for no reason.</p>
            </Slide>
        
          </Slider>
          <ButtonBack classname="button" >Back</ButtonBack>
        <ButtonNext classname="button">Next</ButtonNext>
        </CarouselProvider>
        </div>
        

      );
    }
  }