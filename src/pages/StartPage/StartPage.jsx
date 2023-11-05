import { useSelector } from "react-redux";
import Banner from "../../components/banner/Banner";
import Loading from "../../components/loading/Loading";
import { useEffect, useState } from "react";

function StartPage() {
    const products = useSelector(state => state.products.products);
    const [loadedProds, setLoadedProds] = useState(false);

    useEffect(() => {
        setLoadedProds(!loadedProds);
    }, [products])

    return (
        <>
            {
                loadedProds ?
                    <Banner /> :
                    <Loading />
            }
        </>
    );
}

export default StartPage;