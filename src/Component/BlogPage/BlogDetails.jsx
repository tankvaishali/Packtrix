import React from 'react'
import HOC from '../../HOC'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoMdCheckbox } from 'react-icons/io';

function BlogDetails() {

    const data = [
        { generation: "Gen Z", percent: "73%" },
        { generation: "Millennials", percent: "68%" },
        { generation: "Gen X", percent: "55%" },
        { generation: "Baby Boomers", percent: "42%" },
    ];

    const MaterialsData = [
        {
            materialType: "Mycelium (mushroom)",
            description: "Biodegradable, compostable, sturdy",
            brands: "IKEA, Dell"
        },
        {
            materialType: "Seaweed-based Films",
            description: "Edible, dissolvable, plastic alternative",
            brands: "Notpla, Evoware"
        },
        {
            materialType: "Recycled Corrugated/Paper",
            description: "Lightweight, printable, recyclable",
            brands: "Amazon, Zara"
        },
        {
            materialType: "PLA Bioplastics",
            description: "Corn-based, biodegradable under conditions",
            brands: "Coca-Cola (PlantBottle)"
        },
    ]

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
                                    <tr className='text-center pera'>
                                        <th>Generation</th>
                                        <th>Willing to Pay More for Eco-Friendly Packaging</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index} className='text-center pera'>
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
                    <div>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">🧠 Did You Know?</h4>
                        <p className='pera'>64% of global consumers say a brand’s position on environmental sustainability influences their loyalty.
                            <div className='fw-medium'>(Source : Capgemini Research Institute)</div>
                        </p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">🧪 Innovative Materials to Watch:</h4>
                        <div className="table-container my-3 overflow-hidden">
                            <table className="eco-table">
                                <thead>
                                    <tr className='text-center pera'>
                                        <th>Material Type</th>
                                        <th>Description</th>
                                        <th>Brands Using It</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MaterialsData.map((row, index) => (
                                        <tr key={index} className='text-center pera'>
                                            <td className='fw-medium'>{row.materialType}</td>
                                            <td className='fw-medium'>{row.description}</td>
                                            <td className='fw-medium'>{row.brands}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">🏆 Case Studies : Sustainable Packaging in Action</h4>
                        <div className='mt-2'>
                            <h5 className='fw-bold titlecolor' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">📦 Patagonia : Minimalism Meets Ethics</h5>
                            <p className='pera'>Patagonia has eliminated plastic wherever possible, switching to 100% recycled polybags and corrugated boxes. Their packaging highlights their environmental mission, reinforcing customer loyalty and reducing waste.
                            </p>
                        </div>
                        <div>
                            <h5 className='fw-bold titlecolor' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">🍫 Alter Eco : Compostable Chocolate Wrappers</h5>
                            <p className='pera'>This premium chocolate brand uses fully compostable wrappers made from eucalyptus and birch. The initiative elevated their brand identity and cut their carbon footprint by 40%.
                            </p>
                        </div>
                        <div>
                            <h5 className='fw-bold titlecolor' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">🛍 IKEA : From Foam to Fungi</h5>
                            <p className='pera'>IKEA replaced Styrofoam with mushroom-based packaging for furniture products. The shift cut waste and added to their sustainability narrative, strengthening investor confidence.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 className='fw-bold titlecolor' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true">🧠 The Competitive Edge: Strategic Impacts of Sustainable Packaging</h4>
                        <div className='pera fw-medium'>Adopting sustainable packaging goes beyond feel-good branding. It directly influences :
                        </div>
                        <div>
                            <div className='pera mt-2'><MdKeyboardDoubleArrowRight /> Regulatory Compliance : Stay ahead of government bans and taxes on plastics.</div>
                            <div className='pera mt-1'><MdKeyboardDoubleArrowRight /> Market Expansion : Meet international sustainability standards and certifications.</div>
                            <div className='pera mt-1'><MdKeyboardDoubleArrowRight /> Investor Appeal : ESG-focused funds prefer brands with circular economy initiatives.</div>
                            <div className='pera mt-1'><MdKeyboardDoubleArrowRight /> Differentiation : In crowded markets, green packaging becomes a clear USP.</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div>
                            <h4 className='fw-bold titlecolor' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true"><IoMdCheckbox className='fs-2' style={{ color: "#008a43" }} /> Conclusion : A Green Strategy Is a Growth Strategy</h4>
                        </div>
                        <div className='pera'>Sustainable packaging isn’t just a moral imperative—it’s a market imperative. It shapes customer perception, slashes costs, fuels innovation, and opens new growth avenues. For forward-thinking business leaders, embracing eco-friendly packaging isn’t a question of “if”—it’s “how soon.”</div>
                        <div className='pera fw-medium mt-2'>Action Step :</div>
                        <div className='pera mt-1'>Audit your current packaging. Identify elements you can swap for sustainable alternatives and calculate the ROI—not just in savings, but in customer goodwill, brand equity, and long-term resilience.</div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default HOC(BlogDetails)