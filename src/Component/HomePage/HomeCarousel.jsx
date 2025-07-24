import React, { useEffect, useRef, useState } from 'react'
import '../HomePage/homecarousel.css'
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
const loopSlides = [...slides, slides[0]];

const HomeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsTransitioning(true);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        timeoutRef.current = setInterval(nextSlide, 4000);
        return () => clearInterval(timeoutRef.current);
    }, []);

    useEffect(() => {
        if (currentIndex === loopSlides.length - 1) {
            // Wait for transition then reset to 0 without animation
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 1000); // Match CSS transition duration
        }
    }, [currentIndex]);

    return (
        <div className="carousel-container container-xxl" style={{ backgroundImage: 'linear-gradient(70deg, #008a43, #00bcd4)' }}>
            {/* Image Section - Vertical */}
            <div className="image-section">
                <div
                    className="image-track"
                    style={{
                        transform: `translateY(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
                    }}
                >
                    {loopSlides.map((slide, index) => (
                        <img key={index} src={slide.image} alt={`Slide ${index}`} className='' style={{ borderRadius: '0% 0% 44% 0% / 0% 35% 100% 0% ' }} />
                    ))}
                </div>
                <div className="arrow-controls">
                    <button onClick={prevSlide} className="arrow-btn">&#8592;</button>
                    <button onClick={nextSlide} className="arrow-btn">&#8594;</button>
                </div>

            </div>

            {/* Content Section - Horizontal */}
            <div className="content-section">
                <div
                    className="content-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
                    }}
                >
                    {loopSlides.map((slide, index) => (
                        <div className="content" key={index}>
                            <h1 className='display-1 fw-semibold h1slide'>{slide.title}</h1>
                            <p>{slide.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;