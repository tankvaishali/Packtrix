import { BookOpen, Cpu, Diamond, Heart, Leaf, Settings, ShoppingCart, Utensils } from 'lucide-react';
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { GiMedicinePills } from 'react-icons/gi';
import { MdOutlineSportsSoccer } from 'react-icons/md';

function IndustrySec() {

    const IndustryIcons = [
        {
            title: "Food & Beverage",
            icon: <Utensils size={35} />
        },
        {
            title: "Retail & E-Commerce",
            icon: <ShoppingCart size={35} />
        },
        {
            title: "Health & Beauty",
            icon: <Heart size={35} />
        },
        {
            title: "Electronics & Technology",
            icon: <Cpu size={35} />
        },
        {
            title: "Medical & Pharmaceutical",
            icon: <GiMedicinePills size={35} />
        },
        {
            title: "Automotive & Industrial",
            icon: <Settings size={35} />
        },
        {
            title: "Agriculture",
            icon: <Leaf size={35} />
        },
        {
            title: "Luxury Goods",
            icon: <Diamond size={35} />
        },
        {
            title: "Education & Publishing",
            icon: <BookOpen size={35} />
        },
        {
            title: "Sports & Outdoors",
            icon: <MdOutlineSportsSoccer size={35} />
        }
    ];

    return (
        <>
            <div className="">
                <Container className="industries-section text-center pt-5 pb-4">
                    <h1 className="titlecolor">Industries We Serve</h1>
                    <p className='pera mt-2' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus fuga quod sequi! Doloribus corporis facilis commodi voluptatem error iste?</p>
                    <Row className="justify-content-center mt-4">
                        {IndustryIcons.map((industry, index) => (
                            <div key={index} className='col-lg-2 col-md-3 col-sm-4 col-6 m-sm-2 mt-3 mb-4'>
                                <div className="industry-box shadow h-100 py-3 py-lg-4" data-aos="fade-up"
                                    data-aos-delay={`${index * 250}`} data-aos-duration="2000" data-aos-once="true" >
                                    <div className="industry-icon">{industry.icon}</div>
                                    <h3 className="industry-name">{industry.title}</h3>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default IndustrySec