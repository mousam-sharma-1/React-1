import React from 'react';
import './card.styles.css';


export const Card = (props) =>(
    <div className="card-container">
        <img alt="img" src={`https://robohash.org/${props.AppArr.id}?set=set2&size=180x180`}></img>
        <h2>{props.AppArr.username}</h2>
        <h4>{props.AppArr.email}</h4>
    </div>
)