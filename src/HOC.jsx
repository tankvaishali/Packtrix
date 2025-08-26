import { FaWhatsapp } from "react-icons/fa";
import Header from "./Component/Header";
import Footer from "./Footer";

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
                    className="whatsapp-float"
                >
                    <FaWhatsapp size={40} />
                </a>
            </>
        );
    }
    return NewComponent
}

export default HOC