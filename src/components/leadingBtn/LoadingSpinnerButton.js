import React from 'react'
import './LoadingSpinnerButton.css';
import Spinner from './spinner.gif';
import { FaTelegramPlane } from 'react-icons/fa'

const LoadingSpinnerButton = ({ loading, onClick, disable }) => {

  return (

    <button onClick={onClick} className='loading-spinner-button'>
      {
        loading ? <img src={Spinner} alt='spinner' /> : <>So‘rov yuborish <FaTelegramPlane /></>
      }
    </button>

  )
}

export default LoadingSpinnerButton