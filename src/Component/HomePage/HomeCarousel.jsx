// import React, { useEffect, useRef, useState } from 'react'
// import '../HomePage/homecarousel.css'
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// const slides = [
//     {
//         image: require("../../assets/images/carouselimages/Corrugated Printed box.png"),
//         title: "Corrugated\nFlexo Printed\nBox",
//         description: "Secure, simple and sustainable"
//     },
//     {
//         image: require("../../assets/images/carouselimages/Corrugated sheets.png"),
//         title: "Corrugated Separators",
//         description: "Packaging that protects"
//     },
//     {
//         image: require("../../assets/images/carouselimages/Printed Corrugated box.png"),
//         title: "Multi Colour Corrugated Packaging",
//         description: "Custom style, corrugated strength"
//     },
//     {
//         image: require("../../assets/images/carouselimages/Pizza Box.jpg"),
//         title: "Custom Food Packaging",
//         description: "Designed to impress,built to protect"
//     }
// ];
// // Clone first slide for infinite effect
// const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

// const HomeCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(1); // Start at the real first slide
//     const [isTransitioning, setIsTransitioning] = useState(true);
//     const intervalRef = useRef(null);

//     const nextSlide = () => {
//         if (currentIndex < loopSlides.length - 1) {
//             setCurrentIndex(prev => prev + 1);
//         }
//     };

//     const prevSlide = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(prev => prev - 1);
//         }
//     };

//     // Auto slide
//     useEffect(() => {
//         intervalRef.current = setInterval(() => {
//             nextSlide();
//         }, 4000);
//         return () => clearInterval(intervalRef.current);
//     }, [currentIndex]);

//     // Handle loop transitions
//     const handleTransitionEnd = () => {
//         if (currentIndex === loopSlides.length - 1) {
//             setIsTransitioning(false);
//             setCurrentIndex(1);
//         }
//         if (currentIndex === 0) {
//             setIsTransitioning(false);
//             setCurrentIndex(loopSlides.length - 2);
//         }
//     };

//     // Re-enable transition after jump
//     useEffect(() => {
//         if (!isTransitioning) {
//             const timeout = setTimeout(() => setIsTransitioning(true), 50);
//             return () => clearTimeout(timeout);
//         }
//     }, [isTransitioning]);

//     return (
//         <div className="carousel-container container-xxl w-100 min-vh-100 vh-100 d-flex align-items-center justify-content-center overflow-hidden"
//             style={{ backgroundImage: 'linear-gradient(70deg, #008a43, #00bcd4)' }}>

//             {/* Image Section */}
//             <div className="image-section">
//                 <div
//                     className="image-track"
//                     style={{
//                         transform: `translateY(-${currentIndex * 100}%)`,
//                         transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
//                     }}
//                     onTransitionEnd={handleTransitionEnd}
//                 >
//                     {loopSlides.map((slide, index) => (
//                         <img key={index} src={slide.image} alt={`Slide ${index}`} className='slideimage' />
//                     ))}
//                 </div>

//                 <div className="p-3 arrow-controls">
//                     <button className="bubbles arrow-btn px-3 bg-dark" onClick={prevSlide}>
//                         <span className="text" style={{ top: "-7px" }}><BsArrowLeft size={24} /></span>
//                     </button>
//                     <button className="bubbles arrow-btn px-3 bg-dark" onClick={nextSlide}>
//                         <span className="text" style={{ top: "-7px" }}><BsArrowRight size={24} /></span>
//                     </button>
//                 </div>
//             </div>

//             {/* Content Section */}
//             <div className="content-section">
//                 <div
//                     className="content-track"
//                     style={{
//                         transform: `translateX(-${currentIndex * 100}%)`,
//                         transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
//                     }}
//                 >
//                     {loopSlides.map((slide, index) => (
//                         <div className="content py-0" key={index}>
//                             <h1 className='display-1 fw-semibold h1slide text-dark text-opacity-75' style={{ textShadow: "2px 2px 1px transparent" }}>{slide.title}</h1>
//                             <p>{slide.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default HomeCarousel;