import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

const Header = () => {
    return (
        <header className="header">

            <article className="header__title">
                <Link to='/'> <img className='logo' src="./logo.jpg" alt="" /></Link>
            </article>

            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link" to='/'>
                            <h3>Home</h3>
                        </Link>

                    </li>
                    <li className="header__item">
                        <Link className="header__link" to='/microblading'>
                            <h3>MicroBlading</h3>
                        </Link>

                    </li>
                    <li className="header__item">
                        <a className="header__link" href="https://nataliabonasera.blogspot.com/" target="_blank">
                            <h3>Blog</h3>
                        </a>
                    </li>

                    <li className="header__item">
                        <Link className="header__link" to='/contacto'>
                            <h3>Contacto</h3>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header