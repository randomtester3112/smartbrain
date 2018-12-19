import React from 'react';
import './Logo.css';
import LogoImage from './Logo.png';
import 'tachyons';
import Tilt from 'react-tilt'

const Logo=()=>{
    return(
        <div className='ma4 mt0'>
           <Tilt className="Tilt br2 shadow-2" options={{ max : 55  }} style={{ height: 110, width: 110 }} >
                <div className="Tilt-inner"> 
                    <img src={LogoImage} style={{paddingTop:'22px'}} alt='Logo' />
                </div>
           </Tilt>
        </div>
    )
}

export default Logo;