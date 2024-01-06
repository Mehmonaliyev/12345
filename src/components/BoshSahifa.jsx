import React from 'react'

import rasm from '../img/person/3.jpg'

function BoshSahifa() {
    return (
        <>
            <section className="home" id="home">

                <div className="content">
                    <span className="hi"> Salom....</span>
                    <h3> Men <span> Ibratjon Mexmonaliyev </span> </h3>
                    <p className="info"> Men Front-end dasturchiman</p>
                    <p className="text"> Men asosan web saytlar yarataman. </p>
                    <a href="#about" className="btn">Men haqimda</a>
                </div>

                <div className="image">
                    <img src={rasm} alt="rasm"/>
                </div>

            </section>
        </>
    )
}

export default BoshSahifa
