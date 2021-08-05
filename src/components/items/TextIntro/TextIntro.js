import React from 'react';

import './card.css'

export default function TextIntro() {
    return (
        <div className='card'>
            <ul className="Words">
                <li className="Words-line">
                    <p>&nbsp;</p>
                    <p style={{ color: "#a2ffad" }}>Hi! I'm Tinh</p>
                </li>
                <li className="Words-line">
                    <p style={{ color: "#a2ffad" }}>Hi! I'm Tinh</p>
                    <p>Welcome</p>
                </li>
                <li className="Words-line">
                    <p>Welcome</p>
                    <p>To My Page...</p>
                </li>
                <li className="Words-line">
                    <p>To My Page...</p>
                    <p>{'Tada :)))'}</p>
                </li>
                <li className="Words-line">
                    <p>{'Tada :)))'}</p>
                    <p>&nbsp;</p>
                </li>
            </ul>
        </div>
    );
}
