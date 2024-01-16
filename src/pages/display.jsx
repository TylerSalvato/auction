import { useEffect, useState } from 'react';
import './display.css';
import { Link } from "react-router-dom";


function Display({ auction }) {
    return (

        <div className="display fit">
        <div className="card">
            <img src={auction.image} alt="..." className="card-img-top"/>

                <div className="card-body">
                    
                    <h5 className="card-title">{auction.title}</h5>
                    <p className="card-text">{auction.goal}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{auction.startdate}</li>
                    <li className="list-group-item">{auction.enddate}</li>
                    <li className="list-group-item">{auction.starttime}</li>
                    <li className="list-group-item">{auction.endtime}</li>
                </ul>
                <div className="card-body">
                <Link className="nav-link active card-link" aria-current="page" to="/show">
                                Open
                            </Link>

                    <a href="#" className="card-link">Another link</a>
                </div>
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
        <div className="display fit page">
            <h2>Auction</h2>
            {auctions.map(auction => <Display auction={auction} />)}
        </div>
    )
}

export default Auction; 