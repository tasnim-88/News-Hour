import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playGroundImg from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold'>Q-Zone</h1>
            <div>
                <img src={swimmingImg} alt="swimmingImg" />
                <img src={classImg} alt="classImg" />
                <img src={playGroundImg} alt="playGroundImg" />
            </div>
        </div>
    );
};

export default Qzone;