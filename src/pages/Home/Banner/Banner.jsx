import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/banner/01.jpg';
import img2 from '../../../assets/home/banner/02.jpg';
import img3 from '../../../assets/home/banner/03.png';
import img4 from '../../../assets/home/banner/04.jpg';
import img5 from '../../../assets/home/banner/05.png';
import ima6 from '../../../assets/home/banner/06.png';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1}/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;