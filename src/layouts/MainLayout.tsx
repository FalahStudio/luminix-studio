import App from "../pages/App";
import Header from "./header/Header";

export default function MainLayout() {
    return (
        <>
            <Header />

            <main className="max-w-full w-full mx-auto px-5 md:px-10 lg:px-20 ">
                <App />
            </main>
        </>
    )
}
