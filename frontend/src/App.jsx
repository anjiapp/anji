import './pages/css/App.css';
import Dashboard from "./pages/Dashboard";
import {useState} from "react";

function App() {
    const [page, setPage] = useState(0);
    return (
        <div className={'h-screen overflow-hidden relative'}>
            <h1 className={"absolute top-4 left-8"}>anji</h1> {/*Nav here*/}
            {
                page === 0 ?
                    <Dashboard setPage={setPage} />
                    :
                    <div>Page 2</div>
            }
        </div>
    );
}

export default App;
