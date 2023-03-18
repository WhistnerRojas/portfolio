import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import React, {useEffect} from 'react'
import './css/nav.css'

function Navigation() {

    useEffect(() => {

        let prevScrollPos = window.pageYOffset;

        function handleScroll() {
            const nav = document.querySelector('nav');
            const currentScrollPos = window.pageYOffset;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100 && nav!==null) {
                if (prevScrollPos > currentScrollPos) {
                    nav.style.top = '0';
                } else {
                    nav.style.top = `-${nav.offsetHeight}px`;
                    nav.style.transition = `.3s`;
                    nav.style.backgroundColor = '#212529de';
                }
                prevScrollPos = currentScrollPos;
            } else if(nav!==null) {
                nav.style.backgroundColor = 'transparent';
            }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky='top' className='pt-3 nav'>
            <Container>
                <Navbar.Brand className='siteName fs-4' href="#home">{'<'}Whistner{'/>'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='bgBurger'>
                <Nav className="justify-content-end flex-grow-1 px-3 pt-3 navLinks">
                    <Nav.Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href="#home">
                        Home
                    </Nav.Link>
                    <Nav.Link href="#about">
                        About
                    </Nav.Link>
                    <Nav.Link href="#portfolio">
                        Portfolio
                    </Nav.Link>
                    <Nav.Link href="#contact">
                        Contact
                    </Nav.Link>
                </Nav>
                <Nav className='pt-3 ps-5'>
                    <Nav.Link href="https://drive.google.com/file/d/1-VM0xXxw4zimzih6AtCZM9p9BoFbWCgQ/view?usp=sharing" target='_blank' download={true} className='btn btn-outline-warning download'>
                        Download CV
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;