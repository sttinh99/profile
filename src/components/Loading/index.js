import React, { useEffect, useState } from 'react'
import './index.css'

export default function Loading() {
    const [step, setStep] = useState(0)
    useEffect(() => {
        const x = setTimeout(() => {
            setStep(step + 50)
        }, 10)
        if (step === 5000) {
            clearTimeout(x)
        }
        return (() => {
            clearTimeout(x)
        })
    })
    return (
        <div className="loading">
            <div className='loader'></div>
            <svg viewBox="0 0 600 100">
                {/* Symbol*/}
                <symbol id="s-text"><text textAnchor="middle" x="50%" y="50%" dy=".35em">{parseInt(step / 5000 * 100)}%</text></symbol>{/* Duplicate symbols*/}
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
            </svg>
        </div>
    )
}