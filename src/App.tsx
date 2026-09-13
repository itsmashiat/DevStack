import './App.css';
import Navbar from "./components/Navbar";

const App = () => {
    return(
        <div className="min-h-screen text-slate-900 flex flex-col bg-[#fafafa]">
            <Navbar />

            <main className="flex-1">
                <div id="home" />
            </main>
        </div>
    );

};

export default App;
