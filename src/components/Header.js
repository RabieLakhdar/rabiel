import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import Logo from '../assetes/logo.png';


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>RABIEL</h1>
            <header>
                <h1>
                    <Fade bottom cascade><img style={{width:'250px', height:'100px'}} src={Logo} alt='rabiel'></img></Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;