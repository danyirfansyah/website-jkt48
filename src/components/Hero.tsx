"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        pauseOnHover: true, 
        autoplay: true, 
        autoplaySpeed: 3000, 
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };

    const slideData = [
        {
            id: 0,
            img: "/mng-jogja.png",
        },
        {
            id: 1,
            img: "/playtime.png",
        },
        {
            id: 2,
            img: "/think-donut.png",
        },
        {
            id: 3,
            img: "/pajama-drive.png",
        },
        {
            id: 4,
            img: "/jtrust-bank.png",
        },
        {
            id: 5,
            img: "/jkt-shopee.png",
        },
        {
            id: 6,
            img: "/jkt48v.png",
        },  
        {
            id: 7,
            img: "/valkyrie.png",
        },  
        {
            id: 8,
            img: "/ofc.png",
        },  
        {
            id: 9,
            img: "/tokopedia.png",
        },  
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <div key={item.id}>
                            <Slide
                                img={item.img}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
