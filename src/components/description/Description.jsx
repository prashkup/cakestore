import React from 'react'

import './Description.css'

const Description = () => {
  return (
    <div className='description'>
      <p>Select a cake from our recipes or make your own!</p>
      <a className='theme-button' href='#product-creator'>
        Create recipe
      </a>
    </div>
  )
}

export default Description
