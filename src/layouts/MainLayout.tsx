import App from "../pages/App";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function MainLayout() {
    return (
        <>
            <Header />

            <main className="max-w-full w-full mx-auto">
                <App />
            </main>

            <Footer />
        </>
    )
}
