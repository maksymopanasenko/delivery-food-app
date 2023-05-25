import './shop-panel.css';

function Restaurant({name}) {
    return <li className="panel__item">{name}</li>;
}

export default function Panel() {
    return (
        <ul className="panel__list">
            <Restaurant name='McDonalds'/>
            <Restaurant name='KFC'/>
            <Restaurant name='Subway'/>
            <Restaurant name='Taco Bell'/>
            <Restaurant name='MaxBurger'/>
        </ul>
    );
}