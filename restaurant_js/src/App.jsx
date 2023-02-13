import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/home/Footer';
import Results from './pages/Results';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResTopFoods from './pages/ResTopFoods';

const App = () => {
    return (
        <div>
            {/* <Head /> */}
            <Router>
                <ToastContainer 
                    style={{fontSize: 15}}
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    closeOnClick
                    pauseOnHover
                />
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/results' element={<Results />} />
                    <Route path='/top-foods/:id' element={<ResTopFoods />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default App
