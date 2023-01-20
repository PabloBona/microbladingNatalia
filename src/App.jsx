import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'



import Header from './store/components/Home/shared/Header'
import Cart from './pages/Cart'

import Microblading from './pages/Microblading'


function App() {



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/microblading' element={<Microblading />} />
        <Route path='/contacto' element={<Cart />} />
      </Routes>
      <footer >
        <div class="footer-container">
          <div class="footer-links">
            <ul className='footer__ul'>
              <li className='footer__title'> About</li>
              <li className='liLocation'><i class='bx bx-current-location'></i>Vistalba - Mendoza, Argentina</li>
              <li className='liLocation'><i class='bx bxs-phone-call'></i>261-5978474</li>
            </ul>
            <ul className='footer__ul'>
              <li className='footer__title'> Information</li>

              <a href="https://nataliabonasera.blogspot.com/"><li className='liLocation'><i class='bx bxs-info-square'></i>News</li></a>
            </ul>
            <ul className='footer__ul'>
              <li className='footer__title'> Follow Us</li>
              <a href="https://www.instagram.com/nbmicrobladingmza/" target="_blank"><li className='liLocation'><i class='bx bxl-instagram' ></i>Instagram</li></a>
              <a href="https://www.facebook.com/profile.php?id=100089222163898" target="_blank"><li className='liLocation'><i class='bx bxl-facebook' ></i>Facebook</li></a>

            </ul>
          </div>

          <div class="footer-copyright">
            Copyright ©2022 Natalia Bonasera. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
