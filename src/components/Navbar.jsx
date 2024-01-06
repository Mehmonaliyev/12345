import React, { useState } from 'react'

function Navbar() {

    const [isFalse, setIsFalse] = useState(false);
    const [style, setStyle] = useState('h-l')



    const gamburger = () =>{
        if (isFalse == false) {
            setIsFalse(true)
            setStyle('h-a')
        }else{
            setStyle('h-l')
            setIsFalse(false)
        }
    }

    const closeMenu = ()=>{
        setStyle('h-l')
    }


    return (
        <>
            {/* <div className="cursor-1"></div>
            <div className="cursor-2"></div> */}
            <div id="menu-bars" className="fas fa-bars" onClick={gamburger}></div>


            <header className={style}>

                <a href="#" className="logo"> <span>Ibratjon</span> Mexmonaliyev </a>

                <nav className="navbar1">
                    <a onClick={closeMenu} href="#home">Bosh sahifa</a>
                    <a onClick={closeMenu} href="#about">Men haqimda</a>
                    {/* <a onClick={closeMenu} href="#service">Xizmatlar</a> */}
                    <a onClick={closeMenu} href="#experience">Tajriba</a>
                    <a onClick={closeMenu} href="#portfolio">portfolio</a>
                    <a onClick={closeMenu} href="#contact">Bog'lanish</a>
                </nav>

                <div className="follow">
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100082338764967" className="fab fa-facebook-f"></a>
                    <a target='_blank' href="https://www.instagram.com/admiral.0510/" className="fab fa-instagram"></a>
                    <a target='_blank' href="https://t.me/Ibratjon_M" className="fab fa-telegram"></a>
                </div>

            </header>

        </>
    )
}

export default Navbar
