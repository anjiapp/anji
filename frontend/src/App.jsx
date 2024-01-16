import './pages/css/App.css';
import Dashboard from "./pages/Dashboard";
import StudyPage from "./pages/StudyPage";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className={'h-screen overflow-hidden relative flex flex-row'}>
            <Router>
                <div className={"py-4 px-8 border-gray-500 border-r-[2px] overflow-y-auto"}> {/*Create Sidebar here*/}
                    <Link to={'/'}><h1>anji</h1></Link>
                    {/*<div*/}
                    {/*    className={'bg-[#d9d9d9] py-3 px-5 inline-flex flex-row items-center space-x-2 font-bold hover:cursor-pointer'}*/}
                    {/*    onClick={() => {*/}

                    {/*    }}>*/}
                    {/*    <FaPlus/>*/}
                    {/*    <p>New</p>*/}
                    {/*</div>*/}
                </div>
                <Routes>
                    <Route path={'/'} exact element={<Dashboard/>}/>
                    <Route path={'/deck'} element={<StudyPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
