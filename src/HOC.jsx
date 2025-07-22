import Header from "./Component/Header";

function HOC(Component) {
    function NewComponent() {
        return (
            <>
                <Header />
                <Component />
            </>
        );
    }
    return NewComponent
}

export default HOC