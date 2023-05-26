import Header from './components/header/header';
import Panel from './components/shop-panel/shop-panel';
import Board from './components/offer-board/offer-board';
import './App.css';

function App() {
  const data = [
    {name: 'Shrimps', price: 9.5, time: 40, assessment: 5, id: 1},
    {name: 'Bowl', price: 15, time: 30, assessment: 5, id: 2},
    {name: 'Fries', price: 7, time: 25, assessment: 4, id: 3}
  ];

  return (
    <div className='app'>
      <Header />
      <main>
        <div className="container">
          <div className="main__body">
            <Panel />
            <Board data={data}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
