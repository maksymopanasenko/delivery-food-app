import './shop-panel.css';

function Restaurant({children}) {
    return <li className="panel__item">{children}</li>;
}

export default function Panel() {
    return (
        <ul className="panel__list">
            <Restaurant>McDonalds</Restaurant>
            <Restaurant>KFC</Restaurant>
            <Restaurant>Subway</Restaurant>
            <Restaurant>Taco Bell</Restaurant>
            <Restaurant>Burger King</Restaurant>
        </ul>
    );
}