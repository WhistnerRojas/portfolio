import Nav from './components/nav'
import Home from './home'
import Portfolio from './portfolio'
import React, { useEffect } from 'react'
import {StoreHooks} from '../assets/storeHooks'

export default function Landingpage() {

    const {page, setPage, setAuth} = StoreHooks()

    const handlePage = (e:React.MouseEvent)=>{
        const clickPage = e.currentTarget.getAttribute('data-nav')
        clickPage && setPage(clickPage);
    }

    useEffect(()=>{
        
        page === 'about' && document.querySelector('#intersectsAbout')?.scrollIntoView({behavior: 'smooth'})
        page === 'contact' && document.querySelector('#intersectsContact')?.scrollIntoView({behavior: 'smooth'})

    }, [handlePage])

    return (
        <>
            <Nav click={handlePage}/>
            <main>
                {page !== 'portfolio' && <Home />}
                {page === 'portfolio' && <Portfolio />}
            </main>
        </>
    )
}