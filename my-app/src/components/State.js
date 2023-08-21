import React from "react";
import { useState } from "react";


export default function State()
{
    const [contact,setContact] = useState({
        firstName:"prabha",
        lastName:"Jay",
        phone:"4036719263",
        email:"lakshmi.prbh@gmail.com",
        isFavorite:false
    })
    function toggleContact()
    {
        setContact(prevContact =>({
            ...prevContact,
            isFavorite : !prevContact.isFavorite
        }))
    }
    return(
        <main>
            <img src="./images/katie-zaferes.jpeg" />
            <div>
                <img className="card--star" src="./images/star.png" />
                <h2>{contact.firstName} {contact.lastName}</h2>
                <button onClick={toggleContact}>click</button>
            </div>
        </main>
    )
}