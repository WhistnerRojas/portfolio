import '../css/about.css'
import Profile from '../../img/dp.png'
import React, { useEffect, useState } from 'react';
import AboutComp from '../about/aboutComp';

export default function About(): JSX.Element {


    useEffect(()=>{
        const aboutIntersect = document.querySelector('#intersectsAbout')
        const bodyScrollChange = document.querySelectorAll('boyd')
        const aboutTarget = document.querySelectorAll('.about > *')

        const aboutOption = {}

        const aboutTochange = new IntersectionObserver((entries, aboutOption )=>{
            entries.forEach(entry =>{
                if(entry.isIntersecting ){
                    aboutTarget[0]?.classList.add('appear')
                    console.log(aboutTarget[0])
                }
            })
        })

        if (aboutIntersect) {
            aboutTochange.observe(aboutIntersect)
        }

    }, [])
    
    return (
        <section className="pt-md-5 bg-primary my-5" id='intersectsAbout'>
            <h2 className='container-md'>{'<'} About {'>'}</h2>
                <div className="about">
                <AboutComp className="opacity-100" p='Passion for creating exceptional web applications. With experience in both front-end and
                back-end development, I have built up a good foundation in HTML, CSS, JavaScript, as well as in PHP.' 
                img={Profile} flex='flex-lg-row-reverse' />
                <AboutComp p='Passion for creating exceptional web applications. With experience in both front-end and back-end development, I have built up a good foundation in HTML, CSS, JavaScript, as well as in PHP.' img={Profile} flex='flex-lg-row'/>
                <AboutComp p='Passion for creating exceptional web applications. With experience in both front-end and back-end development, I have built up a good foundation in HTML, CSS, JavaScript, as well as in PHP.' img={Profile} flex='flex-lg-row-reverse'/>
                </div>
            <h2 className='container-md text-end pb-4'>{'<'} About {'/>'}</h2>
        </section>
    )
}