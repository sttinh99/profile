import React from 'react';
import './index.css'

import me1 from '../../../images/me1.png'
import me2 from '../../../images/me2.png'
import me3 from '../../../images/me3.png'

export default function Content() {
    return (
        <div className="content">
            <div className="content-1">
                <div className="ct-1-l">
                    <img src={me1} alt="me1" />
                </div>
                <div className="ct-1-r">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages.
                    </p>
                </div>
            </div>
            <div className="content-2">
                <div className="ct-2-l">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages.
                    </p>
                </div>
                <div className="ct-2-r">
                    <img src={me2} alt="me" />
                </div>
            </div>
            <div className="content-3">
                <div className="ct-3-l">
                    <img src={me3} alt="me" />
                </div>
                <div className="ct-3-r">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages.
                    </p>
                </div>
            </div>
        </div >
    );
}
