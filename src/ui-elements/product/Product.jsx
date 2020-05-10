import React from 'react'
import './Product.css'

const Product = props => {
  return (
    <div className='product'>
      <svg width="300" height="300" style={{backgroundColor: 'white'}} viewBox="-150 -150 300 300">
        <path d="M0,-14.579 L0,14.579 " stroke="#7b3500" stroke-width="121"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-59.947,12.859 C-58.534,-10.224 -31.208,-27.425 2.513,-26.457 C36.233,-25.49 61.361,-6.784 59.947,16.299 C58.534,39.383 31.208,56.584 -2.513,55.616 C-36.233,54.649 -61.361,35.943 -59.947,12.859 " stroke="#7b3500" stroke-width="1" fill="#7b3500"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-59.947,-16.299 C-61.361,6.784 -36.233,25.49 -2.513,26.457 C31.208,27.425 58.534,10.224 59.947,-12.859 C61.361,-35.943 36.233,-54.649 2.513,-55.616 C-31.208,-56.584 -58.534,-39.383 -59.947,-16.299 " stroke="#9c6f40" stroke-width="1" fill="#9c6f40"></path>
        <path d="M0,-21.869 L0,-14.579 " stroke="#fc5a8d" stroke-width="121"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-59.947,-16.299 C-58.534,-39.383 -31.208,-56.584 2.513,-55.616 C36.233,-54.649 61.361,-35.943 59.947,-12.859 C58.534,10.224 31.208,27.425 -2.513,26.457 C-36.233,25.49 -61.361,6.784 -59.947,-16.299 " stroke="#fc5a8d" stroke-width="1" fill="#fc5a8d"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-59.947,-23.589 C-61.361,-0.506 -36.233,18.2 -2.513,19.168 C31.208,20.135 58.534,2.934 59.947,-20.149 C61.361,-43.232 36.233,-61.938 2.513,-62.906 C-31.208,-63.873 -58.534,-46.672 -59.947,-23.589 " stroke="#feaec7" stroke-width="1" fill="#feaec7"></path>
        <path d="M0,-51.028 L0,-21.869 " stroke="#7b3500" stroke-width="101"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-49.956,-23.302 C-48.778,-42.538 -26.007,-56.873 2.094,-56.066 C30.194,-55.26 51.134,-39.672 49.956,-20.436 C48.778,-1.2 26.007,13.135 -2.094,12.328 C-30.194,11.522 -51.134,-4.066 -49.956,-23.302 " stroke="#7b3500" stroke-width="1" fill="#7b3500"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-49.956,-52.461 C-51.134,-33.225 -30.194,-17.637 -2.094,-16.83 C26.007,-16.024 48.778,-30.359 49.956,-49.595 C51.134,-68.831 30.194,-84.419 2.094,-85.225 C-26.007,-86.031 -48.778,-71.697 -49.956,-52.461 " stroke="#9c6f40" stroke-width="1" fill="#9c6f40"></path>
        <path d="M0,-58.317 L0,-51.028 " stroke="#fc5a8d" stroke-width="101"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-49.956,-52.461 C-48.778,-71.697 -26.007,-86.031 2.094,-85.225 C30.194,-84.419 51.134,-68.831 49.956,-49.595 C48.778,-30.359 26.007,-16.024 -2.094,-16.83 C-30.194,-17.637 -51.134,-33.225 -49.956,-52.461 " stroke="#fc5a8d" stroke-width="1" fill="#fc5a8d"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-49.956,-59.751 C-51.134,-40.515 -30.194,-24.926 -2.094,-24.12 C26.007,-23.314 48.778,-37.648 49.956,-56.884 C51.134,-76.12 30.194,-91.709 2.094,-92.515 C-26.007,-93.321 -48.778,-78.987 -49.956,-59.751 " stroke="#feaec7" stroke-width="1" fill="#feaec7"></path>
        <path d="M0,-87.476 L0,-58.317 " stroke="#7b3500" stroke-width="81"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-39.965,-59.464 C-39.023,-74.853 -20.805,-86.32 1.675,-85.675 C24.155,-85.03 40.907,-72.56 39.965,-57.171 C39.023,-41.782 20.805,-30.315 -1.675,-30.96 C-24.155,-31.605 -40.907,-44.075 -39.965,-59.464 " stroke="#7b3500" stroke-width="1" fill="#7b3500"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-39.965,-88.623 C-40.907,-73.234 -24.155,-60.763 -1.675,-60.118 C20.805,-59.473 39.023,-70.941 39.965,-86.33 C40.907,-101.718 24.155,-114.189 1.675,-114.834 C-20.805,-115.479 -39.023,-104.012 -39.965,-88.623 " stroke="#9c6f40" stroke-width="1" fill="#9c6f40"></path>
        <path d="M0,-94.766 L0,-87.476 " stroke="#fc5a8d" stroke-width="81"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-39.965,-88.623 C-39.023,-104.012 -20.805,-115.479 1.675,-114.834 C24.155,-114.189 40.907,-101.718 39.965,-86.33 C39.023,-70.941 20.805,-59.473 -1.675,-60.118 C-24.155,-60.763 -40.907,-73.234 -39.965,-88.623 " stroke="#fc5a8d" stroke-width="1" fill="#fc5a8d"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M-39.965,-95.913 C-40.907,-80.524 -24.155,-68.053 -1.675,-67.408 C20.805,-66.763 39.023,-78.23 39.965,-93.619 C40.907,-109.008 24.155,-121.479 1.675,-122.124 C-20.805,-122.769 -39.023,-111.301 -39.965,-95.913 " stroke="#feaec7" stroke-width="1" fill="#feaec7"></path>
      </svg>
      <button>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
