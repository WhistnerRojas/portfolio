import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import './css/nav.css'

function Navigation(prop: any) {

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
                <Navbar.Brand className='siteName fs-4' href="/">{'<'}Whistner{'/>'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='bgBurger'>
                <Nav className="justify-content-end flex-grow-1 px-3 pt-3 navLinks">
                    <Nav.Item onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Link to='/' data-nav='home'>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/about' data-nav='about'>About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/project' data-nav='project'>Project</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/contact' data-nav='contact'>Contact</Link>
                    </Nav.Item>
                </Nav>
                <Nav className='pt-3 ps-5'>
                    <Nav.Item className='btn btn-outline-warning download'>
                        <Link to='https://drive.google.com/file/d/1-VM0xXxw4zimzih6AtCZM9p9BoFbWCgQ/view?usp=sharing' target='_blank' download={true}>Download CV</Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;