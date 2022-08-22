import './home.css';
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import ScrollDown from "./ScrollDown.jsx";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="container home-container grid">
                <div className="home-content grid">
                    <Social />
                    <div className="home-img"></div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;