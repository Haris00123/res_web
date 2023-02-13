import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <div className="flex items-center justify-between sm:px-12 px-4 py-8 nav-shadow ">
                <div className="-mt-6">
                    <Link to='/'>
                        <img src="/images/logo.png" alt="" />
                    </Link>
                </div>
                <ul className='flex items-center text-center sm:gap-16 md:gap-8 gap-6'>
                    <li className='hover:text-red-500'><Link to="/">Home</Link></li>   
                    <li className='hover:text-red-500'><a href="/#about">About</a></li>
                </ul>
               
                <a href='/#contact' className='md:block hidden h-fit'>
                    <span className='btn-primary'>Register Restraunt</span>
                </a>
            </div>
        </header>
    )
}

export default Nav