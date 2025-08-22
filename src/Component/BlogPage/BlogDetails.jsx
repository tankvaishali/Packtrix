import React from 'react'
import HOC from '../../HOC'

function BlogDetails() {

    const data = [
        { generation: "Gen Z", percent: "73%" },
        { generation: "Millennials", percent: "68%" },
        { generation: "Gen X", percent: "55%" },
        { generation: "Baby Boomers", percent: "42%" },
    ];

    return (
        <><div className='aboutus_bg py-4'>
            <div className='container text-center'>
                <div className='aboutus_content mx-auto'>
                    <div className='text-center'>
                        <h2 className="fw-bold titlecolor" data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">Sustainable Packaging: A Competitive Advantage For Forward-Thinking Businesses
                        </h2>
                    </div>
                    <div className="text-center mt-3 mb-4" data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-once="true">
                        <img
                            src={require('../../assets/images/sustainable packing image.jpg')}
                            alt=""
                            className="img-fluid aboutus_content about_image"
                        />
                    </div>
                    <div>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">Introduction: The Green Shift in Business</h4>
                        <p className='pera'>In today’s marketplace, sustainability is no longer optional—it’s a competitive necessity.
                            Consumers, regulators, and investors increasingly expect companies to adopt eco-friendly
                            practices. Among these, sustainable packaging stands out as a powerful way for
                            businesses to differentiate themselves. Beyond reducing environmental harm, it can unlock
                            cost savings, improve customer loyalty, and open doors to innovation.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">Consumer Demand for Sustainable Packaging</h4>
                        <p className='pera'>Sustainability is not just a buzzword—it’s a purchasing driver. A NielsenIQ study found that
                            78% of consumers value sustainability, and younger generations like Millennials and Gen
                            Z are even more vocal in their expectations. Businesses that ignore this risk losing market
                            share to more responsible competitors.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">Consumer Willingness to Pay More for Sustainability</h4>
                        <div className="table-container my-3">
                            <table className="eco-table">
                                <thead>
                                    <tr className='text-center'>
                                        <th>Generation</th>
                                        <th>Willing to Pay More for Eco-Friendly Packaging</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index} className='text-center'>
                                            <td className='fw-medium'>{row.generation}</td>
                                            <td className='fw-medium'>{row.percent}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p className='pera fw-medium'>(Source : NielsenIQ, 2024)</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">Cost Savings Through Sustainable Materials</h4>
                        <p className='pera'>Contrary to the myth that sustainable packaging is always more expensive, businesses often
                            see long-term cost savings. Lightweight materials reduce shipping costs, and
                            reusable/recyclable options cut down on raw material expenses.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">Enhanced Brand Reputation and Customer Loyalty</h4>
                        <p className='pera'>Businesses embracing sustainability gain brand credibility and loyalty. When companies
                            demonstrate care for the planet, customers reward them with trust and long-term
                            relationships. Patagonia, for instance, has built its reputation on eco-consciousness,
                            fostering unmatched brand loyalty.
                        </p>
                        <p className='pera'>Sustainability isn’t just a values-driven checkbox—it’s a brand equity booster. Transparent
                            environmental practices build consumer trust, drive repeat purchases, and improve brand
                            perception. Publicly committed eco-leaders outperform peers in brand favourability and
                            share-of-wallet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HOC(BlogDetails)