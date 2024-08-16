import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

function landingPage(){
    return (
        // HEADER
        <header className="flex">
            <article>
                <h1 className="title big">Welcome to <br/><em>Lilliovi</em> Public School</h1>
                <p>Lilliovi: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="/" className="btn btn_3">Explore more</a>
            </article>
            <section className="flex">
                <aside className="padding_1x">
                    <h2 className="sub_title">Admission</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="/"><MdKeyboardArrowRight/></a>
                </aside>
                <aside className="padding_1x">
                    <h2 className="sub_title">Prospectus</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="/"><MdKeyboardArrowRight/></a>
                </aside>
                <aside className="padding_1x">
                    <h2 className="sub_title">Features</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="/"><MdKeyboardArrowRight/></a>
                </aside>
            </section>
        </header>
    );
}

export default landingPage;