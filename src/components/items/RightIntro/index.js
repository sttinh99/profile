import React from 'react';
import './rightIntro.css'

import my from '../../../images/giphy.gif'

export default function RightIntro() {
    return (
        <div className="right">
            <div className="gido">
                <img src={my} alt="avatar"></img>
            </div>
            <div className="text">
                <p className="text-field">If you're just curious about my story, or you just want to grab my résumé, you're in the right spot.</p>
            </div>
        </div >
    );
}
