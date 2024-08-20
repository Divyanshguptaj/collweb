import React from 'react'
import './all.css';

function logo(){
    return(
        <section className="flex_content">
            <figure className="logo fixed_flex">
                <img src="https://i.postimg.cc/02NrFwT5/canva.png" alt="Logo" />
                <figcaption>
                    <strong className="title">Lilliovi</strong> Public School
                </figcaption>
            </figure>
        </section>
    );
}

export default logo;