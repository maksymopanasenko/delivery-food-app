import { Link } from 'react-router-dom';
import cossack from '../../resources/img/cossack.png';
import './Banner.css';

function Banner() {
    return (
        <div className='banner'>
            <div>
                <h1 className='banner__title'>SichExpress</h1>
                <img src={cossack} alt="cossack" />
                <p className='banner__slogan'><em>"Mountains shiver as we deliver"</em></p>
            </div>
            <p className='banner__msg'>All the necessary data is successfully loaded!</p>
            <Link to='/shops/1'>View offers</Link>
        </div>
    );
}

export default Banner;