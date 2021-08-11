import React from 'react';
import { Link } from "react-router-dom";

import './Result.css';

export default function Result(props) {

    var image_url = props.document.URL;

    if (image_url === null) {
        image_url = "/images/product-image-placeholder.jpg";
    }
    return(
    <div className="card custom-result card-product-grid">
        <Link to={`/details/${props.document.ProductWDCode}`}>
            <img className="card-img-top" src={image_url} alt={props.document.ProductDesc}></img>
            <div className="card-body text-center justify-content-center">
                <h6>{props.document.ProductDesc}</h6>
            </div>
        </Link>
    </div>
    );
}
