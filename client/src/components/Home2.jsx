import React from 'react'
import styled from '../CSS/Home.module.css';
import first from '../Resources/first.png'
import second from '../Resources/second.png'
import quans from '../Resources/quans.png'

export default function Home2() {
  return (
    <div className={styled.maincontainer}>
    <div className={styled.container}>
        {/* <img src={first} alt=""  className={styled.first}> */}
        <img src={first} alt="" className={styled.first}/>
        <img src={second} alt="" className={styled.second}/>
    </div>
        {/* <div className={styled.quans}> */}
            <img src={quans} alt="" className={styled.quans}/>
        
    </div>
  )
}
