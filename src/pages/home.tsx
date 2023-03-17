import Banner from './components/home/banner'
import About from './components/home/about'

export default function Home(){
    return (
        <>
            <section className='container-md py-md-5'><Banner /></section>
            <About/>
        </>
    )
}