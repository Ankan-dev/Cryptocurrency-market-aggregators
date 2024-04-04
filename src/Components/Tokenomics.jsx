import React from 'react'
import "../Stylesheets/Tokenomics.css";
import Apex from './Apex';


const Tokenomics = () => {
  return (
    <div className='Tokenomics-container'>
    <h3 className='tokenomics-head'>Tokenomics</h3>
    <h5 className='tokenomics-subHead'>Initial Distribution</h5>
    <div className='charts'>
        <Apex/>
    </div>
    <p className='tokenomics-para'>Elit cillum in nulla ullamco in in. Pariatur ad esse do sit. In id sint occaecat esse velit nisi nisi ipsum magna deserunt amet labore consequat. Pariatur laborum aliquip pariatur in et irure velit commodo laborum fugiat fugiat. Ea sit velit labore ea qui. Aliqua duis velit reprehenderit minim. Quis dolor enim id ex nulla officia exercitation elit.Incididunt reprehenderit ad aute id. Proident mollit cillum velit tempor ex nisi exercitation culpa. Proident laboris nisi in do amet deserunt sit minim. Adipisicing adipisicing ut consequat sunt laborum laboris. Enim est labore cillum ad sint. Aliquip duis mollit fugiat id do laboris duis officia commodo nostrud excepteur proident tempor sit. Sint laborum ex aliquip laborum laborum.</p>
    </div>
  )
}

export default Tokenomics