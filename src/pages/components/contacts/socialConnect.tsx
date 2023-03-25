import Dp from '../../img/dp.png'
import {FaInstagram, FaFacebook, FaGithub, FaTelegram, FaLinkedin} from 'react-icons/fa'
import {AiFillGoogleCircle} from 'react-icons/ai'


export default function SocialConnect() {

    const linkClick=(e: React.MouseEvent<SVGElement, MouseEvent>)=>{
        console.log(e.currentTarget.getAttribute('id'))
        const linkTo = e.currentTarget.getAttribute('id')
        linkTo === 'insta' && window.open("https://www.instagram.com/whistner/", "_blank")
        linkTo ===  'fb' && window.open("https://web.facebook.com/whistner.R", "_blank")
        linkTo ===  'github' && window.open("https://github.com/WhistnerRojas", "_blank")
        linkTo ===  'tg' && window.open("https://t.me/OneP1nch", "_blank")
        linkTo ===  'in' && window.open("https://www.linkedin.com/in/whistnerrojas/", "_blank")
        linkTo ===  'google' && window.open("https://developers.google.com/profile/u/MrRojas", "_blank")
    }   

    return (
        <div className="rotateBody">
            <div className="centerImg">
                <img src={Dp} alt=""/>
                <div className="droplet">
                </div>
            </div>
            <div className="parentRotate">
                <div className="circling"><FaInstagram size='2em' onClick={linkClick} id='insta' className='pointer'/></div>
                <div className="circling"><FaFacebook size='2em' onClick={linkClick} id='fb' className='pointer'/></div>
                <div className="circling"><FaGithub size='2em' onClick={linkClick} id='github' className='pointer'/></div>
                <div className="circling"><FaTelegram size='2em' onClick={linkClick} id='tg' className='pointer'/></div>
                <div className="circling"><FaLinkedin size='2em' onClick={linkClick} id='in' className='pointer'/></div>
                <div className="circling"><AiFillGoogleCircle size='2em' onClick={linkClick} id='google' className='pointer'/></div>
            </div>
        </div>
    )
}