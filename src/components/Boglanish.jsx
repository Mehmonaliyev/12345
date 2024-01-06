import React from 'react'

function Boglanish() {
    return (
        <>
            <section className="contact" id="contact">

                <h1 className="heading"> bog'lanish </h1>

                <div className="icons-container">

                    <div className="icons">
                        <i className="fas fa-envelope"></i>
                        <h3>email</h3>
                        <p className="w">mehmonaliyevibratjon4469@gmail.com</p>
                        <p className="w">mexmonaliyevibratjon@gmail.com</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-phone"></i>
                        <h3>Tell</h3>
                        <p>+99894-444-0510</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Manzil</h3>
                        <p>O'zbekiston, Farg'ona viloyati, Beshariq tumani, Nabi MFY</p>
                    </div>

                </div>

                <div className="row">

                    <form >

                        <input type="text" placeholder="Ism" className="box" />
                        <input type="email" placeholder="Familya" className="box" />
                        <input type="number" placeholder="Tell" className="box" />

                        <textarea name="" placeholder="Xabar" id="" cols="30" rows="10"></textarea>

                        <input type="submit" className="btn" value="Xabar yuborish" />

                    </form>


                </div>
                {/* xarita */}

                <div className='w-100' ><iframe className='w-100'
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=40.44606815165732,%2070.6752111067183+(Uy)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                        href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
                </div>
            </section>


        </>
    )
}

export default Boglanish
