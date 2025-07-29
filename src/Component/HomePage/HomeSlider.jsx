import React, { useEffect, useRef, useState } from 'react';
import '../HomePage/HomeSlider.css';

const slides = [
    {
        image: require("../../assets/images/carouselimages/corrugated-printed-box.png"),
        title: "Corrugated\nFlexo Printed\nBox",
        tagline: "Secure, simple and sustainable"
    },
    {
        image: require("../../assets/images/carouselimages/corrugated-sheets.png"),
        title: "Corrugated Separators",
        tagline: "Packaging that protects"
    },
    {
        image: require("../../assets/images/carouselimages/printed-corrugated-box.png"),
        title: "Multi Colour Corrugated Packaging",
        tagline: "Custom style, corrugated strength"
    },
    {
        image: require("../../assets/images/carouselimages/pizza-box.jpg"),
        title: "Custom Food Packaging",
        tagline: "Designed to impress, built to protect"
    }
];

function HomeSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const timeoutRef = useRef(null);

    useEffect(() => {
        setFade(true);
        timeoutRef.current = setTimeout(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
            }, 300);
        }, 4000);

        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex]);

    const currentSlide = slides[currentIndex];

    return (
        <div className='container mb-5 mt-4'>
            <div className='homeslider_bg p-4 p-lg-5 rounded-4'>
                <div className='row align-items-center gy-4'>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <div className={`image-glow ${fade ? 'fade-in' : 'fade-out'}`}>
                            <img
                                src={currentSlide.image}
                                className='img-fluid w-100 h-100 object-fit-cover rounded-4'
                                alt="Slide"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 text-white text-center text-lg-start'>
                        <div className={`text-slide ${fade ? 'fade-in-left' : 'fade-out-left'}`}>
                            <h1 className='title-glow mb-3'>
                                {currentSlide.title.split('\n').map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </h1>
                            <p className='tagline text-uppercase'>{currentSlide.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider