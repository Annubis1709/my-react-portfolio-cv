import './App.css'
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/about.jsx";

function App() {
  return (
    <div>
        <Header />
        <main className="main">
            <Home />
            <About />
        </main>
    </div>
  )
}

export default App;
