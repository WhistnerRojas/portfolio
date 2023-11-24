import React , {useState, useEffect} from 'react'
import Picture from '../../img/dp.png'
import Err from '../../img/err.png'
import Social from './socialLink'
import './../css/banner.css'

export default function Banner({err}:any) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);    

    return (
        <div className={`d-flex flex-column justify-content-center align-items-center py-md-5 home ${isVisible ? 'visible' : ''}`}>
            <div className="border border-5 border-primary rounded-3 w-100 px-2 m-5 bg-dark">
                <div className="row">
                    <div className="col d-flex justify-content-between p-0 rounded-top border-bottom border-primary bg-primary">
                        <span className="fs-5 text-start p-2">Welcome to my Website!</span>
                        <span className="fs-5 text-danger text-end noclose p-2">X</span>
                    </div>
                    <div className="row m-0 flex-md-row flex-column align-items-center justify-content-md-evenly py-5 flex-column-reverse flex-md-row bg-opacity-50 rounded-bottom">
                        <div className={`col-md-6 text-md-${err !== 'notFound' ? 'start' : 'center'} text-center d-flex flex-column justify-content-center`}>
                            {err !== 'notFound' ? <><p className="fs-4 pt-3 pt-md-0 lh-lg font-monospace"><span className="fs-1">Hi!</span> I am <span className="fs-1">Whistner</span> a</p>
                            <p className="fs-1 font-monospace">Jr. Full Stack Web Developer</p>
                            <p className='font-monospace fs-4'>Based in the Philippines, the Pearl of the East!</p></> : <><h1>404</h1><p className='fs-4'>Oooops! Page not found!</p></>}
                            <Social />
                        </div>
                        <div className="col-md-4 dp py-md-4 d-flex justify-content-center">
                            <img className='w-75' src={err !== 'notFound' ? Picture : Err} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}