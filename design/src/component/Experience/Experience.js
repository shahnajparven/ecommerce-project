import React, {useState} from "react";
import './Experience.css';
import Review from "../review/Review";


const Experience = () => {

    return (
        <div className='experience' id="experience">
            <div className="e-left">
                <div className='achievement'>
                    <div className="circle" >8+</div>
                    <span >years </span>
                    <span>Experience</span>
                </div>

                <div className='achievement'>
                    <div className="circle" >50+</div>
                    <span >completed </span>
                    <span>Project</span>
                </div>

                <div className='achievement'>
                    <div className="circle" >5+</div>
                    <span>companies </span>
                    <span>Work</span>
                </div>
            </div>
            <div className="e-right" >
            <Review/>
            </div>
        </div>
    )
}

export default Experience;
