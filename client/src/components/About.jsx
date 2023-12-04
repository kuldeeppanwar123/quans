import React from 'react'
import styled from '../CSS/About.module.css'
import p1 from '../Resources/q1.png'
import p2 from '../Resources/q2.webp'

export default function About() {
  return (
    <div className={styled.container}>
       <div className={styled.firstcontainer}>

        <div className={styled.first}>
            <h2>Why Quans ?</h2>
            <p>Quans’s mission is to share and grow the world’s knowledge. Not all knowledge can be written down, but much of that which can be, still isn't. It remains in people’s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.
            </p>

        </div>
        <div>
            <img src={p1} alt="" className={styled.p1} />
        </div>
       </div>

       <div className={styled.secondcontainer}>
        <div>
            <img src={p2} alt="" className={styled.p2}/>
        </div>

        <div className={styled.second}>
          <h2>Gather around a question</h2>
          <p>The heart of Quans is questions — questions that affect the world, questions that explain recent world events, questions that guide important life decisions, and questions that provide insights into why other people think differently. quans is a place where you can ask questions that matter to you and get answers from people who have been there and done that. quans is where  artists, entrepreneurs, mechanics, and homemakers take refuge from misinformation and incendiary arguments to share what they know.</p>
        </div>
       </div>
    </div>
  )
}
