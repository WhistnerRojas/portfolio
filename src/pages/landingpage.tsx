import Nav from './components/nav'
import Home from './home'
import Portfolio from './portfolio'
import React, { useEffect } from 'react'
import {StoreHooks} from '../assets/storeHooks'
import Footer from './components/home/footer'

export default function Landingpage({ viewPage }: { viewPage: string | null }) {

    const {page, setPage, setAuth} = StoreHooks()

    // viewPage !== null && setPage(viewPage)

    const handlePage = (e:React.MouseEvent)=>{
        const clickPage = e.currentTarget.getAttribute('data-nav')
        clickPage && setPage(clickPage);
    }

    useEffect(()=>{

        viewPage !== null && setPage(viewPage)
        page === 'about' && document.querySelector('#intersectsAbout')?.scrollIntoView({behavior: 'smooth'})
        page === 'contact' && document.querySelector('#intersectsContact')?.scrollIntoView({behavior: 'smooth'})

    }, [page])

    return (
        <>
            <Nav click={handlePage}/>
            <main>
                {page !== 'portfolio' && <Home />}
                {page === 'portfolio' && <Portfolio />}
            </main>
            <Footer />
        </>
    )
}