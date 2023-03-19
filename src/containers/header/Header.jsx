import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import OceanWave from '../../components/waves/Oceanwave'

const Header = () => {
  return (
    <>
    
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Ethereum San Diego</h1>
          <p>Learn, Network, and Build with San Diego’s Only Ethereum Community</p>

          <br /><br /><br />
          <h1 className='gpt3__header section__padding'>Our Impact</h1>

          

          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Enter your email' />
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt="people" />
            <p>Ready to get involved?</p>
          </div>

          {/* <div className='gpt3__header-image'>
            <img src={ai} alt="ai" />
          </div> */}
        </div>
    </div>
    {/* <OceanWave /> */}
    </>
  )
}

export default Header