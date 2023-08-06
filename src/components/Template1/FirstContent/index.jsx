import React from "react";
import './style.scss'
import firstImage from '../../../assets/images/photo-1.jpg'

class FirstContent extends React.Component{
    render(){
        return (
            <div className="contentSection" style={{background:`url(${firstImage})`}}>
                <p>Content Here</p>
            </div>
        )
    }
}

export default FirstContent