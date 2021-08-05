import React from 'react';
import './rightIntro.css'

import my from '../../../images/giphy.gif'

export default function RightIntro() {
    return (
        <div className="right">
            <div className="gido">
                <img src={my} alt="avatar"></img>
            </div>
            {/* <div className='text-amination'>
                <p className='t1'>qqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                <p className='t2'>pppppppppppppppppppppppppppp</p>
                <p className='t3'>qqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                <p className='t4'>pppppppppppppppppppppppppppp</p>
                <p className='t5'>================================</p>
            </div> */}
        </div>
    );
}
