import React from 'react';
import './rightIntro.css'

import my from '../../../images/giphy.gif'

export default function RightIntro() {
    return (
        <div className="right">
            <div className="gido">
                <img src={my} alt="avatar"></img>
            </div>
            <div className='text-amination'>
                <p className='t1'>sss sss ss sss sss ss ss sss sss s sss sss sss sss sss ssss s</p>
                <p className='t2'>sss sss ss sss sss ss ss sss sss s sss sss sss sss sss ssss s ss</p>
                <p className='t3'>sss sss ss sss sss ss ss sss sss s sss sss sss sss sss ssss s ss sss</p>
                <p className='t4'>sss sss ss sss sss ss ss sss sss s sss sss sss sss sss ssss s ss sss</p>
            </div>
        </div>
    );
}
