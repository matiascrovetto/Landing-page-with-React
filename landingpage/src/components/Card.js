import React from "react";
import propType from "prop-types";
import ReactDOM from 'react-dom/client';

function Card(props) {
    return (
        <div className="m-5 bg-success col-12 text-black">
            <img className="w-100 h-50" src={props.cardImageUrl} alt="Card image" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription} </p>
                <a href={props.cardLink} className="btn btn-light">{props.cardButton}</a>
            </div>
        </div>
    )
}

export default Card;