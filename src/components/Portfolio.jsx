import React from 'react';
import cnn from '../img/webSayt/cnn.png'
import gril from '../img/webSayt/gril.png'
import imkon from '../img/webSayt/imkon.png'

function Portfolio() {
    return (
        <>
            <section className="portfolio" id="portfolio">

                <h1 className="heading">Portfolio </h1>

                <div className="box-container">
                
                    <div className="box">
                        <img src={cnn} alt="" />
                        <h3> project 01 </h3>
                        <div className="icons">
                            <a target='_blank' href="https://cnn-clone-first.netlify.app/" className="fas fa-eye"></a>
                            <a target='_blank' href="https://github.com/Mehmonaliyev/CNN-clone.git" className="fab fa-github"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={gril} alt="" />
                        <h3> project 02 </h3>
                        <div className="icons">
                            <a target='_blank' href="https://restaran-react.netlify.app/" className="fas fa-eye"></a>
                            <a target='_blank' href="https://github.com/Mehmonaliyev/restaran-react.git" className="fab fa-github"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={imkon} alt="" />
                        <h3> project 03 </h3>
                        <div className="icons">
                            <a target='_blank' href="https://imkonuz.netlify.app/" className="fas fa-eye"></a>
                            <a target='_blank' href="https://github.com/Mehmonaliyev/imkon.git" className="fab fa-github"></a>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Portfolio
