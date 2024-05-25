import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./lib/utils";

function App() {
    return (
        <>
            <ScrollToTop />
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
