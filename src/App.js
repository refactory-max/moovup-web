import { Routes, Route } from "react-router-dom"

import './App.css';

// screens
import FriendDetails from "./screens/friend_details";
import PeopleList from "./screens/people_list";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PeopleList />} />
                <Route path="friend_details" element={<FriendDetails />} />
            </Routes>
        </div>
    );
}

export default App;
