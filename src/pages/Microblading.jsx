import React, { useEffect, useState } from 'react'
import "./styles/microblading.css"

const Microblading = () => {


  return (
    <div className='microblading'>
      <article className='microblading__container'>
        <img src="cejasmicro.jpg" alt="" />
        <h3 className='microblading__title'>Microblading para cejas: todo lo que debes saber sobre este tratamiento de belleza</h3>

        <div className='microblading__brown'>
          <h4 className='microblading__h3'> La alternativa semipermanente a la micropigmentación para definir las cejas. </h4> <br />
        </div>
        <span className='microblading__span'>El microblading es una técnica de maquillaje semipermanente, cuyo objetivo es corregir o
          reconstruir completamente una ceja carente de pelo o ausente, realizando pelos de forma artística,
          creando un efecto hiperrealista y natural.
          Tiene una duración aproximada de 6 meses a dos años,
          lo cuál dependerá de las características cutáneas de la persona, así como de su estilo de vida,
          pues personas que viven en zonas calurosas y realizan ejercicio tienden a retener menos tiempo
          el pigmento por la vasodilatacion del poro .
          El microblading de cejas se realiza depositando manualmente un pigmento en la dermis papilar de la piel
          mediante una pluma especial llamada tebori o inductor.
          Es la técnica más novedosa dentro de la industria del maquillaje permanente,
          en la creación de diseño de cejas pelo a pelo.
          Se trata de un método de rápida cicatrización y de aspecto mucho más natural.
          También se puede utilizar para espesar u oscurecer las cejas ya existentes dándoles una forma más definida.
          <div className='micro__apply'>
            <span className='stepbystep'>Asi se aplica el Microbalding Paso a Paso</span>
            <ul className='micro__ul'>
              <li>- El día del tratamiento lo primero que hacen es <b>desmaquillarte</b>, te explican cómo va a ser el proceso paso a paso y te muestran los materiales desechables que van a utilizar. Puedes preguntar tantas dudas como <b>desees</b>.
              </li>
              <img src="./first.jpg" alt="" />
              <li>- Una vez aclaradas todas las dudas, comienzan a trazarte con un lápiz la forma ideal de tus cejas teniendo en cuenta la forma de tus facciones y la forma natural de tus cejas. Se trata de mejorar su estructura y grosor, no de que no te reconozcas frente al espejo.
              </li>
              <img src="./second.jpg" alt="" />
              <li>- El siguiente paso es buscar <b>tu tono de cejas</b>, siempre teniendo como base el tono natural del pelo, porque lo que se busca es el resultado más <b>natural</b> posible.
                Y llega el momento de comenzar a aplicar el pigmento trazo a trazo.
                Se realiza con una pluma desechable, que tiene insertadas en un extremo unas <b> agujas muy pequeñas</b> con las
                que se realizan unos microcortes en la piel, mucho mas pequeños que los que se producen en la micropigmentación
                (tratamiento para las cejas que sí es permanente).
                Se realiza con una herramienta tipo pluma llamada <b>tebori</b> y siempre siguiendo la dirección natural del pelo.
                El trazo se hace de forma superficial y son como <b>pinchacitos</b> pero totalmente soportable.
                Se realizan tres repasos por cada trazo para fijar el pigmento.</li>
              <img src="./third.jpg" alt="" />
              <li>- Luego se aplica el tinte, y mientras coge el tinte comienzan con la otra ceja.</li>
            </ul>
          </div>
        </span>
        <hr />
      </article>
      <section className='cares'>
        <h4>CUIDADOS A TENER EN CUENTA DESPUÉS DEL MICROBLADING:</h4>
        <ul className='ul__cares'>
          <li>Tienes que tapar la herida durante la fase de cicatrización con una crema reparadora, como  cremas adecuadas.</li>
          <li>Una vez cicatrizada, debes cuidar la zona del sol con protectores solares con SPF 50.</li>
          <li>No tocar la herida con las manos sucias.</li>
          <li>No exponer la herida a perfumes, maquillajes, aguas con cloro o a prendas que puedan dejar pelusas.</li>
          <li>Limpiar con jabón PH neutro (sin perfume) sin friccionar ni arrastrar las costras.</li>
          <br /><br /><br />

        </ul>
      </section>
    </div>
  )
}
export default Microblading