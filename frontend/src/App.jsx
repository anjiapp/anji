import './pages/css/App.css';
import Dashboard from "./pages/Dashboard";
import StudyPage from "./pages/StudyPage";
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    const [page, setPage] = useState(0);
    return (
        <div className={'h-screen overflow-hidden relative flex flex-row'}>
            <div className={""}> {/*Create Sidebar here*/}
                <h1 className={"mt-4 ml-8"}>anji</h1>
            </div>
            <Router>
                <Routes>
                    <Route path={'/'} exact element={<Dashboard/>}/>
                    <Route path={'/deck'} element={<StudyPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
