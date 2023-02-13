import '../../styles/about.css';

const About = () => {
    return (
        <section className='about-section' id='about'>
            <div className="heading about-content">
                <h3>About Us</h3>
                <h1>Who We Are</h1>
                <p className='mt-4'>We're a bunch of foodies who know, that sometimes when you go to a new restaurant and ask the waiter for advice, it isn't something you enjoy.
                <br />
                <br />
                You sit with a dish you didn't like, watching your friends or partner enjoying their food, truly a torturous experience.
                To solve this, we have developed a tool to scour the internet and use some machine learning models to find the top foods of many restaurants in your city, so you know what to get beforehand so you won't be disappointed.
                <br /> <br />
                Want to be part of the team? looking to get some more insights for your restaurant? Something else? Don’t hesitate to reach out. We are a very small team, so it may take some time to get back to you.</p>
                <div className='mt-8'>
                    <button className="btn-primary">Contact</button>
                </div>
            </div>
            <div className='about-img'>
                <img src="images/about.jpg" alt="" className='rounded-md h-[60vh]' />
            </div>
            
        </section>
    )
}

export default About