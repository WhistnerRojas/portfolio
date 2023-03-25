import Banner from './components/home/banner'
import About from './components/home/about'
import Contact from './components/home/contact'
import Footer from './components/home/footer'

export default function Home(){
    return (
        <>
            <section className='container-md py-md-5'><Banner /></section>
            <About/>
            <Contact />
            <Footer />
        </>
    )
}