import React, { FunctionComponent } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// @ts-ignore
export interface StockCarouselProps {}

export const StockCarousel: FunctionComponent<StockCarouselProps> = (props) => {

  // todo do we like this carousel library, lets see how it works 
  return (
  <>
    <CarouselProvider
        naturalSlideWidth={40}
        naturalSlideHeight={10}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  </>)
}

export default StockCarousel
