import Header from "./Component/Header";
import Footer from "./Footer";
import { AiFillMessage } from "react-icons/ai";

function HOC(Component) {
    function NewComponent() {
        return (
            <>
                <Header />
                <Component />
                <Footer />

                <a
                    href="https://wa.me/919099924140"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-float py-2 py-md-3 px-4"
                >
                    <AiFillMessage size={24} className="me-2" />
                    <span className="fw-bold fs-6">Let's Chat!</span>
                </a>

            </>
        );
    }
    return NewComponent
}

export default HOC