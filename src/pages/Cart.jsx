
import React from 'react'

import "./styles/cart.css"

const contacto = () => {



    return (
        <section className='cart'>
            <div class="col-md-4">
                <h3>Natalia Bonasera - Microblading</h3>
                <p>
                    Vistalba, Mendoza
                </p>
                <p><i class="fa fa-phone"></i>261-5978474</p>
                <p><i class="fa fa-envelope-o"></i> <a href="mailto:nataliabonasera@gmail.com">nataliabonasera@gmail.com</a>
                </p>
                <p><i class="fa fa-clock-o"></i>  Lunes - Viernes: 10:00 a 21:00hs.  </p>
                <div className='media'>
                    <a href="https://www.instagram.com/nbmicrobladingmza/" target="_blank"><li  ><i class='bx bxl-instagram' ></i> Instagram</li></a>
                    <a href="https://www.facebook.com/profile.php?id=100089222163898" target="_blank"><li  ><i class='bx bxl-facebook'></i> Facebook</li></a>
                </div>

            </div>
        </section>
    )
}

export default contacto