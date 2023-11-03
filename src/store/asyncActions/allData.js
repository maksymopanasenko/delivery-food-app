import sendRequest from "../../helpers/fetchData";
import { fetchProductsAC } from '../reducers/products-reducer';

const fetchProducts = () => {
  return dispatch => {
    sendRequest('https://food-delivery-server-nk9c.onrender.com/')
      .then(data => dispatch(fetchProductsAC(data)));

  }
}

export default fetchProducts;