import React from 'react'
import {FaFacebook, FaGithub, FaTelegram, FaLinkedin} from 'react-icons/fa'
import {AiFillGoogleCircle} from 'react-icons/ai'

export default function SocialLink() {
    return (
        <span className='fs-2 social'>
            <a href="https://web.facebook.com/whistner.R" target="_blank" rel='noreferrer'><FaFacebook /></a>
            <a href="https://github.com/WhistnerRojas" target="_blank" rel='noreferrer noopener'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/whistnerrojas/" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>
            <a href="https://t.me/OneP1nch" target="_blank" rel='noreferrer'><FaTelegram /></a>
            <a href="https://developers.google.com/profile/u/MrRojas" style={{fontSize: 36}} target="_blank" rel='noreferrer'><AiFillGoogleCircle /></a>
        </span>
    )
}