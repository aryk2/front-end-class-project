import React, { FunctionComponent } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StockCard from '../stock-card'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}


// @ts-ignore
export interface StockCarouselProps {}

export const StockCarousel: FunctionComponent<StockCarouselProps> = (props) => {
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div><StockCard symbol={'AAPL'}/></div>
        <div><StockCard symbol={'F'}/></div>
        <div><StockCard symbol={'TSLA'}/></div>
        <div><StockCard symbol={'USD'}/></div>
        <div><StockCard symbol={'FDA'}/></div>
        <div><StockCard symbol={'PEN'}/></div>
        <div><StockCard symbol={'GUY'}/></div>

      </Carousel>

    </div>
      
  );
}

export default StockCarousel
