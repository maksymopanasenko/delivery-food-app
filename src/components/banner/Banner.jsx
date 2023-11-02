import cossack from '../../resources/img/cossack.png';

function Banner() {
    return (
        <div className='banner'>
            <h1 className='banner__title'>SichExpress</h1>
            <img src={cossack} alt="cossack" />
            <p className='banner__slogan'><em>"Mountains shiver as we deliver"</em></p>
        </div>
    );
}

export default Banner;