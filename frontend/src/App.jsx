import './css/App.css';
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className={'h-screen overflow-hidden relative'}>
            <h1 className={"absolute top-4 left-8"}>anji</h1> {/*Nav here*/}
            <Dashboard />
        </div>
    );
}

export default App;
