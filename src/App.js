import { Routes, Route } from "react-router-dom"

import './App.css';

// screens
import PeopleList from "./screens/people_list";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PeopleList />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}

export default App;
