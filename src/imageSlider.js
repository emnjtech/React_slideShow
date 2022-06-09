import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

const ImageSlider = ({ images }) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed:3000,

    };
    return (
        <>
            <div>
                <h1>Photo Gallery</h1>
            </div>
            <div>
                <Slider {...settings}>
                    {images.map((photo) => (
                        <div key={photo.id}>
                            <img src={photo.src} alt={photo.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default ImageSlider;
