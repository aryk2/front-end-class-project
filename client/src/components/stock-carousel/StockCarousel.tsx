import React, { FunctionComponent } from 'react'
import Carousel from 'react-multi-carousel';
// @ts-ignore
import 'react-multi-carousel/lib/styles.css';
import StockCard from '../stock-card'
import {favoriteItem} from '../../models/favoriteItem'
import {PageProps} from '../../models/pageProps'

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
export interface StockCarouselProps extends PageProps{
  favoriteItems: favoriteItem[]

}

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
        {
          props.favoriteItems ?
            props.favoriteItems.map((favorite, index) => {
              return (
                <div id={String(index)}><StockCard symbol={favorite.symbol} handleStockSearch={props.searchProps.handleSearchStock}/></div>
              )
            })
          :
            []
        }
      </Carousel>

    </div>
      
  );
}

export default StockCarousel
