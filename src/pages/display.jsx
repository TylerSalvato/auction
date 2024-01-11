import { useEffect, useState } from 'react';
import './display.css';


function Display({ auction }) {
    return (

        <div className="card">
            <img src="images/beach.png" className="card-img-to rounded mx-auto d-block img-fluid img-thumbnail" alt="beach"/>
                <div className="card-body">
                    <h5 className="card-title">{auction.title}</h5>
                    <p className="card-text">{auction.content}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{auction.keywords}</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
        </div>

    );
}

function Auction() {
    const [auctions, setAuctions] = useState([]);

    useEffect(function () {
        const auctionsJson = localStorage.getItem('auctionItems');
        if (auctionsJson) {
            const auctionsObj = JSON.parse(auctionsJson); // array
            setAuctions(auctionsObj);
        }
    }, []);

    return (
        <div className="display page">
            <h2>Auction</h2>
            {auctions.map(auction => <Display auction={auction} />)}
        </div>
    )
}

export default Auction; 