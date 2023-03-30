import React from "react";
import propType from "prop-types";
import ReactDOM from 'react-dom/client';

function Card(props) {
    return (
        <div class="m-5 bg-success col-12 text-black">
            <img class="w-100 h-50" src={props.cardImageUrl} alt="Card image" />
            <div class="card-body">
                <h5 class="card-title">{props.cardTitle}</h5>
                <p class="card-text">{props.cardDescription} </p>
                <a href={props.cardLink} class="btn btn-light">{props.cardButton}</a>
            </div>
        </div>
    )
}

export default Card;