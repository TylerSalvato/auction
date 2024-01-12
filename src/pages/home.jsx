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
            <h1>Home</h1>

            <div className="button">

            <button onClick={save} className="btn btn-primary">Auction List</button>

            </div>

            <div className="header">
                <img src="/images/island.png" alt="island" />
            </div>

            <div className="content">
                <img src="/images/space.png" alt="space" />
                <div>

                    <h3>Lorem, ipsum</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate architecto consequuntur quaerat corporis voluptatum nisi quasi, quis ea tempore accusantium minima saepe impedit recusandae, maiores perferendis asperiores iste ipsum!</p>
                </div>
            </div>

        </div>
    );
}

export default Home;
