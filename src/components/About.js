import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import aboutP from '../assetes/rabiel.png';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>Who Am I?</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img style={{width:'600px', height:'600px'}} src={aboutP} alt='rabiel'></img> : null}
            

        </div>  );
    }
}
 
export default About;