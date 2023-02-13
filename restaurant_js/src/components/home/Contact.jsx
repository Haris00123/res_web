import { useState } from 'react';
import '../../styles/contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const Contact = () => {
    const tempId = 'template_cv9l8h9';
    const serviceId = 'service_x12vn62';
    const [resName , setResName] = useState('');
    const [resCity , setResCity] = useState('');
    const [emailFrom , setEmailFrom] = useState('');
    const [description , setDescription] = useState('');
    const [loading , setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = { resName , resCity , description , emailFrom }
        emailjs.send( serviceId , tempId , data , 'E9A9epYDX1zIt_syT')
        .then(() => {
            setResName('');
            setResCity('');
            setDescription('');
            setEmailFrom('');
            setLoading(false);
            toast.success('We have received your mail. Thank you 🥰.');
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
            toast.error('Something went wrong 😫.');
        })
    };

    return (
        <section className='contact-section' id='contact'>
            <div className='contact-form-wrapper'>
                <div className="contact-content">
                    <div className="heading-full" style={{ width: '100%'}}>
                        <h3>Request Restaurant</h3>
                        <h1>
                            Add New Restaurant
                        </h1>
                        <p>Didn’t see your favorite restaurant on the list, send us a message and we’ll be sure to get it added. 
                        We are currently a small team so it may take some time to get it added, but we’ll send you an email when we do</p>
                    </div>
                </div>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="email" 
                            placeholder='Your email'
                            value={emailFrom}
                            onChange={e => setEmailFrom(e.target.value)}
                            required
                            />
                        </div>
                        <div className='input-div'>
                            <input 
                            type="text" 
                            placeholder='Restaurant name'
                            value={resName}
                            onChange={e => setResName(e.target.value)}
                            required
                            />
                            <input 
                            type="text" 
                            placeholder='City name'
                            value={resCity}
                            onChange={e => setResCity(e.target.value)}
                            required
                            />
                        </div>
                        
                        <textarea 
                        placeholder='Description...'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                        <div>
                            <button className="btn-primary" type='submit'>
                                {
                                loading 
                                ? 
                                <ClipLoader size={20} color="#fff" /> 
                                : "Send"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact