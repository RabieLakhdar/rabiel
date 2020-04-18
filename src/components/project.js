import React,{memo} from "react";
import Fade from 'react-reveal/Fade';

const Project = props => {
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img src={props.imageSrc} alt={props.title}></img>
            </a>
            <h1>{props.title}</h1>
            <span>{props.service}</span>
        </div> 
            </Fade>);
}
 
export default memo(Project);