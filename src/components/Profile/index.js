import React, { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import './profile.css'

import menu from '../../images/menu.png'
import TextIntro from '../items/TextIntro/TextIntro.js'
import RightIntro from '../items/RightIntro'
import Content from '../items/Content'


export default function Profile() {
    const [className, setClassName] = useState('')
    const showMenu = () => {
        if (className === "show") {
            setClassName('')
            return;
        }
        setClassName('show')
    }
    const onItemClick = (e) => {
        console.log(e);
        console.log(e.currentTarget);
    }
    return (
        <div className="profile" >
            <div className="header">
                <div className="logo">
                    <strong>Chikitori - sttinh99</strong>
                </div>
                <div className="abc"></div>
                <div className="nav-bar">
                    <img src={menu} alt="menu" className={className} onClick={showMenu}></img>
                    <ul className={className}>
                        <li onClick={onItemClick}>About</li>
                        <li onClick={onItemClick}>Resume</li>
                    </ul>
                </div>
            </div>
            <section>
                <div className="top">
                    <div className="top-left">
                        <TextIntro />
                    </div>
                    <div className="top-right">
                        <RightIntro />
                    </div>
                </div>
                <Content />
            </section>
        </div >
    )
}