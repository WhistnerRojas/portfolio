import Banner from './components/home/banner'

export default function notFound() {
    return (
        <section className='container-md py-md-5'><Banner err="notFound" /></section>
    )
}