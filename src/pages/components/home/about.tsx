import '../css/about.css'
import Pic1 from '../../img/about1.png'
import Pic2 from '../../img/about2.png'
import Pic3 from '../../img/about3.png'
import AboutComp from '../about/aboutComp';

export default function About(): JSX.Element {

    const techStack = ['HTML', 'CSS', 'Bootstrap', 'JS', 'React', 'NodeJs', 'ExpressJs', 'PHP', 'Laravel', 'MySQL', 'AWS EC2 & RDS', 'Firebase(realtime DB)', 'a little bit of C++ and JAVA', 'lastly(for now!) Photoshop']

    return (
        <section className="pt-md-5 my-5" id='intersectsAbout'>
            <h2 className='container-md'>{'<'} About {'>'}</h2>
                <div className="about">
                <AboutComp className="opacity-100" p={<p className="lead">A passionate web developer, aims to create exceptional web 
                applications. With experience in both front-end and back-end development, I have built up a good foundation in HTML, CSS, JavaScript, as well as in PHP.</p>}
                img={Pic1} flex='flex-lg-row-reverse' />
                <AboutComp skills={techStack} img={Pic2} flex='flex-lg-row'/>
                <AboutComp p={
                <>
                    <h4>2022 - 2023 Full stack Web Development</h4>
                    <p className='pb-3 ms-5'>Kodego Bootcamp</p>
                    <h4>2009 - 2012 Computer Science</h4>
                    <p className='ms-5'>Asian Institute of Computer Studies</p>
                </>
                } 
                img={Pic3} flex='flex-lg-row-reverse'/>
                </div>
            <h2 className='container-md text-end'>{'<'} About {'/>'}</h2>
        </section>
    )
}