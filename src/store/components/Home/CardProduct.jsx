
import React from 'react'

import './styles/cardProduct.css'


const CardProduct = () => {

    return (
        <div className='description'>
            <h1 className='description__title'> Microblading de cejas ¿Qué cejas te quedan mejor según tu forma de la cara? </h1>
            <section className='description__container'>
                <article className='description__article'>
                    <div className='description__micro'> El microblading de cejas es una técnica que se engloba dentro del maquillaje semipermanente de cejas. Por este motivo, son muchas las clientas que vienen a nuestro centro de estética con muchas dudas entorno a la forma de cejas que mejor les va a quedar o cuál es el pigmento de ceja que mejor se ajusta a su rostro.
                        Si tú también tienes estas dudas, vamos a explicarte cuales son las cejas que quedan mejor según tu tipo de facciones.
                    </div>
                    <h2 className='description__title'>Cejas perfectas según el rostro</h2>
                    <img src="./bestoption.jpg" alt="" />
                    <div className='description__micro'> Antes de nada, te aconsejamos no obsesionarte con un tipo de cejas, de alguna persona famosa por ejemplo, ya que tienes que entender que puede que esa persona no cuente con tu misma forma del rostro. Y son muchas las personas que, intentando imitar una forma que no es la suya, acaban destrozando sus cejas.

                        El punto clave esta en conseguir una armonía entre la forma del rostro, las cejas y los rasgos de la cara. Todo esto unido al microblading de cejas, hace que las cejas enmarquen la mirada y puedas lucir así unas cejas perfectas y súper naturales. Si estas pensando en hacerte un tratamiento de microblading de cejas asegúrate de elegir un centro con experiencia, necesario siempre hacer un estudio previo de las facciones y del rostro para que así conseguir las cejas idóneas.
                    </div>
                    <h3 className='description__title'>Rostros de mujer y microblading de cejas. </h3><h3>
                        <img src="./halfImg.jpg" alt="" /> <br />
                        Existen muchos tipos de rostros, por eso mismo hoy os traemos los más comunes. Aún sabiendo esto, es muy recomendable dejarse aconsejar. Para así conseguir la forma perfecta de las cejas.</h3>
                    <ul className='description__ul'>
                        <li className='description__micro'> <p>Rostro redondo:</p> <span> La ceja ideal tiene un arco bastante pronunciado y arqueado, que tiende hacia arriba y en la segunda parte desciende más bruscamente. </span> </li>
                        <li className='description__micro'><p>Rostro cuadrado:</p> <span> Para aportar armonía, es necesario crear arcos redondeados, perfectos para romper la monotonía de las facciones.</span></li>
                        <li className='description__micro'><p>Rostro ovalado:</p> <span> La mejor forma de cejas para sacarle partido a este tipo de rostro es un arco delicado, no muy acentuado y suavemente redondeado.</span></li>
                    </ul>
                    <div className='description__micro'>
                        <h3 className='description__title'>Pigmentos de las cejas</h3>
                        <img src="./pigments.jpg" alt="" />
                        Tal y como hablabamos, la mayoría de clientas tienen miedo de que las cejas terminen más oscuras que su pelo natural. Es por eso que contamos con una gran cantidad de colores para que esto no suceda y, se pueda conseguir así el tono que más se ajuste al rostro. Para elegirlo bien siempre hay que tener en cuenta el color del vello natural de la clienta.

                        Si estas pensando en hacerte un tratamiento de microblading de cejas y no sabes que tipo de cejas o de pigmentos favorecen más a tu rostro. No esperes más para ponerte en nuestras manos.
                    </div>
                </article>
            </section>
        </div>
    )
}

export default CardProduct