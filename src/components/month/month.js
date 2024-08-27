import './month.css'
import React, { useState, useEffect, useRef } from 'react';
import ooty from './ooty.jpg'
import shimla from './shimla.jpg'
import manali from './manali.jpg'


export default function Month(){
    const [isVisible, setIsVisible] = useState(false);
    const servicesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (
                servicesRef.current &&
                window.scrollY + window.innerHeight >=
                    servicesRef.current.offsetTop
            ) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(
        <div className="main" ref={servicesRef}>
            <h1>Top Places to Visit APRIL</h1>
            <div className={`box-main ${isVisible ? 'animate' : ''}`}>
                <div className="box animate-from-left">
                    <img src={ooty} className='ooty' alt='ooty'></img>
                    <h3 className='headb'>OOTY</h3>
                    <p>Cool climate will keep you chilled in ooty</p>
                </div>
                <div className="box animate-from-right">
                <img src={shimla} className='ooty' alt='ooty'></img>
                    <h3 className='headb'>SHIMLA</h3>
                    <p>Himalays will keep your eyes open</p>
                </div>
                <div className="box animate-from-left">
                <img src={manali} className='ooty' alt='ooty'></img>
                    <h3 className='headb'>MANALI</h3>
                    <p>The snow  will take you back to childhood</p>
                </div>
            </div>
        </div>
    )
}