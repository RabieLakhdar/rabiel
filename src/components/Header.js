import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import { Link } from "react-scroll";
import logo from '../assetes/logo.png';


const Header = () => {
        return (<div>
        <h1 className='heading-background'>RABIEL</h1>
            <header>
                <h1>
                    <Fade bottom cascade><img style={{width:'250px', height:'100px'}} src={logo} alt='rabiel'></img></Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
                    <Link
                    to="contact"
                >Contact</Link>
                </p>
            </Fade>
        </div>);
}

export default Header;