import React from 'react'
import rasm from "../img/person/2.jpg";
import samplePDF1 from "../resume/Ibratjon_Resume.pdf";

function MenHaqimda() {

 
    
    return (
        <>

            <section className="about" id="about">

                <h1 className="heading"> Men<span> haqimda </span> </h1>

                <div className="row-1">

                    <div className="image">
                        <img src={rasm} alt="about-img.jpg" />
                    </div>

                    <div className="content">
                        <h3> Mening ismim Ibratjon Mexmonaliyev & Men Front-end dasturchiman</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi error molestias impedit officia!
                            Exercitationem dignissimos esse eos quas nisi impedit delectus, voluptate ullam iste nostrum at.
                            Dolor culpa eaque omnis.</p>
                        <div className="box-container">
                            <div className="box">
                                <p> <span> Yosh : </span> {new Date().getFullYear()- 1998} </p>
                                <p> <span> Jins : </span> Erkak </p>
                                <p> <span> Til : </span> O'zbek </p>
                                <p> <span> Ish : </span>Front-end dasturchisiman</p>
                            </div>
                            <div className="box">
                                <p> <span> freelanserlik : </span> mavjud </p>
                                <p> <span> Tell : </span> +998-94-444-0510 </p>
                                <p> <span> email : </span> <label className='w'>mehmonaliyevibratjon4469@gmail.com</label> </p>
                                <p> <span> Mamlakat : </span> O'zbekiston </p>
                            </div>
                        </div>
                        <a 
                        href={samplePDF1} target="_blank" 
                        rel="noreferrer"
                        className="btn">resumeni ko'rish</a>
                    </div>

                </div>

                <h1 className="heading"> <span> my </span> skills </h1>

                <div className="row-2">

                    <div className="skills">
                        <div><span className="bg ">
                            html
                        </span>
                        </div>
                        <div><span className="bg ">
                            css
                        </span>
                        </div>
                        <div> <span className="bg ">
                            Bootstrap
                        </span>
                        </div>
                        <div> <span className="bg ">
                            Materialize
                        </span>
                        </div>
                        <div><span className="bg ">
                            JavaScript
                        </span>
                        </div>
                        <div><span className="bg ">
                            jQuary
                        </span>
                        </div>
                        <div> <span className="bg ">
                            React
                        </span>
                        </div>
                        <div><span className="bg ">
                            Postgresql
                        </span>
                        </div>
                  
                    </div>

                    <div className="box-container">

                        <div className="box">
                            <h3> {'>>'} 0+ </h3>
                            <p>Yillik Tajriba</p>
                        </div>
                        <div className="box">
                            <h3> {'>>'} 0+ </h3>
                            <p>Baxtli mijozlar</p>
                        </div>
                        <div className="box">
                            <h3> {'>>'} 0+ </h3>
                            <p>Tugallangan loyihalar</p>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default MenHaqimda
