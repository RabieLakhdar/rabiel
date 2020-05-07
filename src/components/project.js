import React,{memo} from "react";
import Fade from 'react-reveal/Fade';

const Project = props => {
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={props.url} target="_blank" rel="noopener noreferrer" title="Rabie, Rabie LAKHDAR if you looking for remote developer">
            <img src={props.imageSrc} alt={props.title} alt="rabiel, rabie lakhdar remote developer"></img>
            </a>
            <h1>{props.title}</h1>
            <span>{props.service}</span>
        </div> 
            </Fade>);
}
 
export default memo(Project);