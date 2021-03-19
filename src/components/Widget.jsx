import React from "react";
import MessagesPage from 'components/MessagesPage';
import iconMessage from 'assets/image/message.svg'

const Widget = () => <article className="widget">
    <button className="widget-btn" onClick={(e)=>{
      e.target.closest('.widget').classList.toggle('opened');
    }}>
      <img src={iconMessage} alt="message"/>
    </button>
 
  <div className="widget-content">
    <MessagesPage idUser={1}/>
  </div>
 </article> 
export default Widget;
