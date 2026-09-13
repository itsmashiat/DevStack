import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
    return(
        <div className="min-h-screen text-slate-900 flex flex-col bg-[#fafafa]">
            <Navbar />

            <main className="flex-1">
                <Hero />
                <div id="technologies" />
                <div id="about" />
                <div id="contact" />
            </main>
            <Footer/>
        </div>
    );

};

export default App;
