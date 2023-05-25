import Header from './components/header/header';
import Panel from './components/shop-panel/shop-panel';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Panel />
      </main>
    </div>
  );
}

export default App;
