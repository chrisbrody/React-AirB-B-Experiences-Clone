import React from 'react'
import photoGrid from '../photo-grid.svg'


export default function Hero() {
  return (
    <section className='section hero__section'>
      <img src={ photoGrid } alt='' className='hero__image' />
      <h1 className='hero__header'>Online Experiences</h1>
      <p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
