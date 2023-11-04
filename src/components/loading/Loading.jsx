import gif from '../../resources/gifs/food-truck.gif';
import './Loading.css';

function Loading() {
    return (
        <div className='loading'>
            <img src={gif} alt="gif" />
            <p className='loading__text'>Loading ...</p>
        </div>
    );
}

export default Loading;