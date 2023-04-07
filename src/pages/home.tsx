import Banner from './components/home/banner'
import About from './components/home/about'
import Contact from './components/home/contact'


export default function Home(){
    return (
        <>
            <section className='container-md py-md-5'><Banner err='' /></section>
            <About/>
            <Contact />
        </>
    )
}