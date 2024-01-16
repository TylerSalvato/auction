import "./home.css";
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    function save() {
        console.log("Magic");

        navigate('/display');
    }

    return (
        <div className="home page">
            <h1>Welcome!</h1>
            <h3>Checkout our Auctions!</h3>
            <h5>Post Auctions or Start Bidding!</h5>
            <p>You can post items that you want to sell through bidding.</p>
            <p>You can search and bid on items that you are interested in.
            </p>

            <div className="button">

                <button onClick={save} className="btn btn-primary">Auction List</button>

            </div>

            <div className="condense">

                <div className="header">

                    <img src="/images/gallery.jpg" className="img-fluid img-thumbnail rounded " alt="..." />

                </div>

                <div className="content">

                    <img src="/images/gavel.jpg" className="img-fluid img-thumbnail rounded " alt="..." />

                </div>



            </div>


        </div>


    );
}

export default Home;
