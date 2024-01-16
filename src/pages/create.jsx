import { useState } from 'react';
import './create.css';
import { Link } from "react-router-dom";

function Create() {

    const [auction, setAuction] = useState({
        title: "",
        goal: "",
        startdate: "",
        enddate: "",
        starttime: "",
        endtime: "",
        description: "",
        image: "",


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
                    <label className="form-label">Goal</label>
                    <input name="goal" onChange={handleInputChange} type="number" className="form-control" placeholder='$' />
                </div>

                <div>
                    <label className="form-label">Starting Date</label>
                    <input name="startdate" onChange={handleInputChange} type="date" className="form-control" />
                </div>

                <div>
                    <label className="form-label">Ending Date</label>
                    <input name="enddate" onChange={handleInputChange} type="date" className="form-control" />
                </div>

                <div>
                    <label className="form-label">Starting Time</label>
                    <input name="starttime" onChange={handleInputChange} type="time" className="form-control" />
                </div>

                <div>
                    <label className="form-label">Ending Time</label>
                    <input name="endtime" onChange={handleInputChange} type="time" className="form-control" />
                </div>

                <div>
                    <label className="form-label">Description</label>
                    <textarea name="description" onChange={handleInputChange} className="form-control" />
                </div>

                <div>
                    <label className="form-label">Image</label>
                    <input name="image" onChange={handleInputChange} type="file" className="form-control" />
                </div>

                <div id="liveAlertPlaceholder">
                    <button type="button" class="btn btn-primary" id="liveAlertBtn" onClick={saveAuction} className="btn btn-primary">Save</button>
                </div>

                <div>
                <Link className="nav-link active" aria-current="page" to="/item">
                                Add Item
                            </Link>
                            </div>

            </div>

            <div>
                <Link className="nav-link active" aria-current="page" to="/item">
                                Add Item
                            </Link>
                            </div>

        </div>
        
    );
}

export default Create;

