import { useState } from 'react';
import './item.css';

function Product() {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        bidstep: "",
        category: "",
        image: "",
        auction: "123",
    });

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        let copy = { ...product };
        copy[name] = value;
        setProduct(copy);
    }

    function saveProduct() {

        console.log(product);

        // read existing
        const datajson = localStorage.getItem("productItems");
        let allProductItems = [];
        if (datajson) {
            allProductItems = JSON.parse(datajson);
        }

        // append the new
        allProductItems.push(product);

        // save 
        localStorage.setItem("productItems", JSON.stringify(allProductItems));
    }

    return (
        <div className="create product page">
            <h2>Get Started</h2>

            <div className="form card">

                <ul className="list-group list-group-flush">

                    <div className="input-group input-group-lg">
                        <label className="form-label"><span className="input-group-text" id="inputGroup-sizing-lg">Item Name:</span></label>
                        <input name="name" onChange={handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>

                    <div className="input-group input-group-lg">
                        <label className="form-label"><span className="input-group-text" id="inputGroup-sizing-lg">Item Description:</span></label>
                        <input name="description" onChange={handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>

                    <div className="input-group input-group-lg">
                        <label className="form-label"><span className="input-group-text" id="inputGroup-sizing-lg">Item Starting Price:</span></label>
                        <input name="price" onChange={handleInputChange} type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='$' />
                    </div>

                    <div className="input-group mb-3 input-group-lg">
                        <label className="form-label"><span className="input-group-text" id="inputGroup-sizing-lg">Bid Increment:</span></label>
                        <input name="bidstep" onChange={handleInputChange} type="number" className="form-control" aria-label="Sizing example input Amount (to the nearest dollar)" aria-describedby="inputGroup-sizing-lg" placeholder='$' />
                    </div>

                    <div className="input-group input-group-lg">
                        <label className="form-label"><span className="input-group-text" id="inputGroup-sizing-lg">Item Category:</span></label>
                        <input name="category" onChange={handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>

                    <div>
                    <label className="form-label">Upload Image</label>
                    <input name="image" onChange={handleInputChange} type="file" className="form-control" />
                </div>

                <div id="liveAlertPlaceholder">
                    <button type="button" class="btn btn-primary" id="liveAlertBtn" onClick={saveProduct} className="btn btn-primary">Save</button>
                </div>
                
                </ul>

            </div>

        </div>

    );
}

export default Product;


