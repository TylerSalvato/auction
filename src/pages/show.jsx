import { useEffect, useState } from 'react';
import './show.css';


function Show ({ product }) {
    return (

        <div className="create card form">
            <img src={product.image} className="card-img-to rounded mx-auto d-block img-fluid img-thumbnail" alt="beach"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{product.price}</li>
                    <li className="list-group-item">{product.date}</li>
                    <li className="list-group-item">{product.category}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
        </div>

    );
}

function Prize() {
    const [prizes, setPrizes] = useState([]);

    useEffect(function () {
        const prizesJson = localStorage.getItem('productItems');
        if (prizesJson) {
            const prizesObj = JSON.parse(prizesJson); // array
            setPrizes(prizesObj);
        }
    }, []);

    return (
        <div className="display page">
            <h2>Prize</h2>
            {prizes.map(prize => <Show product={prize} />)}
        </div>
    )
}

export default Prize; 