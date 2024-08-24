import React from 'react'
import './all.css';
// import { MdKeyboardArrowRight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
function main(){
    return(
        // MAIN
        <main>
            {/* <!--division_2--> */}
            <div className="divisions division_2 flex">
                <section className="flex_content padding_2x">
                    <div className="title_header">
                        <h2 className="title medium">Notifications</h2>
                        <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <span className="bar_blue"></span>
                    </div>
                    <div id="notification">

                        {/* <!--notification begining--> */}
                        <a href="/" className="flex">
                            <figure>
                                <img src="https://i.postimg.cc/tJ7PYG7h/02.jpg" alt="" loading="lazy" />
                            </figure>
                            <article>
                                <h3 className="title">Lilliovi simple & cool web designing root way </h3>
                                <p className='m-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...</p>
                                <aside className="fixed_flex">
                                    <span className='flex m-4'>
                                        <SlCalender className='m-1' size={10}/>
                                        12-08-2023
                                    </span>
                                    <span className='flex '>
                                        <FaRegClock className='m-1' size="10"/>
                                        20:38 pm
                                    </span>
                                </aside>
                            </article>
                        </a>

                        {/* <!--notification ends--> */}

                        {/* <!--notification begining--> */}
                        <a href="/" className="flex">
                            <figure>
                                <img src="https://i.postimg.cc/tJ7PYG7h/02.jpg" alt="" loading="lazy" />
                            </figure>
                            <article>
                                <h3 className="title">Lilliovi simple & cool web designing root way </h3>
                                <p className='m-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...</p>
                                <aside className="fixed_flex">
                                    <span className='flex m-4'>
                                        <SlCalender className='m-1' size={10}/>
                                        12-08-2023
                                    </span>
                                    <span className='flex '>
                                        <FaRegClock className='m-1' size="10"/>
                                        20:38 pm
                                    </span>
                                </aside>
                            </article>
                        </a>

                        {/* <!--notification ends--> */}

                        {/* <!--notification begining--> */}
                        <a href="/" className="flex">
                            <figure>
                                <img src="https://i.postimg.cc/tJ7PYG7h/02.jpg" alt="" loading="lazy" />
                            </figure>
                            <article>
                                <h3 className="title">Lilliovi simple & cool web designing root way </h3>
                                <p className='m-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...</p>
                                <aside className="fixed_flex">
                                    <span className='flex m-4'>
                                        <SlCalender className='m-1' size={10}/>
                                        12-08-2023
                                    </span>
                                    <span className='flex '>
                                        <FaRegClock className='m-1' size="10"/>
                                        20:38 pm
                                    </span>
                                </aside>
                            </article>
                        </a>

                        {/* <!--notification ends--> */}

                        {/* <!--notification begining--> */}
                        <a href="/" className="flex">
                            <figure>
                                <img src="https://i.postimg.cc/tJ7PYG7h/02.jpg" alt="" loading="lazy" />
                            </figure>
                            <article>
                                <h3 className="title">Lilliovi simple & cool web designing root way </h3>
                                <p className='m-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...</p>
                                <aside className="fixed_flex">
                                    <span className='flex m-4'>
                                        <SlCalender className='m-1' size={10}/>
                                        12-08-2023
                                    </span>
                                    <span className='flex '>
                                        <FaRegClock className='m-1' size="10"/>
                                        20:38 pm
                                    </span>
                                </aside>
                            </article>
                        </a>

                        {/* <!--notification ends--> */}

                        {/* <!--notification begining--> */}
                        <a href="/" className="flex">
                            <figure>
                                <img src="https://i.postimg.cc/tJ7PYG7h/02.jpg" alt="" loading="lazy" />
                            </figure>
                            <article>
                                <h3 className="title">Lilliovi simple & cool web designing root way </h3>
                                <p className='m-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...</p>
                                <aside className="fixed_flex">
                                    <span className='flex m-4'>
                                        <SlCalender className='m-1' size={10}/>
                                        12-08-2023
                                    </span>
                                    <span className='flex '>
                                        <FaRegClock className='m-1' size="10"/>
                                        20:38 pm
                                    </span>
                                </aside>
                            </article>
                        </a>

                        {/* <!--notification ends--> */}

                    </div>
                </section>

                <section className="flex_content padding_2x" id="event">
                    <div className="title_header">
                        <h2 className="title medium">Events</h2>
                        <p className='mb-5'>With a passion and zeal for the lost and hurting world, our church is looking for ways to build bridges to a cynical and jaded society.</p>
                        <span className="bar_white"></span>
                        <ul className="logo-slider event-slider">
                            <li>
                                <h3 className="title small">Second Anniversary Of Lilliovi</h3>
                                <p className='mb-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...</p>
                                <aside className="fixed_flex">
                                    <span>25<sub>day</sub></span>
                                    <span>11<sub>hrs</sub></span>
                                    <span>30<sub>min</sub></span>
                                    <span>03<sub>sec</sub></span>
                                </aside>
                                <a href="/" className="btn btn_2">Event details</a>
                            </li>
                            <li>
                                <h3 className="title small">Lilliovi At TheWater Mission Award</h3>
                                <p className='mb-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...</p>
                                <aside className="fixed_flex">
                                    <span>25<sub>day</sub></span>
                                    <span>11<sub>hrs</sub></span>
                                    <span>30<sub>min</sub></span>
                                    <span>03<sub>sec</sub></span>
                                </aside>
                                <a href="/" className="btn btn_2">Event details</a>
                            </li>
                            <li>
                                <h3 className="title small">Lilliovi At TheWater Mission Award</h3>
                                <p className='mb-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...</p>
                                <aside className="fixed_flex">
                                    <span>25<sub>day</sub></span>
                                    <span>11<sub>hrs</sub></span>
                                    <span>30<sub>min</sub></span>
                                    <span>03<sub>sec</sub></span>
                                </aside>
                                <a href="/" className="btn btn_2">Event details</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            
            {/* <!--division_4--> */}
            {/* <div className="divisions division_4" onmousemove="animate_balls(event)">
                <div className="title_header">
                    <h2 className="title medium">We promise best future for your kids</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <aside className="fixed_flex">
                        <a href="/" className="btn btn_1">Explore more</a>
                        <MdKeyboardArrowRight className="fa fa-angle-right"/>
                        <a href="/">Gallery Portfolio</a>
                    </aside>
                </div>
                <div className="cards">
                    <span className="ball"></span>
                    <span className="ball"></span>
                    <span className="ball"></span>
                    <span className="ball"></span>
                    <section className="fixed_flex">
                        <figure className="flex_content">
                            <img src="https://i.postimg.cc/0yF7CRkX/01.jpg" alt="" loading="lazy" />
                        </figure>
                        <figure className="flex_content">
                            <img src="https://i.postimg.cc/wBNLff3q/02.jpg" alt="" loading="lazy" />
                        </figure>
                        <figure className="flex_content">
                            <img src="https://i.postimg.cc/7hK2GjtV/03.jpg" alt="" loading="lazy" />
                        </figure>
                        <figure className="flex_content">
                            <img src="https://i.postimg.cc/tCgPQC7m/04.jpg" alt="" loading="lazy" />
                        </figure>
                    </section>
                </div>
            </div> */}
        </main>
    );
}

export default main;