import '../css/contact.css'
import { Email } from '../contacts/email';
import SocialConnect from '../contacts/socialConnect';

const Contact = () => {
    
    return(
        <section className='container py-3' id='intersectsContact'>
            <h2 className='text-start'>{'<'} Contact {'/>'}</h2>
            <div className="row">
                <div className="col-12 col-md-6 pt-3 mb-md-0 mb-5">
                    <h4 className='text-center'>Ping me!</h4>
                    <Email />
                </div>
                <div className="col-12 col-md-6 pb-5 pt-3">
                    <h4 className='text-center'>Let's get Connected</h4>
                    <SocialConnect/>
                </div>
            </div>
        </section>
    )
}

export default Contact;
