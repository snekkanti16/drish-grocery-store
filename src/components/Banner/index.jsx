import React from "react";
import './Banner.css';

const Banner = ()=> {
    return (
        <section className="banner" id="banner" style={{
            background: 'url("../image/banner-bg.webp") no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className="content">
                <h3>
                   <span> fresh </span> {' '} 
                   <span> organic </span> {' '} products
                </h3>
                <p>
                    DRISH Grocery Store
                </p>
                <button type="button" className="btn">
                    shop now
                </button>
            </div>
        </section>
    );
}

export default Banner;