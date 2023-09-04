/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Slider, { Settings } from "react-slick";
import './carousel.css';

const MyCarousel = ({ data = [] as modelImage[], ...props }) => {

    const createCarouselItemImage = (index: number, image: modelImage, options = {}) => {
        return (
            <div key={index}>
                <img srcSet={`${image?.url} 2x`} title={image.title} alt={image.alt} />
            </div>
        )
    };

    const baseChildren = <div>{data?.map((res: modelImage, index: number) => createCarouselItemImage(index, res))}</div>;

    return (
        <Slider {...settings} {...props}>
            {baseChildren.props.children}
        </Slider>
    );
};

export default MyCarousel;

function SampleNextArrow({ ...props }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: '0', zIndex: '99', transform: 'translateX(-10px)' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow({ ...props }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: '0', zIndex: '99' }}
            onClick={onClick}
        />
    );
}

const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <SampleNextArrow className={''} />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

export interface modelImage {
    url: string;
    title: string;
    alt: string
}