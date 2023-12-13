import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import fetchProducts from '../../store/asyncActions/allData';
import { useDispatch } from 'react-redux';

function StartPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>
            <Banner />
        </>
    );
}

export default StartPage;