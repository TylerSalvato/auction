import { useState } from 'react';
import './create.css';

function Create() {

    const [auction, setAuction] = useState({
        title: "",
        keywords: "",
        content: "",
    });

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        let copy = {...auction};
        copy[name] = value;
        setAuction(copy);
    }

    function saveAuction(){

        console.log(auction);

        // read existing
        const datajson = localStorage.getItem("auctionItems");
        let allAuctionItems = [];
        if(datajson) {
            allAuctionItems = JSON.parse(datajson);
        }

        // append the new
        allAuctionItems.push(auction);

        // save 
        localStorage.setItem("auctionItems", JSON.stringify(allAuctionItems));
    }

    return (
        <div className="create page">
            <h2>Get Started</h2>

            <div className="form">

                <div>
                    <label className="form-label">Title</label>
                    <input name="title" onChange={handleInputChange} type="text" className="form-control" />
                </div>

                <div>
                    <label className="form-label">Keywords</label>
                    <input name="keywords" onChange={handleInputChange} type="text" className="form-control" />
                </div>

                <div>
                    <label className="form-label">Content</label>
                    <textarea name="content" onChange={handleInputChange} className="form-control" />
                </div>

                <div>
                    <button onClick={saveAuction} className="btn btn-primary">Save</button>
                </div>

            </div>
        </div>
        
    );
}

export default Create;

