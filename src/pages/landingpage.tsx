import Nav from './components/nav'
import Home from './home'
import Portfolio from './portfolio'
import NotFound from './notFound'
import React, { useEffect } from 'react'
import {StoreHooks} from '../assets/storeHooks'
import Footer from './components/home/footer'

export default function Landingpage({ viewPage }: { viewPage: string | null }) {

    // const handlePage = (e:React.MouseEvent)=>{
    //     const clickPage = e.currentTarget.getAttribute('data-nav')
    //     clickPage && setPage(clickPage);
    // }

    useEffect(()=>{

        viewPage === 'about' && document.querySelector('#intersectsAbout')?.scrollIntoView()
        viewPage === 'contact' && document.querySelector('#intersectsContact')?.scrollIntoView()
        viewPage === 'project' && window.scrollTo({top:0})

    }, [viewPage])

    return (
        <>
            <Nav/>
            <main>
                {viewPage === 'home' && <Home />}
                {viewPage === 'about' && <Home />}
                {viewPage === 'project' && <Portfolio />}
                {viewPage === 'contact' && <Home />}
                {viewPage === '404' && <NotFound />}
            </main>
            <Footer />
        </>
    )
}