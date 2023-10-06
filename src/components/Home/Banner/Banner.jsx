import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Timeless Elegance, <br />Regal Precision</h1>
                    <p>
                    It is more than just a watch store; it's a gateway to a world of timeless elegance and unparalleled craftsmanship. With an exquisite collection of timepieces that embody sophistication and grandeur, we invite you to discover the art of luxurious horology at RegalChronos.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="Banner-img"/>
            </div>
        </div>
    );
};

export default Banner;
