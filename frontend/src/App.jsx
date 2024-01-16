import './pages/css/App.css';
import Dashboard from "./pages/Dashboard";
import StudyPage from "./pages/StudyPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className={'h-screen overflow-hidden relative flex flex-row'}>
            <div className={"py-4 px-8 border-gray-500 border-r-[2px]"}> {/*Create Sidebar here*/}
                <h1>anji</h1>
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
