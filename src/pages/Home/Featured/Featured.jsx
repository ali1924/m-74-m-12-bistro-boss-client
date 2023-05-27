import React from 'react';
import './Featured.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured/featured.jpg';
import { Parallax, Background } from 'react-parallax';


const Featured = () => {
    return (
            <Parallax
        blur={{ min: -100, max: 100 }}
        bgImage={featuredImg}
        bgImageAlt="the dog"
        strength={-200}
    >
            <div className='text-white pt-8 my-20 bg-slate-500 bg-opacity-50'>
                <SectionTitle
                    subHeading={`---Check it out---`}
                    heading={`FROM OUR MENU`}
                ></SectionTitle>
                <div className='md:flex justify-center items-center py-20 px-36 '>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='md:ml-10 space-y-1'>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                    </div>
                </div>
            </div>
    </Parallax>
    );
};

export default Featured;