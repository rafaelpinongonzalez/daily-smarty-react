import React, { Component } from 'react';
import Imagen from '../logo.png';


class Logo extends Component {
    render() {
        return (
            <div className="logo-main">
                <img src={Imagen} alt='daily smarty ui image logo big' />
            </div>
        )
    }
}

export default Logo;







