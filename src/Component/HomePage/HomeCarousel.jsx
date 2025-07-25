import React, { useEffect, useRef, useState } from 'react'
import '../HomePage/homecarousel.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
const slides = [
    {
        image: require('../../assets/images/carouselimages/corrugated printed boxes.png'),
        title: 'Luxury Box Packaging',
        description: 'Elevate your brand with our exquisite luxury box packaging. Perfect for high-end products and special occasions.',
    },
    {
        image: require('../../assets/images/carouselimages/corrugated sheets.png'),
        title: 'Eco-Friendly Pouches',
        description: 'Sustainable and customizable pouches made from recycled materials. Ideal for food, cosmetics, and more.',
    },
    {
        image: require('../../assets/images/carouselimages/printed corrugated box.png'),
        title: 'Custom Printed Bags',
        description: 'Personalized bags to enhance brand visibility. Available in various sizes and materials with vibrant printing options.',
    },
];
// Clone first slide for infinite effect
const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

const HomeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the real first slide
    const [isTransitioning, setIsTransitioning] = useState(true);
    const intervalRef = useRef(null);

    const nextSlide = () => {
        if (currentIndex < loopSlides.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Auto slide
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(intervalRef.current);
    }, [currentIndex]);

    // Handle loop transitions
    const handleTransitionEnd = () => {
        if (currentIndex === loopSlides.length - 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        }
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(loopSlides.length - 2);
        }
    };

    // Re-enable transition after jump
    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    return (
        <div className="carousel-container container-xxl w-100 min-vh-100 vh-100 d-flex align-items-center justify-content-center overflow-hidden"
            style={{ backgroundImage: 'linear-gradient(70deg, #008a43, #00bcd4)' }}>

            {/* Image Section */}
            <div className="image-section">
                <div
                    className="image-track"
                    style={{
                        transform: `translateY(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {loopSlides.map((slide, index) => (
                        <img key={index} src={slide.image} alt={`Slide ${index}`} className='slideimage' />
                    ))}
                </div>

                <div className="p-3 arrow-controls">
                    <button className="bubbles arrow-btn px-3 bg-dark" onClick={prevSlide}>
                        <span className="text" style={{ top: "-7px" }}><BsArrowLeft size={24} /></span>
                    </button>
                    <button className="bubbles arrow-btn px-3 bg-dark" onClick={nextSlide}>
                        <span className="text" style={{ top: "-7px" }}><BsArrowRight size={24} /></span>
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div
                    className="content-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
                    }}
                >
                    {loopSlides.map((slide, index) => (
                        <div className="content py-0" key={index}>
                            <h1 className='display-1 fw-semibold h1slide text-dark text-opacity-75' style={{ textShadow: "2px 2px 1px transparent" }}>{slide.title}</h1>
                            <p>{slide.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default HomeCarousel;