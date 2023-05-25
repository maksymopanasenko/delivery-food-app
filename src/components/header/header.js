import './header.css';

function Button({text}) {
    return <button className='header__btn'>{text}</button>
}

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className='header__btns'>
                    <Button text='Shop'/>
                    <Button text='Shopping cart'/>
                </div>
            </div>
        </header>
    );
}