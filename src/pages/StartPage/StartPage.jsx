import { useSelector } from "react-redux";
import Banner from "../../components/banner/Banner";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";
import fetchProducts from '../../store/asyncActions/allData';
import { useDispatch } from 'react-redux';

function StartPage() {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>
            {
                products.length ?
                    <Banner /> :
                    <Loading />
            }
        </>
    );
}

export default StartPage;