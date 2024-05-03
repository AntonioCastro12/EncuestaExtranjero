import React from 'react'
import './styles/SummaryItem.css'
const SummaryItem = ({icon, title, score}) => {
    return (
            <article className='summary'>
                <header className='summary__header'>
                    <img className='summary__icon' src={icon} alt="" />
                    <h3 className='summary__title'>{title}</h3>
                </header>
                <footer className='summary__footer'>
                    <span className='summary_score'> {score} </span>
                    <span className='summary__base'> 100</span>
                </footer>
            </article>
    )
}

export default SummaryItem
