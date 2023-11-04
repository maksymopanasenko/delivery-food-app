import { useSelector } from "react-redux";
import Banner from "../../components/banner/Banner";
import Loading from "../../components/loading/Loading";

function StartPage() {
    const products = useSelector(state => state.products.products);

    return (
        <>
            {
                products ?
                    <Banner /> :
                    <Loading />
            }
        </>
    );
}

export default StartPage;