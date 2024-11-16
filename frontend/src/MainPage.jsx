import { useState } from 'react'
import cats from './assets/cats.jpg'
import './MainPage.css'

function MainPage() {
const onClick = () => {
    alert('Dummy, click on the button');
}
const NextPage = () => {
    alert("yay")
}

  return (
    <>
        <div className="content">
            <img src={cats} className="cats" alt="React logo" onClick={onClick}/>
            <h1 className='text'>To my little Dummy</h1>
            <button className="button" onClick={NextPage}>continue</button>
        </div>
    </>
  )
}

export default MainPage
