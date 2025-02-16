"use client";
import React, { useState } from "react";
import { FaBolt, FaCalendarAlt, FaUserFriends, FaCheckCircle, FaTimesCircle, FaMapMarkerAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the default styles of react-datepicker

const Page = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [travellers, setTravellers] = useState(1); // Default to 1 traveler
    const pricePerAdult = 2499;

    // Calculate total price based on number of travelers
    const totalPrice = travellers * pricePerAdult;

    return (
        <div>
            <section>
                <div className="relative w-full h-96 overflow-hidden">
                    {/* Video Background */}
                    <img width="1920" height="1080" className="absolute object-cover aspect-[0.95]" src="/images/land.png" alt="" />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    {/* Text Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mt-20">LIVE LIFE ABOVE</h1>
                        <p className="text-lg md:text-2xl mb-8">
                            Explore your world from a unique 360-degree perspective when you fly a
                            Parajet paramotor
                        </p>
                        <p>Fly Over the Breathtaking Beauty of Pondicherry</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> {/* Adjusted grid for responsiveness */}
                        {/* Left Side - Main Content */}
                        <div className="space-y-4">
                            {/* Title and Price */}
                            <div className="flex flex-col items-start">
                                <h1 className="text-3xl font-bold">Powered Paramotoring in Pondicherry</h1>
                                <div className="flex items-center space-x-2 mt-2">
                                    <div className="flex items-center text-yellow-500">
                                        <span className="text-xl font-semibold">4.5</span>
                                        <span className="ml-1 text-sm">/ 5</span>
                                    </div>
                                    <p className="text-sm text-gray-600">(16 reviews)</p>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    <i className="fas fa-map-marker-alt"></i>Sandune Paradise beach, Pudukuppam, Puducherry 607402
                                </p>
                            </div>

                            {/* Booking Button */}
                            <button className="bg-red-500 text-white font-bold px-4 py-2 rounded">
                                Booking with ₹2499
                            </button>

                            {/* Experience Section */}
                            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                                <h2 className="text-xl font-semibold">What will you experience</h2>
                                <div className="flex flex-col md:flex-row justify-between mt-2 space-y-2 md:space-y-0">
                                    <div className="flex items-center space-x-2">
                                        <img height={40} width={40} src="/images/paraglider.png" alt="Paragliding" />
                                        <p>Upto 10 Mins of Paramotoring</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img height={40} width={40} src="/images/instructor.png" alt="Instructor" />
                                        <p>Certified Instructor</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img height={40} width={40} src="/images/adrenaline.png" alt="Adrenaline" />
                                        <p>Feel the Adrenaline Rush</p>
                                    </div>
                                </div>
                            </div>

                            {/* Activity Info */}
                            <div className="mt-4 ml-4">
                                <div className="flex items-center space-x-2 mb-5">
                                    <img height={15} width={30} src="/images/icon.png" alt="" />
                                    <h2 className="text-xl font-semibold ">Activity</h2>
                                </div>
                                <table className="w-full mt-2 border text-left">
                                    <tbody>
                                        <tr>
                                            <td className="p-2 border">Activity Location</td>
                                            <td className="p-2 border">Bagru, Jaipur</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border">Activity Duration</td>
                                            <td className="p-2 border">20 Mins (Incl. Briefing, Flying)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border">Flying Duration</td>
                                            <td className="p-2 border">10 to 15 KM</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border">Maximum Height</td>
                                            <td className="p-2 border">500-700 feet</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border">Age Limit</td>
                                            <td className="p-2 border">10 to 70 Years</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border">Weight Limit</td>
                                            <td className="p-2 border">15 KG to 100 KG</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border">Morning Timing</td>
                                            <td className="p-2 border">06:00 AM to 10:00 AM</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border">Evening Timing</td>
                                            <td className="p-2 border">03:00 PM to 07:00 PM</td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                            <div className="w-full lg:w-1/3"> {/* Adjusted width for responsiveness */}
                                {/* Package Option */}
                                <div className="bg-white shadow-lg rounded-lg p-4 ">
                                    <div className="flex items-center space-x-2 mb-5">
                                        <img height={15} width={30} src="/images/icon.png" alt="" />
                                        <h2 className="text-xl font-semibold ">Package Option</h2>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 lg:gap-20"> {/* Use flex-col for smaller screens */}
                                        <div className="rounded-md p-3 border-2 border-black w-full md:w-[25rem]"> {/* Use w-full and md:w-[25rem] */}
                                            <h2 className="text-sm font-medium w-60">Powered Paragliding (10 to 15 KM)</h2>
                                            <div className="flex items-center space-y-2 mt-2">
                                                <FaCalendarAlt className="text-gray-600" />
                                                <span>10 Mins</span>
                                            </div>
                                            <div className="text-xl font-bold mt-2">₹ 2499</div>
                                            <p className="text-sm">per person</p>
                                            <div className="mt-3">
                                                <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
                                                    <FaMapMarkerAlt />
                                                    <span>Activity Location</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="ml-0 md:ml-4 bg-gray-100 rounded-md p-4 w-full md:w-auto"> {/*  w-full for smaller screens */}

                                            <ul className="mt-2 text-sm w-full md:w-[50rem]"> {/* Use w-full */}
                                                <li><FaCheckCircle className="inline mr-2 text-green-600" /> 10 to 15 KM (Upto 10 Mins)</li>
                                                <li><FaCheckCircle className="inline mr-2 text-green-600" /> Experienced & Licensed Pilot</li>
                                                <li><FaCheckCircle className="inline mr-2 text-green-600" /> Upto 700 Feet Height</li>
                                                <li><FaTimesCircle className="inline mr-2 text-red-600" /> Any Personal Expenses</li>
                                                <li><FaTimesCircle className="inline mr-2 text-red-600" /> Any Travel Expenses</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                {/* Know Before You Book */}
                                <div className="bg-white shadow-lg rounded-lg p-4">
                                    <h3 className="text-lg font-bold mb-3">Know before you book</h3>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>If you are suffering from bone and joint injuries, disc compression, and osteoporosis, avoid the activity.</li>
                                        <li>People with common health issues like migraine and high blood pressure are also told to inform before flying.</li>
                                        <li>Read and follow instructions given by the pilot who assists you.</li>
                                    </ul>
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4 rounded-md font-medium">
                                        Read More
                                    </button>
                                </div>


                                <div className="bg-white shadow-lg rounded-lg p-4">
                                    <div className="flex items-center space-x-2 mb-5">
                                        <img height={15} width={30} src="/images/icon.png" alt="" />
                                        <h2 className="text-xl font-semibold ">Things to Carry</h2>
                                    </div>

                                    <ul className="list-none space-y-3 w-full">
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            Wear Comfortable Clothes
                                        </li>
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            Long Trousers
                                        </li>
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            Wear Sports Shoes
                                        </li>
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            Sunscreen
                                        </li>
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            Sunglasses
                                        </li>
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            Camera/Phone
                                        </li>
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            Valid ID Proof
                                        </li>
                                        <li className="pl-10 bg-no-repeat" style={{ backgroundImage: "url('https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/bag.svg')" }}>
                                            UA Voucher
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <section className="content-section_wrapper__txVMt faq_faq__jTlNE">
                                <div className="flex items-center space-x-2 mb-5">
                                    <img height={15} width={30} src="/images/icon.png" alt="" />
                                    <h2 className="text-xl font-semibold ">Frequently Asked Questions</h2>
                                </div>
                                <div className="content-section_content__V8aPy ml-4">

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>Is it Safe to Book Powered Paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>
                                                Yes, it is safe to book Powered Paragliding in Jaipur because Universal Adventures is a well-known platform for booking adventure activities like this, and all their ground staff members are experienced with years of experience.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>How can I book Powered Paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>
                                                One can book Powered Paragliding in Jaipur via a trusted platform like Universal Adventures or call on +91-8533812266 to book your slot via phone call.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>What is the Cost of Powered Paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>The Cost of Powered Paragliding in Jaipur starts from INR 2249/- Person.</p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>What is powered paragliding?</b>
                                        </p>
                                        <div>
                                            <p>
                                                Powered paragliding involves flying a paraglider equipped with a small motor (a power unit) that provides thrust, allowing you to stay airborne without relying solely on wind conditions.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>When is the best time to go powered paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>The best time is from October to March when the weather is cooler and more stable.</p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>What is the Age Limit for Powered Paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>The age limit for Powered Paragliding in Jaipur is between 10 to 70 years, depending on the health and fitness of the individual.</p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>What is the Weight Limit for Powered Paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>The weight limit for Powered Paragliding in Jaipur is between 15 to 100 kgs, depending on the health and fitness of the individual.</p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>What is the difficulty level of Powered Paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>The difficulty level of Powered Paragliding in Jaipur is easy to moderate.</p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>What is the best platform to book Powered Paragliding in Jaipur?</b>
                                        </p>
                                        <div>
                                            <p>
                                                The best platform to book Powered Paragliding in Jaipur is through the Universal Adventures Website as they are well known and follow all the safety guidelines to ensure a hassle-free experience.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            background: 'url("https://d26dp53kz39178.cloudfront.net/ua-f-assets/icons/chat-question.svg") no-repeat',
                                        }}
                                    >
                                        <p className="ml-8">
                                            <b>Is Powered Paragliding in Jaipur considered safe for beginners?</b>
                                        </p>
                                        <div>
                                            <p>
                                                Yes, Powered Paragliding in Jaipur is considered safe for beginners, so everyone meeting the basic requirements of Age Limit and Weight Limit and who doesn’t have any medical ailments can go for this activity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Side - Price and Booking */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="space-y-4">
                                <div className="text-red-600 text-3xl font-bold">
                                    -29% <span className="line-through text-gray-500">₹3499</span> ₹2499
                                </div>

                                {/* Book Now Button */}
                                <div className="flex flex-col space-y-4 justify-center items-center">
                                    <button className="bg-red-600 text-white font-bold px-6 py-3 rounded-2xl w-full"> {/* Use w-full */}
                                        Book Now
                                    </button>

                                    {/* Save to Bucket List */}
                                    <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl w-full"> {/* Use w-full */}
                                        Save to Bucket List
                                    </button>
                                </div>

                                {/* Booking Details */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    {/* Title */}
                                    <h2 className="text-lg font-bold mb-4">Bookings details</h2>

                                    {/* Package Type */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <FaBolt className="text-red-500 mr-2" />
                                            <p className="font-semibold text-red-500">Package Type</p>
                                        </div>
                                        <p className="text-gray-500">Powered Paragliding (10 to 15 KM)</p>
                                    </div>

                                    {/* Date Selection */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <FaCalendarAlt className="text-red-500 mr-2" />
                                            <p className="font-semibold text-red-500">Date</p>
                                        </div>
                                        <div className="text-gray-500 w-full"> {/* Add w-full to the div */}
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={(date) => setSelectedDate(date)}
                                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                                placeholderText="Select Date"
                                            />
                                        </div>
                                    </div>

                                    {/* Travelers Selection */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <FaUserFriends className="text-red-500 mr-2" />
                                            <p className="font-semibold text-red-500">Travelers</p>
                                        </div>
                                        <select
                                            value={travellers}
                                            onChange={(e) => setTravellers(parseInt(e.target.value))}
                                            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        >
                                            {[...Array(10).keys()].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Price Calculation */}
                                    <div className="border-t pt-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <p>Price</p>
                                            <p>₹{pricePerAdult}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p>Total Price</p>
                                            <p className="font-bold">₹{totalPrice}</p>
                                        </div>
                                    </div>

                                    {/* Book Now Button */}
                                    <div className="flex justify-center mt-4">
                                        <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-md w-full"> {/* Add w-full */}
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Page;